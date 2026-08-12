---
title: "A Mozilla Fellowship on Quantum Error Correction"
author: Mathys Rennela
day: 12
month: 8
year: 2026
tags: 
 - community
 - partnership
 - fellow
- - - 
This is a post by Mathys Rennela, UF’s newest year-long Fellow, who will be working on Error Correction research and community building with support from the Mozilla Foundation. 
—-

I am Mathys Rennela, a quantum software researcher based in Paris. My experience working at the intersection of formal methods and quantum algorithmics has led me more recently to jump onto what I see as quantum computing’s biggest bottleneck: quantum error correction. As I was working on implementing new quantum error correction protocols, I realized a critical gap in quantum software tooling. Say that you are at the end of a coding sprint; you want to make sure that your newest quantum error correction tool actually corrects quantum errors. Typically, like for any software, you would make sure that there is a battery of unit tests analyzing your code, or you would try to formally prove some subset of it. 

The problem is that the properties of good quantum software are only verifiable by solving NP-complete problems, or running stochastic simulations that tend to produce flaky unit tests.  I take from this that quantum error correction has a fundamental verification problem that I want to tackle. 

I am now part of the 2026-2027 cohort of the Mozilla Fellowship, a year-long program by the Mozilla Foundation which aims to push the boundaries of open source software. My aim is simple: 

> Building the foundational verification layer for quantum error correction, and fostering a community which makes the use of such tools standard practice. 

Quantum error correction software has a silent failure problem. A structural bug in a detector error model (the intermediate representation of an annotated and compressed noise model) often surfaces only after a long Monte Carlo simulation, and sometimes never. Because decoders trust their input, a flawed model silently inflates logical error rates and may not be caught until deployment. Currently, fault-tolerant compilers have zero awareness of error correction semantics, so topological and logical inconsistencies (dead detectors, undetectable logical flips) slip straight through. The cost is real: wasted HPC runtime and, more dangerously, wasted research and development time. In the classical world, generic linters (like ESLint) keep software clean. QEC needs a domain-specific linter which catches defects early, cheaply, and before a single stochastic shot is executed.
The center piece of my research program for this year is emlint, the first static linter for detector error models. Built with Stim as dependency, emlint ingests raw .dem files or .stim circuits directly and evaluates them against core structural & deterministic checks in milliseconds. Right now, emlint checks six fundamental properties:

Sensitivity: orphaned / dead detectors never triggered by any mechanism
Detectability: undetectable logical errors (flip observable, trigger no syndrome)
Correctability: logical observable not protected by the code
Observable coverage: observable never touched by any mechanism
Probability bounds: NaN / negative / unphysical error rates
Duplicates: duplicate fault signatures

::image[ftbwokvz74edggz7uq2t]

Underpinning emlint is a rigorous algebraic formalism. Category theory is used as a design framework to break down the many challenges in establishing a verification pipeline into simpler, tractable problems. The fellowship roadmap extends towards automated and human-readable counter-example construction (for easier debugging), code-level verification, automated code discovery (linter as AI harness), and extension library system (to author custom checks).
But a mathematically sound or well-developed tool won’t be enough on its own. Developing a core user base early on and building in the open is essential to drive adoption of good quantum software practices in quantum error correction. I am taking all the advantages of this fellowship to build in the open. My community plan mirrors tried and tested open source software practices, by learning from the development of linters like ESLint for JavaScript. 

> Clear documentation and demos, conference and developer meetups, mentorship and hackathons, and upstream open source contributions are essential to build a healthy software ecosystem. 

My goal would be for emlint to be as essential for quantum error correction as the linter Clippy is to Rust: so well-integrated that one forgets it even exists. I see emlint as a contribution to facilitate QEC open source software development. Quantum software development abides by the same rules as conventional software development, and it is more than time to engage with the wider open source community and foster collaboration.
There is a preliminary version of emlint already available on GitHub. Try it, integrate it to your continuous integration pipeline, and send me your feedback via Discord (username: mathysrennela_96389)! If you want help debugging your QEC simulations, if you want to contribute to a check, or if you feel like telling me where your pain points are, let’s figure it out together!
