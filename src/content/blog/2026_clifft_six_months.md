---
title: "Clifft, six months in"
author: Brad Chase
day: 1
month: 11
year: 2026
tags:
    - simulation
    - fault tolerance
    - open source
    - AI
    - Clifft
---

Six months ago, we [introduced Clifft](https://unitary.foundation/posts/2026_clifft/) to make exact simulation practical for studying early fault-tolerant protocols. These circuits combine large Clifford backbones with non-Clifford operations that Stim cannot simulate directly, at scales where conventional state-vector simulation becomes impractical. Both software and the underlying theory in this space have moved quickly.

![Clifft logo](/images/2026_clifft_six_months/clifft_logo_small.png)

Since launch, Clifft has recorded **more than 35,000 [PyPI downloads](https://pepy.tech/projects/clifft?timeRange=threeMonths&category=version&includeCIDownloads=true&granularity=weekly&viewType=line&versions=Total%2C0.*)**, and its paper has been cited by **[18 other papers](https://inspirehep.net/literature/3150655)**.

Clifft itself has become faster, gained richer noise models, and incorporated ideas from other open-source simulators. Alongside that technical progress, we have been developing a way of working: using AI agents to continually integrate advances across the field into a dependable research tool.

## Faster experiments and richer physics

The central idea behind Clifft is to avoid paying dense state-vector costs for qubits that don't currently need dense amplitude tracking. Over the 12 releases since launch, we’ve further reduced these costs through symbolic planning, CPU batching, and better operation ordering. The compiler stage also adds new optimization passes that reduce the size of the active quantum state, eliminating some work altogether. Across a set of six benchmark workloads, we see a **13.6× median sampling speedup over Clifft v0.1.0**

![Median Clifft sampling throughput by release relative to v0.1.0](/images/2026_clifft_six_months/performance-over-time-light.png)

*See [benchmark methodology](https://unitaryfoundation.github.io/clifft/stable/guide/performance/) for execution settings and measurement details.*

Clifft also has experimental [HIP](https://unitaryfoundation.github.io/clifft/stable/development/hip-backend/) and [CUDA](https://unitaryfoundation.github.io/clifft/stable/development/cuda-backend/) GPU backends, with HIP contributions from [Jose Manuel Monsalve Diaz](https://github.com/josemonsalve2) at AMD. GPUs offer substantial compute and memory bandwidth, but Clifft’s active state vector can grow and shrink within a single circuit. When tiny, parallelism across many mostly classical shots is a natural fit. As it grows, the GPU can favor threads cooperating on states held in fast shared memory; when it gets very large, the state requires parallel updates to larger state vectors in device memory. Learning how best to adapt GPU execution as a circuit moves between these regimes is part of the work ahead.

Researchers can also ask more realistic questions. Clifft now models [leakage and loss noise](https://unitaryfoundation.github.io/clifft/stable/guide/leakage-and-loss/), including state-dependent transitions and their back-action on the remaining quantum state. This lets researchers study how realistic effects, such as atom loss in neutral-atom architectures, affect fault-tolerant strategies. Recent additions let leaked or lost qubits disturb their gate partners, and let circuits use leakage and loss checks in detectors and feedback. Importantly, these features compose seamlessly with the core near-Clifford simulator tool, giving you the best of both capabilities in a single tool.

Check out the [Clifft development blog](https://unitaryfoundation.github.io/clifft/stable/updates/smaller-active-states/) for more detail on recent releases and their features.

## Building with AI and open research

AI played a big role in developing Clifft, and that role continues to grow. Coding agents handle implementation, review, analysis, and documentation, with human guidance and review. Agents expand the range of ideas a small research team can investigate and turn into working software.

AI also lets us rapidly integrate others' innovations. The exchange with [SymFT](https://arxiv.org/abs/2607.28600) is a great example. SymFT combined ideas from the author's earlier SOFT simulator with Clifft's dense active-state representation, then introduced symbolic planning and direct operations on that state for even more speedup. Thanks to AI, Clifft [adopted those developments](https://unitaryfoundation.github.io/clifft/stable/updates/symbolic-sampling/) in August, just a few weeks after the preprint appeared.

A similar exchange with [Tsim](https://github.com/QuEraComputing/tsim) now runs both ways. Tsim helped shape Clifft's Stim-compatible interface and workflow. In October, Tsim [merged an active-statevector sampler inspired by Clifft](https://github.com/QuEraComputing/tsim/pull/203) that outperforms Clifft on some benchmarks. It reads computations directly from simplified ZX diagrams and finds smaller active states on several benchmark circuits. Combining Clifft's approach with Tsim's strengths creates further opportunities to improve performance.

AI also helps us explore ideas inspired by other work. For example, recent Clifft development drew on [Merlin](https://arxiv.org/abs/2610.06811) to [extend compiler optimizations for measured code-switching preparations](https://github.com/unitaryfoundation/clifft/pull/552).

Clifft can quickly leverage these advances because of its extensive testing and validation frameworks, and our agents regularly survey the ecosystem for new capabilities to integrate. Importantly, we document the [source of these developments](https://github.com/unitaryfoundation/clifft/blob/main/docs/acknowledgments.md), so that credit travels with the ideas.

## Simulation that keeps up with your research

Different simulators bring different strengths, and we encourage researchers to explore them and compare results. With Clifft, we want researchers to benefit from simulation advances without continually redesigning their workflows. Improving that experience is as central to the project as developing new algorithms.

That means being able to revise a protocol, change a noise model, or add measurements and feedback while continuing to work through a familiar interface. Researchers should be able to concentrate on the experiment they are designing: describing the circuit, choosing physical assumptions, and interpreting the results. Our goal is for Clifft to handle more simulation choices automatically, so software improvements translate into faster or more capable experiments.

## Clifft in the wild

Magic-state cultivation originally motivated Clifft: we wanted to simulate the actual non-Clifford dynamics and test assumptions made using a simpler Clifford proxy. It has been encouraging to see independent work deepen that understanding. [Wan and Zapirain](https://arxiv.org/abs/2609.18922) recovered Clifft’s and SOFT’s numerical estimates through an exact calculation, while [Chan and colleagues](https://arxiv.org/abs/2609.17706) identified a weakness in the original cultivation circuit that the proxy missed. Together, these results show why making exact simulation accessible matters.

In September, we also presented Clifft at the [Advanced Simulations of Quantum Computations Workshop](https://sites.google.com/view/asqcworkshop/home), the [Quantum Software 2.6 Workshop](https://sites.google.com/view/quantum-software-workshop-2026) and the [International Workshop on Quantum Compilers](https://quantum-compilers.github.io/iwqc2026/) during IEEE Quantum Week. Community contributions have also expanded the project, including the [Qiskit adapter](https://github.com/unitaryfoundation/clifft-qiskit) developed by [Ashmit Gupta](https://github.com/ashmitjsg) during [unitaryHACK](https://unitaryhack.dev/).

As a guiding principle, we want Clifft to be shaped by the experiments researchers need to run. Bring us circuits, difficult noise models, and benchmark cases to help inform that roadmap! Start with the [documentation](https://unitaryfoundation.github.io/clifft/stable/), try the [playground](https://unitaryfoundation.github.io/clifft/playground/), or join us on [GitHub](https://github.com/unitaryfoundation/clifft) and the [Unitary Foundation Discord](https://discord.unitary.foundation).

<small>This material is based upon work supported by the U.S. Department of Energy, Office of Science, Office of Advanced Scientific Computing Research, Accelerated Research in Quantum Computing under Award Number DE-SC0025336. This material is also based upon work supported by the U.S. Department of Energy, Office of Science, National Quantum Information Science Research Centers, Quantum Science Center.</small>
