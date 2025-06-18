---
title: "Better Together: Mitiq meets UCC"
author: nate stemen and Jordan Sullivan
day: 18
month: 6
year: 2025
tags: 
  - python
  - mitiq
  - ucc
---

**Combining error mitigation and compilation for stronger quantum performance**

<div style="display: flex; justify-content: center;">
    <img style="margin-top: 0; margin-bottom: 0;" src="/images/2025-mitiq-ucc/mitiq-ucc.png" alt="mitiq logo tensor producted with the UCC logo" width="500"/>
</div>

Error mitigation and circuit compilation are two critical components of an effective quantum computing stack.
Error mitigation works to reduce the impact of unwanted physics on the results of quantum circuit runs, enabling [larger achievable volumes](https://arxiv.org/abs/2203.05489), and [more accurate expectation values](https://quantum-journal.org/papers/q-2022-08-11-774/).
Circuit compilation reduces the overall circuit volume, which in turn reduces the number of possible errors in circuit execution -- more gates means more chances of encountering an error.

While these two components of the stack are often used and studied independently, we have found that using them in conjunction can lead to even better results.
In this blog post, we will walk you through our first demonstration combining quantum error mitigation and quantum circuit compilation.

## mitiq

For the past [five years](./2024_mitiq_impact), Unitary Foundation has developed a powerful open-source library for quantum error mitigation called [Mitiq](https://mitiq.readthedocs.io) which has amassed 248k downloads on PyPI to date.
Mitiq provides a suite of error mitigation techniques, including:

- **Zero-Noise Extrapolation (ZNE)**: Extrapolates results from noisy runs at different noise levels to estimate the ideal result, and the subject of our first demonstration.
- **Probabilistic Error Cancellation (PEC)**: Uses hardware calibration data to create modified circuits to selectively cancel out noise in resulting expectation values.
- **Clifford Data Regression (CDR)**: Leverages the efficient simulability of Clifford circuits to train a primitive model to correct the impact of errors.

## UCC

The Unitary Foundation team has a unique vantage point on the open-source quantum software landscape, and last year we decided to dive into what we see as one of the biggest missing pieces of an open-source quantum stack: a **modular, cross-platform quantum circuit compiler**.
Last year the Unitary Foundation team decided one of the biggest missing pieces of an open-source quantum stack was a **modular, cross-platform quantum circuit compiler**.
We set to work and [launched](./2025_ucc_launch_blog) the [Unitary Compiler Collection (UCC)](https://github.com/unitaryfoundation/ucc) earlier this year.


## Bringing Them Together

With UCC's launch, and a stable interface put forth, we were excited to test how the two tools work together.
Code-wise, the tools work together seamlessly.
First, you compile your quantum circuit with UCC, then you pass the compiled circuit into one of Mitiq's error mitigation routines.

E.g. with Zero-Noise Extrapolation (ZNE) the code is as simple as:

```py
import ucc, mitiq

circuit = ...  # Your quantum circuit here

# compilation
compiled_circuit = ucc.compile(circuit, target_device="ibmq_mumbai")

# mitigation
my_executor = ...  # Your method of running circuits.
                   # e.g. a function that takes a quantum circuit
                   # and returns a (noisy) expectation value
                   # such as a Qiskit or Cirq simulation wrapper

mitigated_result = mitiq.zne.execute(
    compiled_circuit,
    executor=my_executor,
    scale_noise=mitiq.zne.scaling.fold_gates_at_random
)
```

A more fleshed-out and complete example can be found in our [Mitiq + UCC tutorial](https://mitiq.readthedocs.io/en/stable/examples/ucc.html), but the plot below shows the important part: compiling before applying ZNE leads to the most significant reduction in error amount the four combinations of compilation and mitigation.

<div style="display: flex; justify-content: center;">
  <figure style="margin: 0;">
    <img src="/images/2025-mitiq-ucc/compilation-impact.png" width=600 alt="Horizontal bar plot with two bars showing the performance of compiled and uncompiled expectation values under a depolarizing noise model. Mitigation is shown as a shaded bar on top of each bar."/>
  </figure> 
</div>

## What's Next?

We're working to study further how error mitigation and circuit compilation combine to improve performance.
Ongoing research can be found in Unitary Foundation's [research repository](https://github.com/unitaryfoundation/research/pull/31).

If you're a quantum developer or researcher, using a workflow like this, we'd love to hear any [feedback](https://github.com/unitaryfoundation/mitiq/discussions) you may have.
Your insights can help shape the future of these tools!

## Get Involved

| Project | Repository | Documentation | Discord Channel |
| ------- | ---------- | ------------- | --------------- |
| `mitiq` | [unitaryfoundation/mitiq](https://github.com/unitaryfoundation/mitiq) | [mitiq.readthedocs.io](https://mitiq.readthedocs.io) | [`#mitiq`](https://discord.com/channels/764231928676089909/773957956659052605) |
| `ucc`   | [unitaryfoundation/ucc](https://github.com/unitaryfoundation/ucc)     | [ucc.readthedocs.io](https://ucc.readthedocs.io)     | [`#ucc`](https://discord.com/channels/764231928676089909/1346546840526524427) |

Let's build quantum tools that are **greater than the <s>sum</s> (tensor) product of their parts**.
