---
title: "An open leaderboard for human- and AI-discovered quantum codes"
author: Farrokh Labib
day: 30
month: 9
year: 2026
tags:
  - quantum error correction
  - AutoQEC
  - open source
  - community
---

As AI models are getting more mature, their use in automated research pipelines has become more reliable and realistic. Quantum Error Correction (QEC) is a field that is a natural fit for such autoresearch, because it is easy to say, in numbers, what a good code is. This is apparent in recent scientific work: agentic research is increasingly a staple of the quantum error correction practitioner's toolbox. And many research papers have appeared recently on how LLMs are used autonomously to find good codes.

It's hard to build on these results when they are reported in different papers and each in their own format. A key parameter of a code, the distance, is usually not computed exactly (as it is NP-hard to do so) but estimated, and different papers might use different methods with different levels of confidence. We wanted to create a shared place with one set of rules, where anyone can re-run a distance estimate and interface it with their AI agent. The QEC Challenge is our attempt at such a shared place.

The <a href="https://github.com/unitaryfoundation/qldpc-challenge" target="_blank" rel="noopener noreferrer">QEC Challenge</a> is a public leaderboard for quantum error correcting codes. Contributors submit new codes in a standard format by opening a PR to the public GitHub repository. It is a challenge because a contributor is incentivized to improve on the board: for the number of physical qubits it uses, it must protect more logical qubits, or protect them against more errors, than any code already there. The CI checks that the submission is a valid code and challenges its claimed distance with a refutation gate: it searches for an error the code would miss, and rejects the claim if it finds one (details below). As of this week the board holds 1500+ verified codes from 40+ contributors, with many pushing the frontier.

There is still a lot to build. Which metric to rank codes by is itself a research question. The board already has a circuit-level tier, still thinly populated. And a code that stores qubits well is only the start; a quantum computer needs fault-tolerant operations on those qubits, and the challenge does not yet measure those at all.

We encourage anyone with interest and/or expertise in QEC to submit new codes, add circuits to codes that don't have one, propose better metrics, make the verifier faster, try to refute codes already on the board, or tell us how the challenge should be extended to operations.

The challenge is part of Unitary Foundation's AutoQEC project with NVIDIA, funded under Phase 1 of the Department of Energy's Genesis Mission.

## How a code gets on the board

Before getting into the details of how the board works, a quick refresher on what a quantum error correcting code is. In short, a code spreads a logical qubit over many noisy physical qubits so that errors can be detected and undone. A code is characterized at a high level by three numbers: n, the physical qubits it uses; k, the logical qubits it protects; and d, the distance. The distance roughly says how many errors it can take before something goes wrong. A good code protects many logical qubits with few noisy ones, at high distance. To protect the logical qubits, we have to repeatedly measure stabilizers on subsets of qubits. These checks are described by the parity-check matrices, and their weight w tells you how many noisy qubits you need to measure simultaneously for one stabilizer.

To submit a code you submit its parity-check matrices, the distance you think it has, and, if you have one, a coordinate for each qubit. That's it: the CI works out the rest (how many logical qubits it encodes, how heavy its checks are, whether it's local in 2D, which boards it should be on). Alongside the code itself, each entry has a short note on how it was found (including what didn't work), a record of who found it and with which tools, and a tag saying how confident we are in the distance.

The board is a grid: rows are locality classes and columns are check weights, both computed from what you submitted. Within each cell, entries form a Pareto frontier over n, k, d and w. Your code is a record if nothing there beats it on all four at once, so a cell can hold several records side by side.

<figure>
  <img
    style="display:block; margin:auto;"
    src="/images/2026_qec_challenge/frontier.gif"
    alt="Animated (n, k) Pareto frontier of the QEC Challenge board by distance floor, June to September 2026" />
  <figcaption>How the board's frontier grew over the summer. Each panel fixes a minimum distance d; lower n and higher k are better. The staircase is the set of codes nothing else beats.</figcaption>
</figure>

## Distances are challenged

The distance is the hardest of the three numbers to pin down. Finding the lightest logical operator of a code is NP-hard, so for anything beyond a few dozen qubits it is estimated through a search. The estimate can be wrong, so the board records not only a distance for each entry but how much is known about it.

At minimum, a distance is a witnessed upper bound. The submitter provides a logical operator of the claimed weight, found for them by the submission tool, and the verifier confirms that it is one. This establishes that the true distance is at most the claimed value.

Whether it is also at least that value is what the refutation gate tests. It uses randomised information-set decoding: the qubits are randomly reordered, the logical operators are brought to reduced form with respect to that ordering, and the lightest one is recorded; this is repeated millions of times with different orderings. If a lighter operator turns up, the entry's distance must be updated and that operator replaces the witness.

Refutation is treated as a contribution in its own right. Anyone who finds a lighter logical operator for an existing entry can submit it, and the revision is credited to them. This matters more than it might seem. A short search on a code of a few hundred qubits typically reports a distance well above what a longer search converges to, so without continued attack the board would gradually fill with overestimates.

## Beyond parameters

Parameters are not performance. A code with a good (n, k, d, w) can still lose to a surface code once you build the syndrome-extraction circuit, because hook errors and the measurement schedule set an effective circuit-level distance that can be well below d. This is the number that actually predicts whether a code protects a qubit on hardware, and it is the number the community mostly lacks, because most code tables stop at parameters. The point of the next two tiers is to close that gap and make the repository a place where codes can be ranked by their potential performance on hardware.

The repository already carries the next two tiers. A circuit tier stores an explicit circuit per entry with a witnessed circuit-level distance. A measured-error-rate tier records logical error rate against physical error rate under a fixed noise model and a pinned decoder, currently for about two dozen entries. What holds both tiers back is not tooling but compute: an exhaustive circuit-distance search for a moderate code is memory-bound on a workstation, and a logical error curve at realistic physical rates needs a very large number of shots per point. That is where GPU time matters, and where our work over this and the next phase is aimed.

## Join in

With all that being said, the best way to get familiar with the challenge is to participate in it.

- **Submit a code.** `./qldpc submit` takes you from matrices to a PR. The current bars for every cell are in <a href="https://github.com/unitaryfoundation/qldpc-challenge/blob/main/TRACKS.md" target="_blank" rel="noopener noreferrer">TRACKS.md</a>.
- **Point your agent at the repository.** Start it from <a href="https://github.com/unitaryfoundation/qldpc-challenge/blob/main/AGENTS.md" target="_blank" rel="noopener noreferrer">AGENTS.md</a>; the prompt in <a href="https://github.com/unitaryfoundation/qldpc-challenge/blob/main/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">CONTRIBUTING.md</a> is meant to be pasted as-is.
- **Refute a claim.** Pick an upper-bound entry, run a deeper search with whatever compute you have, and submit the lighter witness. It is credited to you.
- **Propose a track or a baseline.** The tracks are computed, so a new one needs a definition the verifier can check. <a href="https://github.com/unitaryfoundation/qldpc-challenge/issues" target="_blank" rel="noopener noreferrer">Open an issue</a>.
- **Join the discussion** on the <a href="https://discord.unitary.foundation" target="_blank" rel="noopener noreferrer">Unitary Foundation Discord</a> and star the <a href="https://github.com/unitaryfoundation/qldpc-challenge" target="_blank" rel="noopener noreferrer">repository</a>.

## Acknowledgements

Thanks to everyone who has submitted, refuted or reviewed a code, and to the participants of the unitaryCON sprint and its hosts at IEEE Quantum Week. This work is supported by NVIDIA and by the Department of Energy's Genesis Mission under the AutoQEC Phase 1 award.
