---
title: Extending UCC simulation benchmarks with Hamlib
author: Misty Wahl
day: 5
month: 6
year: 2025
tags: 
  - open-source
  - ucc
  - hamlib
---

Unitary Compiler Collection (UCC) is an open source software toolkit for quantum circuit compilation recently developed by the Unitary Foundation team, in collaboration with the quantum open source community. 
UCC combines a platform-agnostic interface with circuit optimization techniques that are competitive in compile time and gate reduction efficiency, on a suite of representative benchmarking circuits: Quantum Approximate Optimization Algorithm (QAOA) of the Barabási–Albert graph, Quantum Volume (QV), Quantum Fourier Transform (QFT), Heisenberg spin model on a square lattice, GHZ state preparation, and Quantum Convolutional Neural Network (QCNN). 
The UCC team actively surveys and benchmarks compiler toolchains and techniques across the ecosystem and continuously improves UCC’s default compilation sequence, integrating passes from existing tools and developing custom passes.
UCC also accepts a wide array of input circuit formats and seamlessly compiles and converts between them by simple keyword arguments, affording cross-platform flexibility in compilation workflows.
More information about the UCC package can be found in the [launch announcement](blog/2025_UCC_launch_blog.md).
 
## UCC benchmarking
The benchmarking circuits, as well as the utilities and infrastructure for running them are stored in a dedicated repository, [unitaryfoundation/ucc-bench](https://github.com/unitaryfoundation/ucc-bench).
The QAOA, QV, QFT, and square Heisenberg circuits were ported into ucc-bench from the [Qiskit Benchpress](https://github.com/Qiskit/benchpress) package [^1].
In addition to compile time and gate reduction benchmarks, simulation benchmarks have been performed on the circuits output by UCC and other leading quantum compilers, to compare resilience to the effects of noise.
The primary metric of interest for the simulation benchmarks is the error in the expectation value of a problem-relevant observable or similar figure of merit.
For simulation benchmarks with circuits representing the Heisenberg spin model on a square lattice and QAOA of the Barabási–Albert graph, the chosen observable of interest is the problem Hamiltonian, while for QV and QFT circuits, computational basis measurements on all qubits are sufficient for benchmarking purposes.

## Implementing Heisenberg spin model simulation benchmarks with the Hamlib Hamiltonian Library
The Heisenberg spin model describes interacting quantum spins on a lattice, where the energy depends on the alignment of neighboring spins through dot products of their spin operators, capturing magnetic behaviors like ferromagnetism and antiferromagnetism.
In the UCC simulation benchmarking workflow, the square Heisenberg circuits implement the isotropic Heisenberg spin model on a square lattice, with external magnetic field and periodic boundary conditions. 
The square Heisenberg benchmarking circuits are parameterized in the number of qubits, with a default size of nine qubits.
To implement the problem Hamiltonian as the observable of interest in the simulation benchmarks, the UCC team leveraged an existing implementation within the Hamlib (Hamiltonian Library) dataset [^2]. 
Each Hamiltonian within Hamlib is represented as a of a set of Pauli strings and coefficients, which the UCC benchmarking workflow then combines into a `qiskit.quantum_info.SparsePauliOp` object to generate the observable.
Hamlib contains a large collection of qubit-based quantum Hamiltonians to support the evaluation and development of quantum computing systems, across a diverse set of problem instances. 

The dataset is freely and publicly available online at https://portal.nersc.gov/cfs/m888/dcamps/hamlib. 
In addition to the Heisenberg model used for the UCC benchmarks, HamLib features models such as Fermi-Hubbard, Bose-Hubbard, various molecular structures, and optimization problems such as MaxCut and the traveling salesperson problem.
Supported problem sizes within Hamlib range from 2 to 1000 qubits.
The Hamlib dataset was developed and published to streamline research by reducing the need for manual problem preparation, enabling robust benchmarking, and promoting reproducibility and standardization in quantum studies, all shared goals of the UCC project and Unitary Foundation.

## UCC is a community driven project
The UCC team and our collaborators continue to collect and integrate performant and user-friendly tools for quantum compilation and compiler benchmarking. You can help by:

* [**Creating Custom Compiler Passes**](https://ucc.readthedocs.io/en/latest/contributing.html#proposing-a-new-transpiler-pass)  
* [**Reporting Bugs & Requesting Features**](https://github.com/unitaryfoundation/ucc/issues)  
* [**Contributing Code**](https://ucc.readthedocs.io/en/latest/contributing.html#contributing-guide)  
* [**Joining the Discussion**](https://discord.com/channels/764231928676089909/1346546840526524427)

**Connect with us\!**

GitHub: [**unitaryfoundation/ucc**](https://github.com/unitaryfoundation/ucc)  
Docs: [**UCC Documentation**](https://ucc.readthedocs.io/)  
Stay Updated: [**Mailing List**](https://bit.ly/uf-signup)


------------------------------------------------------

[^1]: Paul D. Nation, Abdullah Ash Saki, Sebastian Brandhofer, Luciano Bello, Shelly Garion, Matthew Treinish, Ali Javadi-Abhari.
Benchmarking the performance of quantum computing software for quantum circuit creation, manipulation and compilation. _Nat. Comput. Sci._ (2025). [online](https://doi.org/10.1038/s43588-025-00792-y).

[^2]: Nicolas PD Sawaya, Daniel Marti-Dafcik, Yang Ho, Daniel P Tabor, David E Bernal Neira, Alicia B Magann, Shavindra Premaratne, Pradeep Dubey, Anne Matsuura, Nathan Bishop, Wibe A de Jong, Simon Benjamin, Ojas Parekh, Norm Tubman, Katherine Klymko, Daan Camps.
HamLib: A library of Hamiltonians for benchmarking quantum algorithms and hardware. _Quantum_ 8, 1559 (2024) [online](https://dx.doi.org/10.22331/q-2024-12-11-1559).
