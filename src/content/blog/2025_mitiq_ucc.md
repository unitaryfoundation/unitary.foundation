---
title: "Better Together: Mitiq meets UCC"
author: nate stemen
day: 13
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
Circuit compilation reduces the overall circuit volume, which in turn lowers the susceptibility to noise during execution.

While these two components of the stack are often used, and studied, independently, we believe that allowing them to work in conjunction can lead to even better results.

## mitiq

For the past [five years](./2024_mitiq_impact), Unitary Foundation has developed a powerful open-source library for quantum error mitigation called [Mitiq](https://mitiq.readthedocs.io).
Mitiq provides a suite of error mitigation techniques, including:

- **Zero-Noise Extrapolation (ZNE)**: Extrapolates results from noisy runs at different noise levels to estimate the ideal result.
- **Probabilistic Error Cancellation (PEC)**: Uses probabilistic techniques to cancel out noise in the results.
- **Clifford Data Regression (CDR)**: Leverages the properties of Clifford gates to improve the accuracy of results.

## UCC

Last year the Unitary Foundation team decided one of the biggest missing pieces of an open-source quantum stack was a **modular, cross-platform quantum circuit compiler**.
We set to work and [launched](./2025_ucc_launch_blog) the [Unitary Compiler Collection (UCC)](https://ucc.readthedocs.io) earlier this year.


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

A more fleshed-out and complete example can be found in our [Mitiq + UCC tutorial](https://mitiq.readthedocs.io/en/stable/examples/ucc.html).

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
