---
title: UCC @ UnitaryHACK 2025 Community-Driven Quantum Compilation 
author: Jordan Sullivan, Gregory Varghese, WolfLink [or your full name], ACE07-Sev [or your full name], 
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


#### Introducing an approximate compilation module
Bounty: $500  
Closed by: [ACE07-Sev](https://github.com/ACE07-Sev)  
GH issue: https://github.com/unitaryfoundation/ucc/issues/381

**Outline**
- My name (optional)
- My educational/professional background (optional)
- What drew me to this issue or to UCC
- Challenges I faced in hacking on this issue:
- The impact of this issue on UCC
- Future projects I'm interested in working on 

#### Porting over a BQSKiT compiler pass
Bounty: $500  
Closed by: [WolfLink](https://github.com/WolfLink)  
GH issue: https://github.com/unitaryfoundation/ucc/issues/380

**Outline**
- My name (optional)
- My educational/professional background (optional)
- What drew me to this issue or to UCC
- Challenges I faced in hacking on this issue:
- The impact of this issue on UCC
- Future projects I'm interested in working on 



#### Verifying circuit logical equivalence 
Bounty: $200  
Closed by: [WingCode](https://github.com/WingCode)  
GH issue: https://github.com/unitaryfoundation/ucc/issues/62

My name is Gregory Varghese, I have a Undergraduate degree in Computer Science & Engineering, and I work as a Senior Backend Expert, currently focused on QML methods for chemical simulations. I wanted to work on this issue because I am fascinated by this as fundamental problem at the intersection of quantum computing and computational complexity.

I faced two main challenges: first, developing a solid understanding of how compute time and memory requirements grow with circuit size; second, working across multiple frameworks—such as [PyZX](https://github.com/zxcalc/pyzx) and the [Munich‑Quantum‑Toolkit/QCEC](https://github.com/munich-quantum-toolkit/qcec)—that use differing definitions of circuit equivalence. By tackling these, I clarified scaling behaviors in my equivalence tests and identified which frameworks are best suited to our needs for establishing logical equivalence within UCC.

#### Verifying circuit properties for benchmarking
Bounty: $75  
Closed by: WingCode  
GH issue: https://github.com/unitaryfoundation/ucc-bench/issues/27

I was drawn in by the compelling opportunity to enhance benchmarking reliability through direct gate‑set verification. Because the issue was clearly described, I was able to proceed smoothly, encountering minimal difficulty. As a result, I enabled robust checks for gate‑set‑specific compilations, strengthening benchmarking accuracy within UCC.

In the future, I am interested in researching additional transpilation passes within the UCC framework, particularly by leveraging large language models (LLMs). Additionally, I aim to design scalable and predictive models capable of evaluating the logical equivalence of black-box quantum circuits, focusing on metrics such as compute time and memory usage.  


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
