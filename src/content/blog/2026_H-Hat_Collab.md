---
title: "Open Source Code and Beyond: Building the Collaborative Future of H-hat"
author: Eduardo Maschio and Inho Choi
day: 20
month: 5
year: 2026
tags: 
  - community
  - unitaryHACK
  - unitaryDESIGN
  - guest post
---
_This post is written by UF community members and H-hat maintainers, Eduardo Maschio and Inho Choi. Eduardo was a 2023 micrograntee for the H-hat project and continues to participate in UF programming as a unitaryHACK and unitaryDESIGN maintainer, as a community organizer, and as an [Open Quantum Benchmark Committee](https://unitary.foundation/posts/2024_benchmark_committee/) member._ 

_unitaryHACK and many of our community-facing events aren't possible without the hardworking maintainers who volunteer their time to these open source events and dedicate themselves to open access and education. This post is dedicated to all of you who continue to work with us year after year. It's an honor to keep working with you!_

## Meet the Maintainers

### Eduardo Maschio

_**How did you find Unitary Foundation?**_</br>
I found UF back in 2020 while looking for communities specifically for quantum libraries. I really wanted to join the community as a micrograntee, so I applied and, by Q1 2023, I was granted and started this long-lasting partnership with UF. Since then, it has been very exciting to interact with people, learn about new ideas, and be part of this maturing quantum ecosystem.

_**What is your background?**_</br>
I am a physicist with an academic journey focused on quantum information—specifically qubits and qutrits states, Hamiltonian engineering, and circuit quantum electrodynamics. Additionally, I have grown hacking with computer programs, from mIRC scripting to Matlab and early QuTiP codes. Seeing classical and quantum working together with the early version of Qiskit was very exciting... it was clear to me some patterns were repeating themselves and we could leverage our 70+ years of experience into the quantum computer software side. This is why I started H-hat.

_**Building the H-hat Community**_</br>
I started the [H-hat office hours](https://discord.com/events/764231928676089909/1393253648317808762) around October 2024 as a way to promote the project, explain and discuss its principles, and also to bring new collaborators interested in the intersection of programming languages and quantum computing.

I was then invited to be a maintainer for unitaryHACK at its 2025 edition. It was very exciting! As the project requires good skills in very niche but distinct fields, the challenge was how to make it easier for newcomers willing to participate in the hackathon to contribute to the project. Luckily, there were some very nice encounters.


### Inho Choi

_**How did you find Unitary Foundation?**_</br>
In 2022, I was engaged in research centered on quantum error mitigation within the Qiskit framework, specifically regarding error suppression through Dynamical Decoupling (DD) and the reduction of crosstalk errors. In the course of this exploration, I encountered the Mitiq project. Through this discovery, I gained an understanding of how Unitary Foundation systematically supports open source quantum computing initiatives and fosters community engagement.

_**What is your background?**_</br>
My background spans the intersection of physics and engineering. I hold an MPhil in Physics from HKUST and am currently a Researcher at KAIST. My interests encompass quantum information, many-body physics, and quantum algorithm design. On the experimental side, I have contributed to software stacks for multiple platforms, including a Strontium-88 Rydberg digital quantum simulation system and dipolar quantum simulation with ultracold erbium atoms. I have also held the role of Qiskit Advocate since 2021.

_**What drew you to the H-hat project?**_</br>
I am interested in the role programming languages will play in shaping the future of quantum architecture. Unlike classical computing, where abstractions have been refined over decades, quantum programming presents fundamentally different challenges rooted in the nature of quantum mechanics itself. This drew me to H-hat, a language designed to provide a high-level, structured approach to expressing quantum computations. I am motivated by a vision where quantum software development is both accessible and rigorous.

## The Spark: unitaryHACK 2025

_**How did you start working together?**_</br>
**Eduardo:** We met during [unitaryHACK 2025](https://2025.unitaryhack.dev/projects/h-hat-quantum-programming-language/), where Inho contributed to two major issues: `implementing types importing logic (similar to how most programming languages handle imports)` and `implementing the quantum primitive function @nez (not-equal-to-zero), mapping it into OpenQASM 2 for the Qiskit backend`.

_**What was it like collaborating?**_</br>
**Eduardo:** Working with Inho was super chill. We were very aligned from the beginning and our ideas were complementary to each other or even amplified, so it was very refreshing to see someone else understanding the principles behind H-hat. I realized at that point that more people were looking for alternatives to current approaches on quantum computing. I remember we had several meetings to discuss the issues, the language and its paradigm, and the next steps, and it was awesome for me to see, for the first time, someone actually attending all our meetings and office hours to discuss the language and what to do next. I was sure that we were building something beyond the hackathon at that time.

**Inho:** Collaborating with Eduardo has been a genuinely enriching experience. As an experienced software engineer, he has offered valuable insight into how data is structured and how systems are designed at a broader architectural level, which has deepened my own understanding. Despite occasionally holding differing perspectives and ideas, our discussion has remained constructive and highly productive throughout by identifying the problem and drawing the big picture. We share a common vision and direction for the project, which has served as a strong foundation for open and effective discussion.

_**What were your personal challenges and successes during the hackathon?**_</br>
**Eduardo:** One challenge was seeing people use AI without properly addressing issues or knowing how to interact with maintainers. The successes I can remember are the smooth interactions I had with the contributors that were actually interested and committed to the hackathon. My advice to participants: if you are committed, the maintainer will help you. You’ll end up being part of something you truly contributed to.

**Inho:** It was a valuable opportunity to challenge myself beyond my immediate familiarity. One of the most rewarding aspects was engaging with established open-source projects and navigating their existing codebases, as well as connecting with like-minded individuals.

## Building the Future of H-hat

_**Inho, what made you want to stay on the project?**_</br>
I hold a strong conviction in the significance of programming languages for quantum-based architecture. Beyond that, Eduardo's technical vision has been instrumental in sustaining my commitment. His approach to translating that vision into concrete architectural and design decisions gave me confidence that the project is heading in a meaningful direction.

_**What does your partnership look like today?**_</br>
**Eduardo:** It’s very natural. We meet during office hours—I’ve actually adjusted the "official" time specifically so Inho can join from his timezone! We also use asynchronous communication for news or deadlines. We distribute tasks independently, like the recent documentation revamping and language structure changes, which we then assigned as issues for [unitaryDESIGN](https://unitary.design/projects/h-hat-quantum-programming-language/).

**Inho:** We share a common vision. If you’re interested, we have a [dedicated H-hat channel](https://discord.gg/4dp2xEtHu9) on the Unitary Foundation Discord where you can join our [office hours](https://discord.com/events/764231928676089909/1393253648317808762) (officially at 11am UTC and 5pm UTC).

## What’s Next? 

_**Any new releases on the horizon?**_</br>
Eduardo: We had some major changes earlier this year on how to approach H-hat development, which is why there hasn't been much public activity lately. We are working behind the scenes to guarantee some big announcements and releases next semester. So give a star to the [project repository](https://github.com/hhat-lang/hhat_lang) and stay tuned at the H-hat channel!

## Final thoughts?
If you are curious to know what we are up to, want to explore new frontiers of quantum computing, or improve your programming and open-source development skills, join us at the **unitaryHACK 2026**!
