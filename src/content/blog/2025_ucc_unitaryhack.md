---
title: Community-Driven Quantum Compilation w/ UCC @ UnitaryHACK 2025 
author: Jordan Sullivan, Gregory Varghese, Amir Ali Malekani Nezhad, WolfLink [or your full name]
day: 7
month: 31
year: 2025
tags: 
  - python
  - compiler
  - qiskit
  - qbraid
  - bqskit
  - quantum hardware
  - hackathon
---
This year marks our fifth annual UnitaryHACK hackathon (check out our [post-event wrap-up blog](https://unitary.foundation/posts/2025_uhack/))! It's also the very _first_ year Unitary Foundation's new open-source quantum compiler [UCC](https://github.com/unitaryfoundation/ucc) has been a part of the event. In this blog, we're going to let three of the UCC UnitaryHACK Bounty winners tell you about their projects.

We created UCC to be a quantum compiler that's genuinely community-driven -- that's part of our mission to make quantum computing more accessible and beneficial to the most people -- and so we did something a little different from the typical [UnitaryHACK bounties](https://unitaryhack.dev/bounties/). We put out an [open call](https://github.com/unitaryfoundation/ucc/issues/381) for new quantum compiler passes, and the community delivered! Let's hear from them:

#### Verifying logical equivalence  of quantum circuits
[GH issue](https://github.com/unitaryfoundation/ucc/issues/62)  
Bounty: $200  
Closed by: [WingCode](https://github.com/WingCode)  

**My name is Gregory Varghese**, I have a Undergraduate degree in Computer Science & Engineering, and I work as a Senior Backend Expert, currently focused on QML methods for chemical simulations. 

**I wanted to work on this issue because** I am fascinated by this as fundamental problem at the intersection of quantum computing and computational complexity.

**I faced two main challenges**: first, developing a solid understanding of how compute time and memory requirements grow with circuit size; second, working across multiple frameworks—such as [PyZX](https://github.com/zxcalc/pyzx) and the [Munich‑Quantum‑Toolkit/QCEC](https://github.com/munich-quantum-toolkit/qcec)—that use differing definitions of circuit equivalence. By tackling these, I clarified scaling behaviors in my equivalence tests and identified which frameworks are best suited to our needs for establishing logical equivalence within UCC.

#### Verifying circuit properties for benchmarking
[GH issue](https://github.com/unitaryfoundation/ucc-bench/issues/27)  
Bounty: $75  
Closed by: [WingCode](https://github.com/WingCode)  

**I was drawn in by** the compelling opportunity to enhance benchmarking reliability through direct gate‑set verification. Because the issue was clearly described, I was able to proceed smoothly, encountering minimal difficulty. As a result, I enabled robust checks for gate‑set‑specific compilations, strengthening benchmarking accuracy within UCC.

**In the future**, I am interested in researching additional transpilation passes within the UCC framework, particularly by leveraging large language models (LLMs). Additionally, I aim to design scalable and predictive models capable of evaluating the logical equivalence of black-box quantum circuits, focusing on metrics such as compute time and memory usage.  

--
#### Introducing an approximate compilation module
[GH issue](https://github.com/unitaryfoundation/ucc/issues/381)  
Bounty: $500  
Closed by: [ACE07-Sev](https://github.com/ACE07-Sev)  

**Greetings! I am Amir Ali Malekani Nezhad**, a Quantum Compilation Researcher and Developer currently pursuing MPS/MPO utilization for approximate compilation of arbitrary statevectors and operators in O(N) depth.

**What drew me to this issue or to UCC?**
During UnitaryHack 2025, I had the pleasure of contributing to UCC, a Quantum Compilation library maintained by [Jordan Sullivan](https://github.com/jordandsullivan) and [Brad Chase](https://github.com/bachase). Given my current obsession with anything related to Quantum Compilation, the issue immediately intrigued me. Upon reading about the premise of the issue, and the creative freedom provided by UCC’s supportive team, I proposed an approximate quantum compilation module. This was intended to complement the current compilation pipeline present within UCC to tradeoff slight infidelity with exponential depth reduction for certain class of states known as area-law entangled states.

**Challenges I faced in hacking on this issue:**
While developing the open-source [qmprs](https://github.com/Qualition/qmprs) project for compression and compilation of quantum circuits using tensor networks, I had become familiar with the side-effects of approximation in state encoding. However, **it was through UCC’s suggestion to benchmark the compiler using their suite that a critical limitation came to light**—random Clifford circuits revealed themselves as a particular weakness of MPS-based approaches. Digging into the entanglement properties of both the benchmark circuits and the typical states I had used, I realized the circuits exhibited volume-law entanglement, whereas the states I had relied on were coincidentally area-law entangled. This contrast helped explain the discrepancy and highlighted both an opportunity and a constraint for the proposed compiler.  
I spent time during and after the event exploring ways to reconcile this, eventually incorporating a method to ensure consistency for volume-law circuits via variational fine-tuning.  
**The experience was deeply instructive**, and I was fortunate to contribute to the project, though it was UCC’s benchmarking approach that uncovered the limitation in the first place—a contribution I remain genuinely thankful for.
Additionally, UCC’s infrastructure emphasized the importance of compatibility between approximate and exact compilation methods. To support this, I introduced a fallback mechanism that checks fidelity and cost metrics, defaulting to UCC’s exact compiler when approximation underperforms. It was a straightforward solution, but in hindsight, one that proved to be quite practical.

**Future projects I'm interested in working on:**
My current focus is on finishing [qmprs](https://github.com/Qualition/qmprs). Given the approximate compilation module making it to production, I will be looking forward to integrating qmprs once it reaches a minimum mature stage in UCC with the help of the supportive maintainers.
Feel free to reach out to me via LinkedIn, or discord, or email should you have any questions or would like to collaborate.

--

#### Porting over a BQSKiT compiler pass
Bounty: $500  
Closed by: [WolfLink](https://github.com/WolfLink)  
GH issue: https://github.com/unitaryfoundation/ucc/issues/380

**Outline**  
- My name (optional)
- My educational/professional background (optional)

**What drew me to this issue or to UCC:**  
**Challenges I faced in hacking on this issue:**  
**The impact of this issue on UCC:**  
**Future projects I'm interested in working on:**  


### Get involved
Inspired by something you read here? Stay tuned for new ways to get paid to contribute to UCC... 
Check out our [UCC launch blog](https://unitary.foundation/posts/2025_ucc_launch_blog/).

# About UCC
The **[Unitary Compiler Collection (UCC)](https://github.com/unitaryfoundation/ucc)** is a Python library for frontend-agnostic, high performance compilation of quantum circuits. UCC's goal is to gather together the best of open source compilation to make quantum programming simpler, faster, and more scalable.

**Want to know more?**
- Read the [launch announcement](https://unitary.foundation/posts/2025_ucc_launch_blog) to learn more on the current state of UCC, its capabilities and future direction.
- Watch our [introductory video](https://www.youtube.com/watch?v=11uQynyOUI8) on UCC from [FOSDEM 2025](https://fosdem.org/2025/) by [@natestemen](https://github.com/natestemen/).
- For code, repo, or theory questions, submit a [Discussion](https://github.com/unitaryfoundation/ucc/discussions).
- For casual or time sensitive questions, chat with us on [Discord](http://discord.unitary.foundation).
- Explore [research publications](https://ucc.readthedocs.io/en/latest/research_references.html) that utilize UCC.


#### UCC GitHub Repos:
**[ucc](https://github.com/unitaryfoundation/ucc)** - our main Unitary Compiler  Collection source code repo  
**[ucc-bench](https://github.com/unitaryfoundation/ucc-bench)** - our quantum compiler benchmarking suite  
**[ucc-ft](https://github.com/unitaryfoundation/ucc-ft)** - our prototype Fault Tolerance checker for quantum circuits
