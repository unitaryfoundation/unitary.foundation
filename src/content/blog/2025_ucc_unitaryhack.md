---
title: Introducing the Unitary Compiler Collection (UCC)
author: Jordan Sullivan, WolfLink [or your full name], ACE07-Sev [or your full name], WingCode [or your full name]
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

We created UCC to be a tool that's genuinely community-driven -- that's part of our mission to make quantum computing more accessible and beneficial to the most people -- and so we did something a little different from the typical [UnitaryHACK bounties](https://unitaryhack.dev/bounties/). We put out an [open call](https://github.com/unitaryfoundation/ucc/issues/381) for new quantum compiler passes, and the community delivered! Let's hear from them:


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

#### $500 | Introducing an approximate compilation module
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


#### Verifying circuit logical equivalence 
Bounty: $200  
Closed by: [WingCode](https://github.com/WingCode)  
GH issue: https://github.com/unitaryfoundation/ucc/issues/62

**Outline**
- Gregory Varghese
- Bachelor’s in Computer Science & Engineering.
- Senior Backend Expert, currently focused on QML methods for chemical simulations.

- **What drew me in:** Fascinated by a fundamental problem at the intersection of quantum computing and computational complexity.  
- **Challenges faced:**  
  - Understanding how compute time and memory scale with circuit size.  
  - Working across multiple frameworks (e.g. PyZX, Munich‑Quantum‑Toolkit/qcec) with differing equivalence definitions.  
- **Impact on UCC:**  
  Gained clear insights into scaling behaviors in equivalence tests and now we know which frameworks might suit our requirements for logical equivalence.

#### Verifying circuit properties for benchmarking
Bounty: $75  
Closed by: WingCode  
GH issue: https://github.com/unitaryfoundation/ucc-bench/issues/27

- **What drew me in:** A compelling opportunity to enhance benchmarking reliability through direct gate‑set verification.  
- **Challenges faced:** The issue was clearly described and I was able to proceeded smoothly.  
- **Impact on UCC:** Enabled robust checks for gate‑set‑specific compilations, strengthening benchmarking accuracy.

### Future Interests
- Researching additional transpilation passes within UCC especially using LLMs.  
- Designing scalable, predictive models for logical equivalence of black‑box circuits (compute time, memory).  


### CTA
Stay tuned for new ways to get paid to contribute to UCC... 
Check out our [UCC launch blog](https://unitary.foundation/posts/2025_ucc_launch_blog/).

GH Repos:
- [ucc](https://github.com/unitaryfoundation/ucc)
- [ucc-bench](https://github.com/unitaryfoundation/ucc-bench)
- [ucc-ft](https://github.com/unitaryfoundation/ucc-ft)
