---
title: Journal Log: QuTiP at EuroSciPy 2026 Reflections
author: Alexander Pitchford and Maximilian Meyer-Mölleringhof 
day: 20
month: 8
year: 2026
tags:
  - python
  - qutip
  - scipy
---

Maximilian Meyer-Mölleringhof (Max) and I represented QuTiP at EuroSciPy 2026 in Krakow, supported by Unitary Foundation. As part of the conference, we gave a tutorial on QuTiP on Wednesday 22 July in which we demonstrated qubit dynamics in closed and open systems and simulated the quantum teleportation protocol using the QuTiP-QIP package.

::image[lzti0pc4eriguxndob9w]

It was a very enjoyable week, Krakow is a lovely city and the people were very welcoming. It’s always great spending time amongst open source developers and this was the first time we had been so immersed since our last attendance at EuroSciPy 2019. Open source, unsurprisingly, attracts generous-hearted people and it was a joy and honour to spend time with the European SciPy community. I remember a similar experience in 2019, but felt that the community had moved on since then from being people who developed their project in their spare time to developers working in industry and academia using the tools they develop, which is indicative of the wider adoption of open source software.

We had a few specific objectives, beyond the obvious spreading the word about QuTiP and UF. We (QuTiP team) have been looking for a solution to compiling SciPy with 64 bit indexes, so we were delighted when this came up unprompted. Lucas Colley (SciPy maintainer) has been very helpful in guiding us along a path to achieve this, starting with switching from Setuptools to [Meson](https://mesonbuild.com/).

Of course, our mission at EuroSciPy 2026 also included learning about what’s new and hot in the world of open source and how this can influence the future of QuTiP. The [free-threading in Python project](https://py-free-threading.github.io/) is one of those developments. It is now very mature, with a high proportion of major libraries having added support. For QuTiP it has the potential to open up new ways to parallelize computations whilst using less memory, which is important to study ever larger quantum systems and run sophisticated optimization routines. The [SciPy array API](https://docs.scipy.org/doc/scipy/dev/api-dev/array_api.html) provides us with an opportunity to extend the range of data backends we support, such as PyTorch, benefitting QuTiP through greater interoperability to major Python libraries. [Pixi](https://pixi.prefix.dev) provides a way to share environment configurations that in many cases could substitute for installation instructions and solve problems with platform specific compilations. As for the talks by Nvidia, they showcased their profiling tool, [Nsight](https://developer.nvidia.com/nsight-systems), which will help us optimise GPU utilisation and improve QuTiP’s heavy workload algorithms in that direction. Lastly, [Rust](https://rust-lang.org/) now seems like a very popular choice for low-level code within Python packages. In fact, nearly all projects mentioned above have adopted it for their core operations. We will be investigating this and comparing it with our experiences using Cython in QuTiP.

And of course it was great to meet so many interesting people, too many to mention all. The organising team were excellent throughout - very attentive and helpful, and the event was very well organised. Everything, from the talks to the social events was an absolute pleasure. Thank you in particular to Lúcia Pedrosa for organising and finding photos from our tutorial session. It was great to meet David Ryan of [Marqov](https://marqov.ai/) and be involved as he was actively adding QuTiP into his project at the request of industry users.

Both Max and I are very grateful to have had Unitary Foundation on board for this conference. EuroSciPy 2026 has shown that open source software is indispensable for progress in academia and industry alike. But it is ever more important to recognize the people that are behind all of these projects and it wouldn’t be without such conferences that ideas, that come up over coffee, eventually turn into fruitful collaborations.

[![Unitary Foundation](https://img.shields.io/badge/Supported%20By-UNITARY%20FOUNDATION-brightgreen.svg?style=for-the-badge)](https://unitary.foundation)
