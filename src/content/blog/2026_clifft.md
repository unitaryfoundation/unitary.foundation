---
title: "Introducing Clifft: Exact Simulation for Early Fault-Tolerant Circuits"
author: Brad Chase, Farrokh Labib
day: 1
month: 5
year: 2026
tags:
    - simulation
    - fault tolerance
    - open source
    - Clifft
---

In early fault-tolerant quantum computing, researchers increasingly face a frustrating compromise. You want the billions of shots and high throughput of a stabilizer simulator like [Stim](https://github.com/quantumlib/Stim), but your circuit relies on a small but essential set of non-Clifford operations that require exact, dense state vector tracking. Dense simulators scale exponentially with the total qubit count, making them impossibly expensive for most error-correction protocols.

<figure>
  <img
    style="display:block; margin:auto; max-width: 280px; width: 100%;"
    src="/images/2026_clifft/clifft_logo_light.png"
    alt="Clifft Logo" />
</figure>

Today, we are releasing **Clifft**, an open-source simulator designed to push this tradeoff much further. If you have a Stim circuit and want to add non-Clifford gates, Clifft provides a familiar compile-once and sample-many workflow with outstanding performance in this regime. It is designed specifically for the "awkward middle": circuits with large Clifford backbones, noisy operations, mid-circuit measurements, and localized non-Clifford structure. Alongside the software release, we are posting a companion paper that describes the theory, implementation, benchmarks, and an application to end-to-end magic-state cultivation.

**Try Clifft:** <a href="https://github.com/unitaryfoundation/clifft" target="_blank" rel="noopener noreferrer">GitHub</a> · <a href="https://unitaryfoundation.github.io/clifft" target="_blank" rel="noopener noreferrer">Documentation</a> · <a href="https://unitaryfoundation.github.io/clifft/playground/" target="_blank" rel="noopener noreferrer">Playground</a> · <a href="https://pypi.org/project/clifft/" target="_blank" rel="noopener noreferrer">PyPI</a> · <a href="https://arxiv.org/abs/2604.27058" target="_blank" rel="noopener noreferrer">Paper</a>

## The gap between stabilizer and state vector simulation

Classical simulation is how we design and test fault-tolerant quantum protocols before hardware scales. For purely Clifford circuits, tools like Stim have made it practical to sample the trillions of shots needed to evaluate logical error rates. But universal computation requires non-Clifford resources. Dense state vector methods can handle these, but their memory costs grow exponentially with every physical qubit added.

As a result, many important QEC protocols, including [magic state cultivation](https://arxiv.org/abs/2409.17595), live in an awkward middle regime: too large for dense state vector simulation, but not fully Clifford. Clifft is built for this exact regime. It efficiently tracks the large Clifford backbone while isolating the exponential simulation cost to only the active non-Clifford dimension.

## A familiar workflow for circuits beyond Clifford

Clifft is intended to feel approachable to users who already work with Stim. It reads Stim-format circuits, including noise, measurements, detectors, observables, repeat blocks, and classically controlled operations, and extends that format with non-Clifford instructions such as T gates and Pauli rotations (providing a universal gateset).

The basic workflow is also familiar: compile a circuit once, then sample many shots.

```py
import clifft

program = clifft.compile("""
    H 0
    CNOT 0 1
    T 2
    M 0 1 2
""")

result = clifft.sample(program, shots=1000)
print(result.measurements[:5])
```

That low barrier to entry is intentional. If you already have circuits in Stim format, Clifft gives you a path to keep the same basic sampling workflow while asking what changes when the circuit includes non-Clifford operations that cannot be represented by a pure stabilizer simulation.

Clifft is not meant to replace Stim for Clifford workloads. Stim remains the right tool when the circuit is fully Clifford. Instead, Clifft extends the practical sampling workflow into regimes where exact non-Clifford effects are important, while preserving support for the noisy circuit features that QEC researchers rely on.

## Keeping the hard part small

The central idea behind Clifft is to avoid paying dense state vector costs for qubits that do not currently need dense amplitude tracking.

Many fault-tolerant circuits have a large Clifford backbone. Clifft tracks that Clifford structure symbolically as a changing coordinate frame, while keeping a dense active state vector only for the degrees of freedom that currently require amplitude tracking.

This active state can grow when the circuit creates non-Clifford structure, and shrink again when measurements collapse it. For near-Clifford circuits with frequent measurements, the dominant exponential cost can depend on the peak size of this active state, not on the total number of physical qubits.

This is why Clifft is internally organized more like a compiler pipeline than a traditional circuit interpreter.

<figure>
  <img
    style="display:block; margin:auto; max-width: 740px; width: 100%;"
    src="/images/2026_clifft/clifft_architecture.png"
    alt="Clifft compile-once / sample-many architecture" />
  <figcaption>Clifft compile-once / sample-many architecture</figcaption>
</figure>

The compiler absorbs Clifford operations, constructs an intermediate representation, optimizes the active operations, performs Pauli localization, and emits optimized bytecode for a simulator backend. Each shot then reuses the compiled program and performs only the shot-dependent work: lightweight Pauli-frame tracking, random noise sampling, active-state updates, measurements, and detector/observable recording.

For users, the result is simple: Clifft can simulate large, low-magic fault-tolerant circuits exactly on commodity CPUs, while exposing a Python API that looks much closer to a sampling tool than to a custom research prototype.

At a high level, Clifft is meant to be a strong default when a circuit sits between the regimes served by existing simulators (▶↗ opens the circuit in the Clifft playground):

<table>
  <thead>
    <tr>
      <th>Regime</th>
      <th>Representative benchmark</th>
      <th>What the results show</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Pure Clifford QEC</td>
      <td>
        Surface code d=7, r=7
        <a
          href="https://unitaryfoundation.github.io/clifft/playground/?url=https://raw.githubusercontent.com/unitaryfoundation/clifft-paper/main/qec_bench/circuits/surface_d7_r7.stim"
          target="_blank"
          rel="noopener noreferrer"
          title="Open this circuit in the Clifft playground"
          aria-label="Open Surface code d=7, r=7 in the Clifft playground">
          ▶↗
        </a>
      </td>
      <td>Stim remains the right tool; Clifft is roughly 10× slower while preserving the same sampling-oriented workflow.</td>
    </tr>
    <tr>
      <td>Low-magic FT circuits</td>
      <td>
        MSC d=3 cultivation
        <a
          href="https://unitaryfoundation.github.io/clifft/playground/?url=https://raw.githubusercontent.com/unitaryfoundation/clifft-paper/main/qec_bench/circuits/cultivation_d3.stim"
          target="_blank"
          rel="noopener noreferrer"
          title="Open this circuit in the Clifft playground"
          aria-label="Open MSC d=3 cultivation in the Clifft playground">
          ▶↗
        </a>
      </td>
      <td>Clifft reaches 10.4M shots/s, about 370× faster than <a href="https://github.com/QuEraComputing/tsim" target="_blank" rel="noopener noreferrer">Tsim</a> on this benchmark.</td>
    </tr>
    <tr>
      <td>Larger near-Clifford FT circuits</td>
      <td>
        MSC d=5 cultivation
        <a
          href="https://unitaryfoundation.github.io/clifft/playground/?url=https://raw.githubusercontent.com/unitaryfoundation/clifft-paper/main/qec_bench/circuits/cultivation_d5.stim"
          target="_blank"
          rel="noopener noreferrer"
          title="Open this circuit in the Clifft playground"
          aria-label="Open MSC d=5 cultivation in the Clifft playground">
          ▶↗
        </a>
      </td>
      <td>Clifft reaches ~135K shots/s on one CPU core, about 13× faster than <a href="https://github.com/haoliri0/SOFT" target="_blank" rel="noopener noreferrer">SOFT</a> at ~10.6K shots/s on one H800 GPU.</td>
    </tr>
    <tr>
      <td>Dense universal circuits</td>
      <td>Quantum Volume</td>
      <td>In the worst-case dense limit, Clifft remains neck-and-neck with simulators like <a href="https://github.com/Qiskit/qiskit-aer" target="_blank" rel="noopener noreferrer">qiskit-aer</a> and <a href="https://github.com/quantumlib/qsim" target="_blank" rel="noopener noreferrer">qsim</a>.</td>
    </tr>
  </tbody>
</table>

_Throughput numbers above were measured on cloud instances; the in-browser WASM playground runs on a single thread and will report lower throughput. See the paper for full hardware details and methodology._

The paper presents a comprehensive benchmark study, including the full set of circuits, the methodology, and the comparison points. The short version is that Stim remains the right tool for fully Clifford circuits, while Clifft is designed for the middle regime where exact non-Clifford effects matter but remain localized. On the low-magic fault-tolerant benchmarks we studied, this yields large to orders-of-magnitude throughput gains over prior near-Clifford exact-simulation approaches. And when the active dimension reaches the dense-state limit, Clifft remains competitive with leading CPU-based statevector simulators.

## A case study: magic state cultivation

Magic state cultivation is a demanding benchmark because it combines hundreds of physical qubits, noisy operations, measurements, and non-Clifford gates. Previous exact simulations of the true non-Clifford cultivation circuit stopped before the final escape stage or relied on heavy GPU clusters.

With Clifft, we performed the first exact end-to-end simulation of magic state cultivation, including the escape stage. This required hundreds of billions of shots, but Clifft made it practical on commodity CPUs. For the d=5 cultivation stage alone, Clifft reached comparable low-rate estimates in approximately 12 machine-hours on a single CPU instance, compared to 388 machine-hours on a 16-GPU cluster using SOFT.

This massive scale allows us to directly compare the true T-gate circuit with the S-proxy approximation at the full protocol level. We found that escape-stage decoding failures mask the true T-gate versus S-proxy discrepancy at low decoder-gap thresholds. At higher thresholds, the discrepancy reappears and approaches the behavior seen in the cultivation stage alone.

## A foundation for early fault-tolerant tooling

We are releasing Clifft as a simulator because simulation is the immediate need. Researchers need practical tools for testing protocols, comparing Clifford proxy assumptions, validating decoder behavior, and generating exact samples from circuits that sit just beyond the reach of stabilizer methods. Clifft is intended to make those studies feel less like building a one-off simulator and more like using a reusable software tool.

At the same time, Clifft's structure is intentionally broader. Treating simulation as the backend of a compiler-style lowering pipeline gives us a place to experiment with early fault-tolerant transformations, active-space planning, non-Clifford optimization, and cost models. Over time, the same structure could support additional front ends, richer intermediate representations, and backends targeting fault-tolerant instruction sets or architecture-specific primitives.

That longer-term direction is still early. The useful thing today is the simulator. But we see Clifft as a step toward open infrastructure for early fault-tolerant quantum computing: tools that can move between circuits, logical protocols, resource estimates, and executable backends as the field moves from protocols on paper toward practical logical circuits.

## Try Clifft

- Install Clifft: `uv pip install clifft` or `pip install clifft`
- Read the <a href="https://unitaryfoundation.github.io/clifft" target="_blank" rel="noopener noreferrer">documentation</a>
- Try the <a href="https://unitaryfoundation.github.io/clifft/playground/" target="_blank" rel="noopener noreferrer">playground</a>
- View the <a href="https://github.com/unitaryfoundation/clifft" target="_blank" rel="noopener noreferrer">source code</a>
- Read the <a href="https://arxiv.org/abs/2604.27058" target="_blank" rel="noopener noreferrer">paper</a>

We welcome feedback, bug reports, examples, and contributions. If you are working on early fault-tolerant protocols, low-magic simulation, decoder studies, or non-Clifford QEC circuits, we would be especially interested  in hearing which workloads you would like Clifft to support next.

Find us on the <a href="https://discord.unitary.foundation" target="_blank" rel="noopener noreferrer">Unitary Foundation Discord</a>, or open an <a href="https://github.com/unitaryfoundation/clifft/issues" target="_blank" rel="noopener noreferrer">issue</a> on GitHub.

We look forward to building Clifft with and for the quantum computing community.
