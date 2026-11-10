---
title: NSF Award Supports Open Quantum Software for the Fault-Tolerant Era
author: The UF Team
day: 4
month: 11
year: 2026
tags:
  - research
  - grant
  - NSF
  - compiler
  - UCC
  - clifft
---

We’re excited to announce that Unitary Foundation has received an **NSF POSE Phase I [award](https://nsf.elsevierpure.com/en/projects/pose-phase-i-unitary-compiler-collection-ucc-unifying-the-quantum-2/)** to scope and plan an open-source ecosystem around the [Unitary Compiler Collection](https://unitary.foundation/posts/2025_ucc_launch_blog/) (UCC). This support will help us work with the community to ensure that quantum computing’s open-source foundation continues to grow through the fault-tolerant era and beyond.

Open source has been foundational to quantum computing’s progress. Shared tools have made research methods accessible, supported reproducibility, and enabled researchers to build on one another’s work. UF’s annual [Quantum Open Source Software Survey](https://unitaryfoundation.github.io/survey-2025/), which received more than 1,400 responses worldwide in 2025, documents a vibrant landscape of programming platforms, compilers, simulators, and scientific libraries. Our own experience growing [Mitiq’s NSF-supported ecosystem](https://unitary.foundation/posts/2023_mitiq_nsf_pose/) has shown the value of investing in both software and the community that sustains it.

As quantum computing moves towards fault tolerance, the demands on classical software will continue to grow. Researchers need to simulate increasingly complex error-correction protocols, validate their behavior, estimate resources, and translate logical programs into operations suited to particular hardware. They also need fast feedback loops around these workflows to optimize performance on the path to utility-scale quantum computers.

Yet the field is still discovering how these pieces fit together. Hardware architectures, programming models, and interfaces are evolving. Sensibly, teams are pursuing different approaches through a mixture of open and proprietary tools. This parallel experimentation will reveal useful abstractions and reusable components, but it requires an intentional effort to turn the common pieces into open, trusted infrastructure as they mature.

That is the context for the ecosystem we are planning around UCC. While compilation connects program representations, transformations, and execution targets, simulation, validation, and resource estimation help researchers develop and evaluate those connections. Our work on [Clifft](https://unitary.foundation/posts/2026_clifft/), for example, addresses a concrete simulation bottleneck through a compiler-like approach, providing experience that can inform broader compilation infrastructure.

Another early example is [Jeff](https://github.com/unitaryfoundation/jeff), an open interchange format for structured quantum programs. Hosted by UF and developed collaboratively by researchers and developers across several organizations, Jeff aims to help different compiler frameworks exchange programs and share transformations, without presuming we are ready for a common intermediate representation across devices and modalities. It illustrates how UF can provide an independent home for infrastructure that crosses organizational boundaries.

Through Phase I, we will interview researchers, maintainers, and hardware and software teams to understand recurring workflow bottlenecks. Where does switching tools require rewriting code? Where are we seeing parallel solutions converging? These conversations will guide UCC’s technical roadmap and plans for community participation, governance, and sustainable maintenance.

This work is supported by the U.S. National Science Foundation under POSE Award Number 2549247. We’re grateful to NSF and the community for making this work possible.

## What’s Next?

Working on quantum software for the fault-tolerant era? Bring us one real workflow story: what you tried, what got in the way, and how you worked around it. **[Sign up for updates and opportunities to participate](https://docs.google.com/forms/d/e/1FAIpQLSdw3RvdmP84SCJQhTPKD132kUjEbG0msXBhKaGIJCQAY0RgKg/viewform)**, or connect with us on [Discord](https://discord.unitary.foundation).
