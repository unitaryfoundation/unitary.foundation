---
title: Agentic leaderboards for quantum information research
author: Will Zeng
day: 9
month: 10
year: 2026
tags:
  - research
  - community
  - challenges
---

There's been a phase transition since approximately Spring 2026 in quantum information research. Things are accelerating through AI-assistance and the new forms of research that it supports. Let's look at this through a few examples.

In April, [Google showed](https://research.google/blog/safeguarding-cryptocurrency-by-disclosing-quantum-vulnerabilities-responsibly/) how to reduce the size of the quantum program needed to break practical elliptic curve cryptography by 20X. To disclose this responsibly, they didn't release the explicit new programs, but rather released a zero-knowledge proof that they had sufficiently small programs to match their claims. In May, a decentralized community adopted the code for this zero-knowledge proof checker as a validator for an AI harness, building a leaderboard called [ecdsa.fail](https://www.ecdsa.fail/) for the open source community to improve on the results. The AI-assisted community not only replicated Google's results, but has now developed the Pareto best performance on these algorithms at 68%+ better than Google's.

For me this was a milestone in new ways of doing research. Shor's algorithm isn't a niche, unexplored problem. It has been a key motivating quantum computing application for over 30 years, so seeing AI models push this frontier is a big deal. 

While the result itself is of course interesting, it is a model for new ways that communities can collaborate on research in the AI era. More challenge harnesses for AI assisted research drive more progress. At Unitary Foundation we have recently launched one for optimizing quantum error correcting codes, the [QEC Challenge](https://unitaryfoundation.github.io/qldpc-challenge/) that we described in this [blogpost](https://unitary.foundation/posts/2026_qec_challenge/) and have since developed some more leaderboards for related challenges.

What makes a harness work is modest: a problem whose answer a program can check, and a public board where the current best becomes the starting line for everyone else. Human contributors get the same thing out of this that agents do, a tight loop between an idea and a verified result. We believe that this form of collaboration will be important at least in the near term, so we've started an [index of challenges](/community/challenges/) in quantum information that fit this shape, from the ECDSA board above to leaderboards for stabilizer rank decompositions, Clifft's circuit optimizer, and hardware benchmarks on Metriq. If you run one we've missed, tell us on [Discord](https://discord.com/invite/JqVGmpkP96) or [github](https://github.com/unitaryfoundation/unitary.foundation) and we'll add it.
