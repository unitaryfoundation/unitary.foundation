---
title: "Getting paid for your open-source quantum work with Merit Systems"
author: Jordan Sullivan, nate stemen
day: 4
month: 9
year: 2025
tags:
  - ucc
  - mitiq
  - community
---

**A critical gap in open source...**

Open-source software powers all of the most widely used tech tools we rely on, from web protocols to the Linux kernel -- and incredibly, most of the people who write it do so on a volunteer basis.

**Our mission at Unitary Foundation is to help grow a quantum OS ecosysytem that benefits the most people.** To this end, we are dedicated to compensating and recognizing individuals for their work in this field, like with our [microgrant program](https://unitary.foundation/posts/2024_microgrant_impact/) and annual [unitaryHACK hackathon](https://unitary.foundation/posts/2025_uhack/) -- with record participation this year with 172 GitHub issue bounties closed and $19,710 earned by 78 hackers. Spurred on by this success, we were looking for a way to extend the issue bounty program into the rest of the year.

# Introducing Unitary Foundation x Merit Systems

<div style="display: flex; justify-content: center; align-items: center;">
  <figure style="text-align: center; margin: 0;">
    <img src="/images/Merit_UF_logos.png" width="600" alt="Unitary Foundation." />
  </figure>
</div>

That's why we're partnering with [Merit Systems](https://www.merit.systems/), a payment service platform designed to help reward open-source contributors. It interfaces with your GitHub account and makes the process of getting paid straightforward in a wide array of countries.

What does that mean for our work at Unitary Foundation?
Well, to start off we are piloting Merit in two of our open-source software projects: [mitiq](https://github.com/unitaryfoundation/mitiq) and [ucc](https://github.com/unitaryfoundation/ucc), where we'll be using Merit in slightly different ways:

## Mitiq - rolling release payments

<div style="width:100%;">
  <div style="float:right;width:30%;margin-left:2em;">
    <figure>
      <img src="/images/mitiq-logo.png" width="300" alt="mitiq logo" />
    </figure> 
  </div>
</div>

If you're not already familiar, [`mitiq`](https://github.com/unitaryfoundation/mitiq) is a toolkit for applying quantum error mitigation.
We plan to distribute **$1,000 per release** to non-Unitary Foundation contributors.
The amount will be distributed according to Merit's default [attribution algorithm](https://www.merit.systems/docs/projects/attribution), which rewards more substantial contributions more heavily.
Don't worry though, the distribution will be audited by myself (nate) along with other maintainers and we will do our best to ensure fair distribution.
If the algorithm doesn't catch that a PR was as crucial as it was, we can make the changes necessary to ensure that is reflected.

This method means you can get paid for your contributions, no matter how small![^1]

[^1]: Small contributions do mean smaller payout, but it's something!

## UCC - "pass of the month" bounty

<div style="width:100%;">
  <div style="float:left;width:30%;margin-right:2em;">
    <figure style="margin-top: 0; margin-bottom: 0;">
      <img src="/images/UCC-logo.png" width="300" alt="ucc logo" />
    </figure> 
  </div>
</div>

[`ucc`](https://github.com/unitaryfoundation/ucc) stands for Unitary Compiler Collection, a set of tools for quantum compilation. We will be using Merit bounties to reward folks for implementing new, performant compiler passes in the repo: this can be be one of our [existing issues](https://github.com/unitaryfoundation/ucc/issues?q=is%3Aissue%20state%3Aopen%20label%3Amerit-bounty) with the `merit-bounty` tag, or a [new compiler pass](https://github.com/unitaryfoundation/ucc/discussions/new?category=new-compiler-pass) that you propose!

We plan to award between **\$250-$500 per month** to the strongest contribution to UCC's compiler passes.

# Get involved

The next few months will be a trial phase for us using Merit, so our distribution mechanisms may change, but we certainly remain adamant about rewarding open-source contributions.
To take the first step, make sure your GitHub account is connected to Merit so you can claim your payments 
Let's get you paid!

| GitHub repo | Documentation | Merit Terminal |
| --- | --- | --- |
| [`unitaryfoundation/mitiq`](https://github.com/unitaryfoundation/mitiq) | [`mitiq.readthedocs.io`](https://mitiq.readthedocs.io/) | [mitiq on Merit](https://terminal.merit.systems/unitaryfoundation/mitiq) |
| [`unitaryfoundation/ucc`](https://github.com/unitaryfoundation/ucc)     |   [`ucc.readthedocs.io`](https://ucc.readthedocs.io/)   |     [ucc on Merit](https://terminal.merit.systems/unitaryfoundation/ucc) |


