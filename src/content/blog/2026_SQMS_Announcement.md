---
title: SQMS Center and Unitary Foundation launch open-source benchmark library for multi-level quantum processors
author: UF Team
day: 6
month: 8
year: 2026
tags: 
 - community
 - partnership
 - fellow
---

### New open-source tools will help researchers evaluate the performance and reliability of qudits

The U.S. Department of Energy’s Superconducting Quantum Materials and Systems Center, led by Fermi National Accelerator Laboratory, and Unitary Foundation have launched the first-ever open-source benchmark library for qudits, a new collection of tools designed to help researchers evaluate an emerging class of quantum processors.

Integrated with Unitary Foundation’s open-source Metriq benchmarking platform, the library provides a standardized and accessible way to measure the performance of quantum devices built with qudits. Unlike conventional quantum bits, or qubits, which use two computational states commonly represented as 0 and 1, qudits can use three or more states.

The number of available states is known as the qudit’s dimension, or d. A three-level qudit has a dimension of three, for example. SQMS researchers have demonstrated control of qudits with as many as 20 levels. By encoding information in additional levels, qudits could allow researchers to perform certain calculations with fewer quantum components, shorter circuits or more efficient operations than would be possible with qubits alone.

“Qudits give us access to a much larger computational space within each physical device,” said **Silvia Zorzetti, principal engineer at Fermilab and leader of the SQMS architectures team**. But to take advantage of that capability, we need reliable ways to access the levels we can control, determine how many qudits can operate together and understand how much useful computation the system can complete before quantum information is lost.”

Meeting that need requires more than developing tests for a single device or research group. By making the benchmarks open source and integrating them with Metriq, SQMS and Unitary Foundation are giving researchers a shared framework they can use, examine and improve. 

“If we are to scale the research and advance our understanding of qudit capabilities, we need to extend the open-source benchmarking resources that have acted as catalysts in the wider quantum community,” said **Ben Castanon, CEO of Unitary Foundation**. “This is necessary infrastructure we are thrilled to make available to all.”

## Measuring what a qudit processor can actually do
Quantum hardware has a limited period during which it can preserve and manipulate quantum information. This period is known as its coherence time. Once interactions with the environment disrupt the system, the quantum information begins to degrade and the results of a calculation become less reliable.

A single operation on a quantum processor may be accurate, but useful calculations often require hundreds or thousands of operations. Small errors can accumulate as the circuit grows. Researchers therefore need benchmarks that evaluate the complete computational process rather
than individual operations in isolation.

The new library allows researchers to run computational tests with known outcomes on a qudit system and compare the device’s results with the expected answers. These tests help determine how many levels, operations and interconnected qudits the hardware can use while continuing to
produce reliable results.

“Multiqudit systems have amazing theoretical potential but are challenging to physically implement and control,” said **Kate Smith, assistant professor of computer science at Northwestern University**. “This new qudit benchmarking suite will simplify the process of characterizing the computation frontier of real qudit systems. When we have a better understanding of what real hardware is capable of, this could open doors for application discovery.”

The software can also simulate benchmarks using different device characteristics, includingenergy-relaxation and dephasing times. Energy relaxation describes how quickly an excited quantum state loses energy, while dephasing describes how quickly quantum states lose the precise synchronization needed for computation. These simulations help researchers predict how hardware limitations will affect a calculation and identify which parts of a device are ready for experimental use.

“Benchmarking turns individual hardware measurements into a practical picture of what the processor can accomplish,” said **Doğa Kürkçüoğlu, middleware co-lead for the SQMS Center**. “It tells us not only whether one operation works, but how much reliable computation we can build from many operations across several qudits.”

## Expanding qudit benchmarking beyond a single mode
Previous benchmarking tools could evaluate operations within a single qudit. Extending that capability to systems containing multiple qudits is substantially more complicated.

Each additional qudit introduces new combinations of states, interactions and possible operations. Researchers must compile the requested gates into controls that the hardware can execute, model losses across the system and compare increasingly complex experimental results with theoretical predictions.

The open-source benchmark library for qudits automates much of that process. Researchers can use the library to run multiple standardized tests, examine the performance of several qudits together and compare results across devices and experiments.

This capability provides a more complete assessment of qudit hardware while reducing the amount of custom software researchers must develop for each experiment.

“Creating meaningful multiqudit benchmarks is a herculean task when every test has to be constructed and evaluated independently,” said Kürkçüoğlu. “By making these tools automated and open source, we can perform more tests, obtain better information and make the results useful to researchers beyond SQMS.”

## Building an open foundation for qudit research
Most established quantum computing benchmarks were designed for two-level qubit systems. As researchers explore higher-dimensional hardware, the absence of shared qudit benchmarking tools makes it difficult to compare devices, reproduce results and identify the most promising approaches.

The new library begins to address that gap by making its benchmark definitions and software publicly available. Researchers can inspect how each benchmark works, reproduce published tests, propose improvements and contribute new benchmarks as qudit technology develops.

Metriq, Unitary Foundation’s open, community-led quantum benchmarking project, provides the infrastructure through which those benchmarks can be defined, run, reviewed and shared with the broader quantum community.

“Open benchmarking is a vital public resource for measuring, communicating and understanding the progress of our field,” said Castanon. “A community-led, cross-platform approach prioritizes transparency and reproducibility. It also ensures that this infrastructure remains useful, accessible and adaptable as the field evolves and common standards emerge.”

The collaboration builds on SQMS research into superconducting cavity-based qudits. These devices use multiple quantum states within high-quality superconducting radio-frequency cavities, a technology in which Fermilab has developed world-leading expertise. SQMS researchers are working toward larger, interconnected qudit processors that can take advantage of this expanded computational space.

The benchmark library will help researchers determine which levels and operations are sufficiently reliable for quantum algorithms. It may also help hardware teams identify where improvements in coherence, control systems or device design would have the greatest impact.

“Open benchmarks give the community a common language for discussing performance,” said **Anna Grassellino, Fermilab chief technology officer and SQMS Center director**. “That is essential as we move qudit computing from individual demonstrations toward larger systems capable of addressing meaningful scientific problems.”

The open-source benchmark library for qudits, along with documentation and contribution guidelines, is available through the project’s GitHub repository. More information about Metriq and the open benchmarking project is available at metriq.info.

_**Fermi National Accelerator Laboratory** is America’s national laboratory for particle physics and accelerator research. Fermi Forward Discovery Group manages Fermilab for the U.S. Department of Energy Office of Science. Visit Fermilab’s website at www.fnal.gov and follow us on social media._

_**The Superconducting Quantum Materials and Systems Center** is one of the five U.S. Department of Energy National Quantum Information Science Research Centers. Led by Fermi National Accelerator Laboratory, SQMS is a collaboration of more than 40 partner institutions — national labs, academia and industry — working together to bring transformational advances in the field of quantum information science. The center leverages Fermilab’s expertise in building complex particle accelerators to engineer multiqubit quantum processor platforms based on state-of-the-art qubits and superconducting technologies. Working hand in hand with embedded industry partners, SQMS will build a quantum computer and new quantum sensors at Fermilab, which will open unprecedented computational opportunities. For more information, please visit sqmscenter.fnal.gov._

_**Unitary Foundation** is a non-profit working to create a quantum technology ecosystem that benefits the most people. We pursue our mission through the production of public goods, support of the open-source community and digital commons, and the development of quantum&#39;s open-source infrastructure. To find out more please visit us at https://unitary.foundation_
