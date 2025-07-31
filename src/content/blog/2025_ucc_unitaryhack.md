---
title: Community-Driven Quantum Compilation w/ UCC @ unitaryHACK 2025 
author: Jordan Sullivan, Gregory Varghese, Amir Ali Malekani Nezhad, Marc Davis
day: 31
month: 7
year: 2025
tags: 
  - python
  - compiler
  - qiskit
  - qbraid
  - bqskit
  - quantum software
  - hackathon
  - open source
---
This year marks our fifth annual unitaryHACK hackathon (check out our [post-event wrap-up blog](https://unitary.foundation/posts/2025_uhack/))! It's also the very _first_ year Unitary Foundation's new open-source quantum compiler [UCC](https://github.com/unitaryfoundation/ucc) has been a part of the event. In this blog, we're going to let three of the **UCC unitaryHACK Bounty winners** tell you about their projects.

<div style="display: flex; justify-content: center; align-items: center; margin: 20px 0;">
  <img src="/images/2025_ucc_unitaryhack/uhack-ucc-2025-logo.png" alt="unitaryHACK 2025 UCC logo" style="max-width: 700; width: 100%; height: auto;"/>
</div>

We created UCC to be a quantum compiler that's genuinely community-driven -- that's part of our mission to make quantum computing more accessible and beneficial to the most people -- and so we did something a little different from the typical [unitaryHACK bounties](https://unitaryhack.dev/bounties/). We put out an [open call](https://github.com/unitaryfoundation/ucc/issues/381) for new quantum compiler passes, and the community delivered! Let's hear from them:

#### Verifying logical equivalence  of quantum circuits
[GH issue](https://github.com/unitaryfoundation/ucc/issues/62)  
Bounty: $200  
Closed by: [WingCode](https://github.com/WingCode)  

**My name is Gregory Varghese**, I have a Undergraduate degree in Computer Science & Engineering, and I work as a Senior Backend Expert, currently focused on QML methods for chemical simulations. 

**I wanted to work on this issue because** I am fascinated by this as fundamental problem at the intersection of quantum computing and computational complexity.

<div style="display: flex; flex-direction: column; align-items: center; margin: 12px 0;">
  <div style="display: flex; justify-content: center; align-items: flex-start; gap: 16px;">
    <img src="/images/2025_ucc_unitaryhack/MQT.png" alt="Munich Quantum Toolkit logo" width="200" height="200" />
    <div style="display: flex; flex-direction: column; align-items: center;">
      <img src="/images/2025_ucc_unitaryhack/ZX-diagram.png" alt="ZX diagram rewrite rules" width=300" height="200" />
      <span style="font-size: 0.9em; color: #666; margin-top: 4px; display: block; text-align: center;">
        Source: <a href="https://arxiv.org/abs/1904.04735" target="_blank" style="color: #666; text-decoration: underline;">PyZX: Large Scale Automated Diagrammatic Reasoning</a>
      </span>
    </div>
  </div>
</div>

**I faced two main challenges**: first, developing a solid understanding of how compute time and memory requirements grow with circuit size; second, working across multiple frameworks—such as [PyZX](https://github.com/zxcalc/pyzx) and the [Munich‑Quantum‑Toolkit/QCEC](https://github.com/munich-quantum-toolkit/qcec)—that use differing definitions of circuit equivalence. By tackling these, I clarified scaling behaviors in my equivalence tests and identified which frameworks are best suited to our needs for establishing logical equivalence within UCC.

#### Verifying circuit properties for benchmarking
[GH issue](https://github.com/unitaryfoundation/ucc-bench/issues/27)  
Bounty: $75  
Closed by: [WingCode](https://github.com/WingCode)  

**I was drawn in by** the compelling opportunity to enhance benchmarking reliability through direct gate‑set verification. Because the issue was clearly described, I was able to proceed smoothly, encountering minimal difficulty. As a result, I enabled robust checks for gate‑set‑specific compilations, strengthening benchmarking accuracy within UCC.


<div style="display: flex; flex-direction: column; align-items: center;">
    <img style="margin-top: 0; margin-bottom: 0;" src="/images/2025_ucc_unitaryhack/gate-control.png" alt="cartoon of a Matrix Product State (MPS) drawn as a strip of paper with scissors poised to cut at regular intervals" width="200"/>
    <span style="font-size: 0.9em; color: #666; margin-top: 4px; display: block; text-align: center;">
        Source: <a href="https://pennylane.ai/qml/demos/tutorial_optimal_control" target="_blank" style="color: #666; text-decoration: underline;">PennyLane gate compilation tutorial</a>
    </span>
</div>

**In the future**, I am interested in researching additional transpilation passes within the UCC framework, particularly by leveraging large language models (LLMs). Additionally, I aim to design scalable and predictive models capable of evaluating the logical equivalence of black-box quantum circuits, focusing on metrics such as compute time and memory usage.  

--
#### Introducing an approximate compilation module
[GH issue](https://github.com/unitaryfoundation/ucc/issues/381)  
Bounty: $500  
Closed by: [ACE07-Sev](https://github.com/ACE07-Sev)  

**Greetings! I am Amir Ali Malekani Nezhad**, a Quantum Compilation Researcher and Developer currently pursuing MPS/MPO utilization for approximate compilation of arbitrary statevectors and operators in O(N) depth.

**What drew me to this issue or to UCC?**
During unitaryHACK 2025, I had the pleasure of contributing to UCC, a Quantum Compilation library maintained by [Jordan Sullivan](https://github.com/jordandsullivan) and [Brad Chase](https://github.com/bachase). Given my current obsession with anything related to Quantum Compilation, the issue immediately intrigued me. Upon reading about the premise of the issue, and the creative freedom provided by UCC’s supportive team, I proposed an approximate quantum compilation module. This was intended to complement the current compilation pipeline present within UCC to tradeoff slight infidelity with exponential depth reduction for certain class of states known as area-law entangled states.

<div style="display: flex; flex-direction: column; align-items: center;">
    <img style="margin-top: 0; margin-bottom: 0;" src="/images/2025_ucc_unitaryhack/MPS-cartoon-pennylane.png" alt="cartoon of a Matrix Product State (MPS) drawn as a strip of paper with scissors poised to cut at regular intervals" width="200"/>
    <span style="font-size: 0.9em; color: #666; margin-top: 4px; display: block; text-align: center;">
        Source: <a href="https://pennylane.ai/qml/demos/tutorial_mps" target="_blank" style="color: #666; text-decoration: underline;">PennyLane MPS tutorial</a>
    </span>
</div>

**Challenges I faced in hacking on this issue:**
While developing the open-source [qmprs](https://github.com/Qualition/qmprs) project for compression and compilation of quantum circuits using tensor networks, I had become familiar with the side-effects of approximation in state encoding. However, it was through **UCC’s suggestion to benchmark the compiler using their suite that a critical limitation came to light**—random Clifford circuits revealed themselves as a particular weakness of MPS-based approaches. Digging into the entanglement properties of both the benchmark circuits and the typical states I had used, I realized the circuits exhibited volume-law entanglement, whereas the states I had relied on were coincidentally area-law entangled. This contrast helped explain the discrepancy and highlighted both an opportunity and a constraint for the proposed compiler.  
I spent time during and after the event exploring ways to reconcile this, eventually incorporating a method to ensure consistency for volume-law circuits via variational fine-tuning. 

**The experience was deeply instructive**, and I was fortunate to contribute to the project, though it was UCC’s benchmarking approach that uncovered the limitation in the first place—a contribution I remain genuinely thankful for.
Additionally, UCC’s infrastructure emphasized the importance of compatibility between approximate and exact compilation methods. To support this, I introduced a fallback mechanism that checks fidelity and cost metrics, defaulting to UCC’s exact compiler when approximation underperforms. It was a straightforward solution, but in hindsight, one that proved to be quite practical.

**Future projects I'm interested in working on:**
My current focus is on finishing [qmprs](https://github.com/Qualition/qmprs). Given the approximate compilation module making it to production, I will be looking forward to integrating qmprs once it reaches a minimum mature stage in UCC with the help of the supportive maintainers.
Feel free to reach out to me via LinkedIn, or discord, or email should you have any questions or would like to collaborate.

--

#### Porting over a BQSKiT compiler pass
[GH issue](https://github.com/unitaryfoundation/ucc/issues/380)  
Bounty: $500  
Closed by: [WolfLink](https://github.com/WolfLink)  

Hi, I'm Marc Davis, currently pursuing a PhD at MIT researching quantum compiling techniques.

**What drew me to UCC:**
In the course of my research, I work with a variety of quantum circuit compilation, transpilation, and optimization tools, and a common problem is interfacing between different tools, which often rely on different underlying circuit formats, sometimes with different sets of features. UCC's goal of making a wrapper that allows the interplay of many different tools is a worthy one.

<div style="display: flex; flex-direction: column; align-items: center; margin: 20px 0;">
  <img src="/images/2025_ucc_unitaryhack/bqskit-logo.png" alt="BQSKit logo" width="200" height="auto" />
  <span style="font-size: 0.9em; color: #666; margin-top: 4px; display: block; text-align: center;">
    Source: <a href="https://bqskit.readthedocs.io/" target="_blank" style="color: #666; text-decoration: underline;">BQSKit: Berkeley Quantum Synthesis Toolkit</a>
  </span>
</div>

**Challenges I faced:**
My idea was to combine UCC and BQSKit. BQSKit is a quantum compiling tool I have previously worked on that provides a suite of optimization techniques. By implementing BQSKit as a UCC pass, I enabled many powerful circuit optimization tools to be used with the UCC ecosystem. However, many of BQSKit's tools are focused on providing highly efficient circuits at the cost of runtime on the order of hours. UCC has strict runtime limits on the order of less than a second. A compromise was reached, to make BQSkit an optional pass rather than a core part of the UCC workflow.

Another difficulty in implementing BQSKit was encountering the limitations of the Qiskit TransformationPass that UCC uses as the bass class for its compiler passes. This class does not maintain information about the target hardware, such as the coupling map, which prevents UCC passes from taking advantage of this information.

**Future Projects:**
I am currently working on compiler passes working on T-count minimization. If UCC targets fault tolerant circuit optimization in the future, I hope to include my T-count minimization tools.


## Get involved
Did you get inspired by something you read here? Tell us about it! You can reach out in the #ucc channel on [Discord](http://discord.unitary.foundation) for casual or time sensitive questions -- or create a GitHub [discussion](https://github.com/unitaryfoundation/ucc/discussions) for code, repo, or theory stuff :]

# About UCC
The **[Unitary Compiler Collection (UCC)](https://github.com/unitaryfoundation/ucc)** is a Python library for frontend-agnostic, high performance compilation of quantum circuits. UCC's goal is to gather together the best of open source compilation to make quantum programming simpler, faster, and more scalable.  

**GitHub Repos:**  
**[ucc](https://github.com/unitaryfoundation/ucc)** - our main Unitary Compiler  Collection source code repo  
**[ucc-bench](https://github.com/unitaryfoundation/ucc-bench)** - our quantum compiler benchmarking suite  
**[ucc-ft](https://github.com/unitaryfoundation/ucc-ft)** - our prototype Fault Tolerance checker for quantum circuits

**Want to know more?**
- Read the [launch announcement](https://unitary.foundation/posts/2025_ucc_launch_blog) to get a feel for UCC's design philosophy.
- Watch our [introductory video](https://www.youtube.com/watch?v=11uQynyOUI8) on UCC from [FOSDEM 2025](https://fosdem.org/2025/) by [@natestemen](https://github.com/natestemen/).
- Explore [research publications](https://ucc.readthedocs.io/en/latest/research_references.html) that utilize UCC.