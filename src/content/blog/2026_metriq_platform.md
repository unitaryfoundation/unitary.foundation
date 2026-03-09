---
title: "Metriq: A Collaborative Platform for Benchmarking Quantum Computers"
author: The Metriq Team
day: 9
month: 3
year: 2026
tags: 
  - benchmark
  - Metriq
  - open source
---

Today we are releasing a major update to Metriq, our platform for open, community-driven quantum computer benchmarking.

This release introduces [metriq-gym](https://github.com/unitaryfoundation/metriq-gym), a new open-source toolkit for defining and running benchmarks across hardware providers, [metriq-data](https://github.com/unitaryfoundation/metriq-data), a public dataset of benchmark results, along with updates to the [Metriq website](https://metriq.info/) where results can be easily tracked and shared.

*We invite the quantum community to suggest improvements, extend the benchmark suite, run experiments, and upload new results. 
As quantum computers evolve over time, the Metriq platform will evolve with them. See you on GitHub!*

## Our goals for Metriq

> How does a processing unit X perform on workload W – and how has that changed over time?

In classical computing, answering this question is possible through mature and (mostly) standardized benchmarking.

Before buying a GPU, you can usually find side-by-side benchmarks for the kind of games you care about; for CPUs, tools like [Geekbench](https://browser.geekbench.com) summarize performance across common tasks (file compression, compiling C programs, rendering PDFs, and more). At the high end, [LINPACK benchmarks](https://www.top500.org/project/linpack/) have long been used to rank the world's most powerful supercomputers. And in the GenAI era, MLPerf brought benchmarking into modern ML by giving researchers, vendors, and practitioners a shared suite for training and inference.

In quantum computing, a crisp answer to the same question is still a work in progress.

The challenges are both practical and structural. Benchmarking quantum computers today means navigating a fragmented landscape where reproducibility is the exception, not the norm:

- Vendor-specific tools tied to a single hardware stack
- Results scattered across papers and press releases
- No standardized cross-platform datasets
- Benchmarks rarely reproduced independently, with code isolated in hard-to-find Python notebooks.

Still, there has been important progress: from the first widely-adopted systemic-level benchmarks, such as [Quantum Volume](https://arxiv.org/abs/1811.12926), [CLOPS](https://arxiv.org/abs/2110.14108) and [EPLG](https://arxiv.org/abs/2311.05933), to more application-oriented benchmarks such as those vetted by the [QED-C](https://arxiv.org/abs/2110.03137) consortium. As quantum computing capabilities evolve, benchmarks have started to capture crucial components for quantum error correction, such as mid-circuit measurements and dynamic circuits. Suites like [SupermarQ](https://arxiv.org/abs/2202.11045), [QUARK](https://doi.org/10.1109/QCE53715.2022.00042), and [BACQ](https://arxiv.org/abs/2403.12205) each target different layers of the stack, while Sandia's [pyGSTi](https://doi.org/10.1088/2058-9565/ab8aa4) provides rigorous gate-set tomography. Comprehensive [reviews](https://doi.org/10.1038/s42254-024-00796-z), [systematic recommendations](https://arxiv.org/abs/2503.04905), and [visions](https://www.linkedin.com/pulse/charting-path-quantum-advantage-through-rigorous-jay-gambetta-rglqe/) provide broader perspectives on the field.

Today we're launching the **Metriq Platform**: an open, collaborative workflow for 
- *running benchmarks reproducibly*, 
- *publishing the resulting data with transparent provenance*, and 
- *making it easy for the community to explore and discuss results constructively*.

At the same time, we're posting a companion paper on arXiv (TODO: add link). The paper provides technical background for the platform: how the workflow is designed, how the benchmark suite is implemented, and how we think about aggregation, cost, and the practical blockers that keep “benchmarks in theory” from becoming “benchmarks people can actually run.” The paper also showcases a collection of cross-vendor results obtained through the Metriq platform itself.

## What makes Metriq different?

Unlike vendor-maintained benchmarking suites, Metriq is built to act as a neutral reference point — a shared foundation for constructive comparison rather than a stack-specific performance lens. The platform is:

-	Vendor-neutral: Metriq is an independent project for the community, maintained by the Unitary Foundation non-profit.
-	Cross-platform by design: The same benchmark configuration runs across multiple providers.
-	A living platform: Benchmarks are re-executed periodically, enabling longitudinal tracking as devices and stacks evolve.
-	Open and transparent (FAIR-first): Code is fully open source, and datasets and schemas are public and structured around [FAIR principles](https://www.go-fair.org/fair-principles/).
-	Community-driven governance: Benchmarks are proposed via open RFCs, results are peer-reviewed, and aggregation choices (including scoring weights) are discussed in the open.
-	Schema-validated reproducibility: Benchmark configurations are formally defined and validated so "the same benchmark" actually means the same experiment.

## A runner, a dataset, a new website

The Metriq platform is organized around three complementary components.
- [metriq-gym](https://github.com/unitaryfoundation/metriq-gym) is the runner: a Python toolkit that dispatches benchmark circuits to different quantum providers and collects results in a standardized format. 
- [metriq-data](https://github.com/unitaryfoundation/metriq-data) is the dataset: a public, versioned repository of benchmark results designed to follow FAIR principles and enable reproducible analysis.
- [metriq-web](https://github.com/unitaryfoundation/metriq-web) is a new website (currently in *beta* at https://metriq.info), which turns the dataset into an interactive dashboards.

<figure>
  <img src="/images/2026_metriq_platform/metriq-platform.png"/>
</figure>

The platform makes it easy to run the same benchmarks across providers and share results with the community.

## An initial suite of benchmarks

Along with the infrastructure, we are also releasing a curated suite of benchmarks, which we believe is a good starting point for conversations around different aspects of quantum computers. A device can have excellent two-qubit gate fidelity but poor connectivity, or great coherence but low throughput. We wanted a suite that probes different dimensions of performance, and that people can actually afford to run.

The suite currently includes eight benchmarks spanning system-level diagnostics and application-inspired workloads. We see this as a first draft that will evolve with community input.

We chose benchmarks that are *frugal* (cheap enough to reproduce) and *scalable* (they are still meaningful as devices grow). The suite is intentionally opinionated — these are the benchmarks we think matter today — but it's designed to evolve (see it as a version 1.0).

<figure>
  <img src="/images/2026_metriq_platform/metriq-gym.gif" alt="metriq-gym CLI" />
  <figcaption>metriq-gym CLI in action.</figcaption>
</figure>


For the first release, we ran the full suite across devices from IBM, Quantinuum, IQM, Rigetti, and OriginQ — eleven devices in total. The results are aggregated into a composite Metriq score that normalizes each benchmark against a baseline device and combines them with scale-aware weights. It's a single number meant to start conversations, not end them. The paper goes deep on how the scoring works, the tradeoffs involved, and why we made the choices we did.

## A starting point

The results in our companion paper are a snapshot, not a verdict. Quantum hardware is a moving target: devices get recalibrated, new systems come online, and providers update their software stacks. Any static set of benchmark numbers will drift out of date. That's exactly why Metriq is designed as a living platform rather than a one-off study. Benchmarks get re-executed periodically, new results are submitted through open pull requests, and the dataset grows over time. Follow along at https://metriq.info/ to see the latest data.

## An open invitation

The Metriq Platform only works if people use it, contribute to it, and argue about it. Above all, this post is a call to the community to contribute ideas, feedback, and code.

Here is how to get involved:

- **Run benchmarks and submit results.** Pick a device you have access to, run the suite, and open a PR. Every submission is reviewed and becomes part of the public dataset.
- **Review existing data.** Spot something that looks off? Flag it. Peer review of benchmark results is just as valuable as peer review of papers.
- **Propose new benchmarks.** Think something important is missing from the suite? Open an RFC and make the case.
- **Join the conversation.** Find us on the `#metriq` channel in the [Unitary Foundation Discord](https://discord.unitary.fund), or start a thread in [GitHub Discussions](https://github.com/unitaryfoundation/metriq-gym/discussions).
- **Contribute code.** Whether it's improving the runner, adding new benchmarks, or building new features for the website, contributions to the codebase are always welcome.
- **Simply star our repositories.** ⭐️

We also hope that our platform creates a flywheel: as Metriq scores become more visible and useful, we hope that hardware vendors and cloud providers will make it increasingly easy to run benchmarks on their systems.

Benchmarking is ultimately a community effort. We would like to acknowledge the [Open Quantum Benchmark Committee (OQBC)](https://unitary.foundation/posts/2024_benchmark_committee/), an initiative we launched in 2024 to bring together researchers, hardware providers, and practitioners around open benchmarking discussions. Members of the committee have helped us iterate on Metriq by providing feedback on benchmark definitions and methodology.

Within the Metriq Platform, we see the committee playing a role similar to a *working group*, comparable to those in initiatives like [MLCommons](https://mlcommons.org/working-groups/). While Metriq provides open infrastructure for running benchmarks and sharing results, the committee provides a venue where the community can discuss and refine benchmarking practices as the ecosystem evolves.

We would also like to thank everyone who has already contributed to the Metriq codebase and datasets. Open-source infrastructure only works because people take the time to review code, propose improvements, run benchmarks, and share results. We are grateful for the early contributors who helped make this launch possible.

## What's next?

The suite will grow alongside the hardware it measures. A few directions we're actively thinking about:

- **More benchmarks, more providers.** The current suite of eight benchmarks is a starting point. We plan to continue adding new benchmarks, supporting additional hardware providers, and scaling existing benchmarks to larger problem sizes as devices catch up.
- **Logical-qubit benchmarks.** As fault-tolerant devices start to emerge, benchmarking needs to move beyond physical qubits. We're working on protocols that evaluate logical-level performance.
- **Quantum error mitigation.** Integration with [Mitiq](https://mitiq.readthedocs.io/) to optionally layer error suppression techniques (ZNE, PEC, dynamical decoupling) on top of benchmark runs — so you can see how much mitigation actually buys you on a given device.
- **Community features.** The Metriq website will gain the ability to annotate, comment on, and discuss results directly — making it easier to have the conversations that benchmarking data should spark.

The goal isn't to declare winners. It's to build the shared, evolving empirical record that the field needs to make progress — transparently and together.

**We look forward to further developing Metriq with and for the whole quantum computing ecosystem.**
