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

There's been a phase transition since April 2026 in relevant quantum information research. Things are accelerating through AI-assistance and the new forms of research that it supports. Let's look at this through a few examples.

In April, Google showed how to reduce the size of the quantum program needed to break practical elliptic curve cryptography by 20X. To disclose this responsibly, they didn't release the explicit new programs, but rather released a zero-knowledge proof that they had sufficiently small programs to match their claims. In May, a decentralized community adopted the code for this zero-knowledge proof checker as a validator for an AI harness, building a leaderboard called [ecdsa.fail](https://www.ecdsa.fail/) for the open source community to improve on the results. The AI-assisted community not only replicated Google's results, but has now developed the Pareto best performance on these algorithms at 60%+ better than Google's.

For me this was a milestone in new ways of doing research. Shor's algorithm isn't a niche unexplored problem. It has been the key motivating concrete application for over 30 years, so seeing AI models push this frontier is a big deal.

More challenge harnesses for AI assisted research drive more progress. At Unitary Foundation we have just launched one for optimizing quantum error correcting codes, the [QEC Challenge](https://unitaryfoundation.github.io/qldpc-challenge/), with more to come.

What makes a harness work is modest: a problem whose answer a program can check instead of a referee, and a public board where the current best becomes the starting line for everyone else. Human contributors get the same thing out of this that agents do, a tight loop between an idea and a verified result. So we've started an [index of challenges](/community/challenges/) in quantum information that fit this shape, from the ECDSA board above to leaderboards for stabilizer rank decompositions, Clifft's circuit optimizer, and hardware benchmarks on Metriq. If you run one we've missed, tell us on [Discord](https://discord.com/invite/JqVGmpkP96) and we'll add it.
