---
title: "Metriq: A Collaborative Platform for Benchmarking Quantum Computers"
author: The Metriq Team
day: 10
month: 3
year: 2026
tags: 
  - benchmark
  - Metriq
  - open source
---

Today we are releasing a major update to Metriq, our platform for open, community-driven quantum computer benchmarking.

This release introduces  <a href="https://github.com/unitaryfoundation/metriq-gym" target="_blank" rel="noopener noreferrer">metriq-gym</a>, a new open-source toolkit for defining and running benchmarks across hardware providers, <a href="https://github.com/unitaryfoundation/metriq-data" target="_blank" rel="noopener noreferrer">metriq-data</a>, a public dataset of benchmark results, along with a new <a href="https://metriq.info/" target="_blank" rel="noopener noreferrer">Metriq website</a>, where results can be tracked and shared.

We invite the quantum community to suggest improvements, extend the benchmark suite, run experiments, and upload new results. 
As quantum computers evolve over time, the Metriq platform will evolve with them. See you on GitHub!

## Our goals for Metriq

How does a processing unit U perform on workload W – and how has that changed over time?

In classical computing, answering this question is possible through mature and (mostly) standardized benchmarking. Before buying a GPU, one can usually find side-by-side benchmarks for the games they want to play or the ML models they want to train; for CPUs, tools like [Geekbench](https://browser.geekbench.com) summarize performance across common everyday tasks (file compression, compiling C programs, rendering PDFs, and more). At the high end, [LINPACK benchmarks](https://www.top500.org/project/linpack/) have long been used to rank the world's most powerful supercomputers. And in the GenAI era, MLPerf brought benchmarking into the modern ML world by giving researchers, vendors, and practitioners a shared suite for training and inference.

In quantum computing, a crisp answer to the same question is still a work in progress.
Benchmarking quantum computers today means navigating a fragmented landscape where reproducibility is the exception, not the norm. The challenges are both practical and structural:

- Vendor-specific tools tied to a single hardware stack
- Results scattered across papers and press releases
- No standardized cross-platform datasets
- Benchmarks rarely reproduced independently, with code often isolated in hard-to-find Python notebooks.

Still, there has been important progress. Early benchmarks such as [Quantum Volume](https://arxiv.org/abs/1811.12926) helped establish common ways of characterizing quantum processors, while later proposals like [CLOPS](https://arxiv.org/abs/2110.14108) and [EPLG](https://arxiv.org/abs/2311.05933) explored additional dimensions of performance, from execution speed to layered-gate fidelity. Community efforts such as the [QED-C](https://arxiv.org/abs/2110.03137) benchmarking initiative and benchmark suites like [SupermarQ](https://arxiv.org/abs/2202.11045), [QUARK](https://doi.org/10.1109/QCE53715.2022.00042), and [BACQ](https://arxiv.org/abs/2403.12205) have continued to expand the landscape.

Yet despite this progress, benchmarks are still difficult to run and compare across platforms, and results often remain scattered across papers and repositories.

Today we're launching the **Metriq Platform**: an open, collaborative workflow for 
- running benchmarks reproducibly across hardware from different vendors, 
- publishing the resulting data with transparent provenance, and 
- making it easy for the community to explore and discuss results constructively.

📃 Alongside this release, we've posted a <a href="https://arxiv.org/abs/2603.08680" target="_blank" rel="noopener noreferrer">companion paper on arXiv</a>. 
The paper provides technical background for the platform: how the workflow is designed, how the benchmark suite is implemented, and how we think about aggregation, cost, and the practical blockers that keep “benchmarks in theory” from becoming “benchmarks people can actually run.” The paper also showcases a collection of cross-vendor results obtained through the Metriq platform itself.

## What makes Metriq different?

Metriq is designed to act as a neutral reference point — a shared foundation for constructive comparison rather than a stack-specific performance lens. The platform is:

-	**Vendor-neutral**: Metriq is an independent project maintained by the nonprofit  Unitary Foundation.
-	**Cross-platform by design**: The same benchmark configuration runs across multiple providers.
-	**A living platform**: Benchmarks are periodically re-executed, enabling longitudinal tracking as devices and stacks evolve.
-	**Open and transparent**: Code is fully open source, and datasets and schemas are public and structured around [FAIR principles](https://www.go-fair.org/fair-principles/).
-	**Community-driven governance**: Benchmarks are proposed via open RFCs, results are peer-reviewed, and aggregation choices are discussed in the open.
-	**Schema-validated reproducibility**: Benchmark configurations are formally defined and validated so "the same benchmark" actually means the same experiment.

## A runner, a dataset, a new website

In practice, the Metriq platform is built around three complementary components that together form the benchmarking workflow.
- [metriq-gym](https://github.com/unitaryfoundation/metriq-gym) is the runner: a Python toolkit that dispatches benchmark circuits to different quantum providers and collects results in a standardized format. 
- [metriq-data](https://github.com/unitaryfoundation/metriq-data) is the dataset: a public, versioned repository of benchmark results.
- [metriq-web](https://github.com/unitaryfoundation/metriq-web) is the web interface (currently in *beta* at https://metriq.info), which turns the dataset into a set of interactive dashboards.

<figure>
  <img 
    style="display:block; margin:auto;" 
    src="/images/2026_metriq_platform/metriq-platform.png"
    alt="Metriq platform component" />
  <figcaption>The Metriq platform architecture.</figcaption>
</figure>

## An initial suite of benchmarks

Along with the infrastructure, we are releasing a curated suite of benchmarks designed to probe different aspects of quantum computers. A device can have excellent two-qubit gate fidelity but poor connectivity, or great coherence but low throughput. We wanted a suite that assesses different dimensions of performance, and that people can actually afford to run.

The suite currently includes eight benchmarks spanning system-level diagnostics and application-inspired workloads. We see this as a first draft that will evolve with community input.

We chose benchmarks that are *frugal* (cheap enough to reproduce) and *scalable* (still meaningful as devices grow). The suite is intentionally opinionated — these are the benchmarks we think matter today — but it's designed to evolve (see it as a version 1.0 and we are looking forward to many more versions to come!)

<figure>
  <img 
    style="display:block; margin:auto;"  
    src="/images/2026_metriq_platform/metriq-gym.gif" 
    alt="metriq-gym CLI" />
  <figcaption>metriq-gym CLI in action.</figcaption>
</figure>


For the first release, we ran the full suite across devices from IBM, Quantinuum, IQM, Rigetti, and OriginQ — eleven devices in total. The results are aggregated into a composite Metriq score that normalizes each benchmark against a baseline device and combines them with scale-aware weights. It's a single number meant to start conversations, not end them. The paper goes deep on how the scoring works, the tradeoffs involved, and why we made the choices we did.

## A starting point

The results in our companion paper are a snapshot of the dataset at this point in time. Quantum hardware is a moving target: devices get recalibrated, new systems come online, and providers update their software stacks regularly. Any static set of benchmark numbers will drift out of date. That's exactly the point of Metriq: it is designed as a living platform rather than a one-off study. Benchmarks get re-executed periodically, new results are submitted regularly, and the dataset grows over time. Follow along at https://metriq.info/ to see the latest results.

## An open invitation

The Metriq Platform only works if people use it, contribute to it, and discuss it. Above all, this post is a call to the community to contribute ideas, feedback, and code.

Here is how to get involved:

- **Run benchmarks and submit results.** Pick a device you have access to, run the suite with metriq-gym, and open a PR to metriq-data. Every submission is reviewed and becomes part of the public dataset.
- **Review existing data.** Spot something that looks off? Flag it. Peer review of benchmark results is just as valuable as peer review of papers.
- **Propose new benchmarks.** Think something important is missing from the suite? Open an <a href="https://github.com/unitaryfoundation/metriq-gym/issues" target="_blank" rel="noopener noreferrer">issue</a> and make the case.
- **Join the conversation.** Find us on the `#metriq` channel in the <a href="https://discord.unitary.foundation" target="_blank" rel="noopener noreferrer">Unitary Foundation Discord</a>, or start a thread in <a href="https://github.com/unitaryfoundation/metriq-gym/discussions" target="_blank" rel="noopener noreferrer">GitHub Discussions</a>.
- **Contribute code.** Whether it's improving the runner, adding new benchmarks, or building new features for the website, contributions to the codebase are always welcome.
- **Simply star the repositories.** ⭐️

We also hope that our platform creates a positive flywheel for the benchmarking ecosystem: as Metriq scores become more visible and useful, we hope that hardware vendors and cloud providers will make it increasingly easy to run benchmarks on their systems.

Benchmarking is ultimately a community effort. We would like to acknowledge the <a href="https://unitary.foundation/posts/2024_benchmark_committee/" target="_blank" rel="noopener noreferrer">Open Quantum Benchmark Committee (OQBC)</a>, an initiative we launched in 2024 to bring together researchers, hardware providers, and practitioners around open benchmarking discussions. Members of the committee have helped us iterate on Metriq by providing feedback on benchmark definitions and methodology. Within the Metriq Platform, we see the committee playing a role similar to a *working group*, comparable to those in initiatives like <a href="https://mlcommons.org/working-groups/" target="_blank" rel="noopener noreferrer">MLCommons</a>.

We would like to thank the early contributors to the Metriq codebase who helped make this launch possible – including contributors to <a href="https://github.com/unitaryfoundation/metriq-gym/graphs/contributors" target="_blank" rel="noopener noreferrer">metriq-gym</a>, <a href="https://github.com/unitaryfoundation/metriq-web/graphs/contributors" target="_blank" rel="noopener noreferrer">metriq-web</a>, and <a href="https://github.com/unitaryfoundation/metriq-data/graphs/contributors" target="_blank" rel="noopener noreferrer">metriq-data</a>.

## What's next?

A few directions we're actively thinking about for developing the platform further:

- **More benchmarks, more providers.** The current suite of eight benchmarks is a starting point. We plan to continue adding new benchmarks, supporting additional hardware providers, and scaling existing benchmarks to larger problem sizes as devices catch up. 
- **Logical-qubit benchmarks.** As fault-tolerant devices start to emerge, benchmarking needs to move beyond physical qubits. We're working on protocols that evaluate logical-level performance.
- **Quantum error mitigation.** Integration with [Mitiq](https://github.com/unitaryfoundation/mitiq) to optionally layer error suppression techniques (ZNE, PEC, dynamical decoupling) on top of benchmark runs.
- **Community features.** The Metriq website will make it easier to interact and discuss results.

The goal isn't to declare winners. It's to build a shared empirical record of quantum hardware performance that helps the field track progress toward quantum advantage and fault-tolerant computing.

**We look forward to continuing to develop Metriq with and for the quantum computing community.**
