---
title: "Operating at the edge of failure: WERQSHOP 2025 Recap"
author: Nate Stemen
day: 4
month: 8
year: 2025
tags: 
  - events
  - error mitigation
  - community
  - mitiq
---

**WERQSHOP: Building a Community for Error Resilience in Quantum Computing**

<div style="width:100%;">
  <div style="float:right;width:40%;margin-left:2em;">
    <figure>
      <img class="not-prose" src="/images/2025_werqshop/sticker-nyu.png"/>
      <figcaption><a href="https://werq.shop">WERQSHOP</a> was made possible by Unitary Foundation, NYU, and grants from the NSF and DOE.</figcaption>
    </figure> 
  </div>
</div>

On July 17<sup>th</sup> and 18<sup>th</sup> we convened 60 people from across the quantum computing ecosystem to discuss the current state and future of error mitigation.
We brought together everyone from hardcore error correction theorists, to seasoned software maintainers working on mitigation tools.
The goal was to bring a relatively small group of people together who have a vested interest in the topic to teach, learn, and discuss what's next.

Depending on how you count it, error mitigation really came on the scene in 2017 with [_Error mitigation for short-depth quantum circuits_](https://arxiv.org/abs/1612.02058) and [_Efficient variational quantum simulator incorporating active error minimisation_](https://arxiv.org/abs/1611.09301) when early versions of <abbr title="Zero-Noise Extrapolation">ZNE</abbr> and <abbr title="Probabilistic Error Cancellation">PEC</abbr> were introduced.[^1]
At that time, there was much hope and excitement surrounding <abbr title="Noisy Intermediate Scale Quantum">NISQ</abbr> devices, and <abbr title="Quantum Error Mitigation">QEM</abbr> techniques were seen as ways to boost their performance in the interim before we get fully fault-tolerant devices.
We're now nearly a decade past the coining of the term error mitigation, and the environment in which these techniques were studied has shifted dramatically. 
It's time to ask a new question:

> What role does error mitigation play on early fault-tolerant computers?

So that was exactly what we gathered people to discuss!

[^1]: There are multiple other techniques that were invented and studied prior to ZNE and PEC in 2017 (for example, dynamical decoupling and decoherence-free subspaces), but these are generally not regarded as QEM techniques following Cai et al [arXiv\:2210.00921](https://arxiv.org/abs/2210.00921).

The event took place over two days (with a fun mixer the night before to get things started on the right foot), and the schedule comprised of a mix of invited talks, contributed/lightning talks, and discussion sessions.
The full schedule, talk abstracts, **and slides** are available on [`werq.shop`](https://werq.shop).[^2]
The talks were broken into 5 sessions:

1. **From Theory to Experiment** where we heard about both [theoretical scaling limitations of QEM](https://werq.shop/talks/yihui-quek/) from Yihui Quek and how [QEM aided simulations of quantum magnetism](https://werq.shop/talks/eli-chertkov/) on Quantinuum devices.
2. **QEM on Next-Gen Devices** where Zhenyu Cai discussed [two ways to merge QEM and QEC](https://werq.shop/talks/zhenyu-cai/), and Raam Uzdin introduced [methods for mitigating noise on circuits with mid-circuit measurements](https://werq.shop/talks/raam-uzdin/).
3. **QEM and QEC** was a popular session where [applying mitigation techniques to logical qubits](https://werq.shop/talks/yongshan-ding/) was discussed from Yongshan Ding, and William Huggins presented work on [resource estimation in the early fault-tolerant](https://werq.shop/talks/william-j-huggins/) era.
4. On the second day we had a large session on **QEM in practice** where
   1. Thomas O'Leary discussed [symmetries in QEM](https://werq.shop/talks/thomas-oleary/)
   2. Jin Ming Koh showcased [error mitigation applied to condensed-matter simulations](https://werq.shop/talks/jin-ming-koh/)
   3. Matea Leahy presented a [sample-optimal tensor-network error mitigation technique](https://werq.shop/talks/matea-leahy/)
   4. Pablo Bonilla talked on [quantum error correction for neutral atom processors](https://werq.shop/talks/pablo-bonilla/)
   5. María Gragera Garcés evangelized the need to consider [QEM in the context of distributed quantum computing](https://werq.shop/talks/maria-gragera-garces/)
   6. Sam Ferracin showcased how [performant software has led to drastically faster application of QEM techniques at scale](https://werq.shop/talks/sam-ferracin/)
5. Lightning talks on
   1. [Simulating quantum field theories](https://werq.shop/talks/zhiyao-li/) (with error mitigation) from Zhiyao Li
   2. [Machine learning applied to QEM](https://werq.shop/talks/simone-cantori/) from Simone Cantori
   3. [Quantum error **detection**](https://werq.shop/talks/ethan-egger/) from Ethan Egger
   4. [Adapting QEM on the fly](https://werq.shop/talks/yvette-de-sereville/) from Yvette De Sereville
   5. [`mitiq` and all its joy](https://werq.shop/talks/nathan-shammah/) from Nathan Shammah

We also had a fun panel where the group got to grill 3 brave panelists (Misty Wahl, Raam Uzdin, and Andrea Mari) on the future of QEM, a discussion on the topic of interfacing open- and closed-source software led by Andrew Arrasmith, breakout sessions on compilation, QEM software, and QEM+QEC.

[^2]: Still waiting for someone to challenge my claim of best conference domain to date.


The two days flew by, and before I knew it we were at a local bar discussing the things we learned, and the things that seemed the most exciting, both individually and for the community.
There are many memorable moments and quotes (some of which will be shared in a more formal post-event report, and some which will not be shared 🙉), but one of my favorites is

> we will always be pushing these devices to the edge of failure to get advantage
>
> - Yongshan Ding

Regardless of the role that error mitigation plays in the coming years, we can be sure that we'll be pushing devices to the absolute limit ...

## Themes

A few themes came up again and again throughout the two days:

- First and foremost, there's no one-size-fits-all solution. Despite years of work, the field lacks a shared understanding of when and why different QEM techniques succeed. If you're handed a device with a specific noise model, good luck finding prescriptive advice that doesn't boil down to "try everything." This gap was felt acutely.
- QEM + QEC is still underexplored. Several talks proposed new ways of layering or integrating mitigation techniques with early fault-tolerant architectures. This is very likely going to be very important over the next decade, but we're still early.
- Tailored techniques are showing real results. Some of the most compelling results came from teams designing mitigation strategies specific to the structure of the problem or algorithm they were running. This may be where error mitigation can have the most near-term impact.
- Everyone is using multiple techniques. Whether it's randomized compiling, dynamical decoupling, zero-noise extrapolation, or learned calibrations — in practice, people are stacking methods.

It's clear there is a lot of work to do, and many side streets and alleyways to explore, but I think many of us are walking away from this event with a few of those possibilities pruned, and a more solid sense of direction.

## 🙏 Thank you ❤️

To end, I want to give a few thanks:

- To the Unitary Foundation for letting me organize this event
- To my wonderful WERQSHOP co-organizers (Nathan Shammah, Greg Quiroz, Ryan LaRose, Andrea Mari, Pranav Gokhale, Peter Orth, Misty Wahl, Will Zeng)
  - The best local organizers: Veena Vijayakumar, Ben Castanon, Javad Shabani, Monna Sabouri
- All of the speakers listed above: this wouldn't have been an event without you!
- Every single attendee: everyone who showed up engaged with hard questions and brought many amazing ideas on what to do next. Thank you for fueling the future of error resilience!

<figure>
  <img class="not-prose" src="/images/2025_werqshop/group.png"/>
  <figcaption>Group photo taken on our very theatrical stage.</figcaption>
</figure>

