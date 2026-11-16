---
title: The 2026 Quantum Open Source Software Survey Results
author: The UF Team
day: 16
month: 11
year: 2026
tags: 
  - survey
  - community
---
<a href="https://unitaryfoundation.github.io/survey-2025/" target="_blank"><img src="/images/2025_qoss_banner.png"></a>

Unitary Foundation is thrilled to share the results of the [2026 Quantum Open Source Software (QOSS) Survey](https://unitaryfoundation.github.io/survey-2026/), which is now in its **fifth consecutive year**.
This year saw our biggest turnout yet, drawing **1,878 respondents across 87 countries**, a 32% jump from 2025 (1,420) and more than double our inaugural 2022 cohort (826)!

Alongside five-year longitudinal trends across Demographics, Experience, Community, and more, this year’s report introduces a brand-new 9-question [AI Tools + Usage](https://unitaryfoundation.github.io/survey-2026/#AI-tools) benchmark and deeper dives into [Hybrid Quantum–Classical Workflows](https://unitaryfoundation.github.io/survey-2026/#Hybrid) and [Resource Estimation](https://unitaryfoundation.github.io/survey-2026/#Resource-estimation). Read more on our insights below. 

**A Note on Our Methodology**
The quantum OSS projects listed in the software survey have been chosen among those with >50 stars on GitHub/GitLab and commits within the last 12 months, included in the **[awesome-quantum-software list](https://github.com/qosf/awesome-quantum-software)** and other lists, excluding software focusing on tutorials, cryptography, and experiments. Software and tools that are represented for the first time this year are not shown in the year-to-year comparison questions.

A draft of the survey was circulated among the Unitary Foundation advisory board, executive board, program members, and partners for feedback. The survey was open from Sept. 10 – Oct. 29, 2026. The data is stored at **[github.com/unitaryfoundation/qoss-survey](http://github.com/unitaryfoundation/qoss-survey)**.

Unitary Foundation circulated the survey on its social media platforms (Discord, X, LinkedIn, UF blog) and contacting major blogs (QC Report, Qiskit Slack channels, PennyLane blog, etc.), newsletters (UF mailing list, QuTiP mailing list, UNESCO mailing list, academic networks, and more), UF members, supporters, collaborators, and partners.

This is all possible thanks to UF’s amazing members and supporters. **Thank you to all who participated!**

If you have feedback on our thoughts below or the survey itself, please reach out to us at info@unitary.foundation or on our [Discord Server](https://discord.gg/2Y9z9xKKbr). 

Warmly,</br>
The UF Team



## 📊 [Demographics](https://unitaryfoundation.github.io/survey-2026/#Demographics) + The Changing Face of the Community
The 2026 survey drew [1,878 respondents](https://github.com/unitaryfoundation/qoss-survey/blob/main/2026/Quantum%20Open%20Source%20Software%20Survey.csv), which demonstrates a 32% increase from [2025](https://github.com/unitaryfoundation/qoss-survey/blob/main/2025/2025_Quantum_Open_Source_Software_Survey.csv) (1,420) and more than double the respondents of our very first survey in [2022](https://github.com/unitaryfoundation/qoss-survey/blob/main/2022/QOSS%20software/QOSS_software_PDF.pdf) (826). It also revealed an ecosystem expanding in two directions at once: a massive influx of early-career newcomers and independent builders alongside record participation from senior executives and international communities.

**Global Reach + Representation** The quantum open source community is more geographically distributed than ever, spanning 87 countries in 2026 (up from 74 in 2025 and 64 in 2022). For the first time in the survey’s five-year history, respondents from the United States (17.7%) accounted for less than a fifth of the total (22.8% in 2025), while respondents who claimed they were from India (15.7%) and Israel (15.5%) nearly tied for the second spot, followed by Canada (7.7%), the United Kingdom (5.1%), and Germany (5%). Meanwhile, gender representation reached a four-year high, with respondents identifying as women rising to [18.5%](https://unitaryfoundation.github.io/survey-2026/#gender-identity) (up from 15.7% in 2025 and 12.6% in 2024). Our aim is to further expand these numbers and ensure that UF is better serving them through our programs and resources. 

**Roles + Backgrounds** While researchers and software developers remain our core, the surrounding community [is shifting](https://unitaryfoundation.github.io/survey-2026/#roles). For the second straight year, respondents with a classical programming background ([54.0%](https://unitaryfoundation.github.io/survey-2026/#background)) outnumber those from quantum research (48.2%, [down from 59% in 2022](https://github.com/unitaryfoundation/qoss-survey/blob/main/2022/QOSS%20software/QOSS_software_PDF.pdf)), while non-quantum researchers hit a five-year high of 19.3%. Meanwhile, self-identified business leaders reached an all-time high of 12.2% (up from 9.8% in 2025). And independent hobbyists now make up 15.6% of respondents, joining educators (12.9%) and students (25.9%) in shaping the open-source ecosystem. Supporting and growing our educator community remains a top priority for Unitary Foundation as the ecosystem scales.

**Age + Experience** Our 2026 demographic curves show a fascinating split between emerging professionals and seasoned industry leaders. Over half of respondents (56.2%) have two years or less of professional quantum experience, led by those with less than 1 year of experience at 33.9% (up from 29.4% in 2024). While 25–34 remains the largest age bracket ([39.3%](https://unitaryfoundation.github.io/survey-2026/#age)), respondents aged 45–54 more than doubled their representation since 2023 (rising from [6.9%](https://github.com/unitaryfoundation/qoss-survey/blob/main/2023/2023%20Quantum%20Open%20Source%20Software%20Survey.csv) to 14.2%), closely mirroring the surge in business leadership participation.

**Affiliation, Pay, + Education** The data on affiliation and compensation highlights the ongoing reality of open-source quantum work. No affiliation rose for the second consecutive year to [12.5%](https://unitaryfoundation.github.io/survey-2026/#affiliation-in-quantum-technology) (up from [7.3%](https://unitaryfoundation.github.io/survey-2024/) in 2024), and 15.8% of respondents describe themselves as solo freelancers or independents, even as 54.6% work inside organizations of 100 or more employees. At the same time, the share of respondents working in quantum technology without pay reached a five-year high of [44.2%](https://unitaryfoundation.github.io/survey-2026/#pay-for-working-with-quantum-technology) (up from [38.1%](https://unitaryfoundation.github.io/survey-2025/#pay-for-working-with-quantum-technology) in 2025 and [33.5%](https://unitaryfoundation.github.io/survey-2024/#pay-for-working-with-quantum-technology) in 2024), while those paid for quantum "as my primary job" shifted from 53.1% to 46.6%. Full-time industry roles still grew from 600 to 643, so this isn't a hiring slowdown, but more a surge of curiosity. More students, hobbyists, and independent developers are building in the open than ever before, underscoring just how much open public goods, mentorship, and microgrants matter.
Finally, with respondents [split almost evenly](https://unitaryfoundation.github.io/survey-2026/#educational-background) across PhDs (32.2%), master’s degrees (31.3%), and bachelor’s degrees (26.3%), our community reflects a healthy blend of deep doctoral research and software engineering talent from every academic stage.



## 🤖 [AI Tools](https://unitaryfoundation.github.io/survey-2026/#AI-tools) + Usage (NEW for 2026)

In our brand-new AI benchmark, 77.8% of respondents reported using AI tools for quantum tasks, led by Anthropic Claude Code (71.6%), OpenAI Codex (41.8%), and Google Gemini (39.4%). Across workflows, more developers now rely on AI assistance than purely manual work to debug code, learn new SDKs, write circuits, generate documentation, and summarize arXiv papers.

Yet high adoption hasn’t translated into blind trust. While 80.8% agree that AI makes them more efficient, only 56.9% view AI-generated quantum code as accurate, and 81.7% verify AI quantum explanations most or all of the time, primarily through manual reviews (78.3%) and automated tests (54.2%). Looking ahead, the community expects AI to make its biggest mark on application development, algorithm development, and software engineering, underscoring how essential clear documentation and strong test suites remain as AI becomes a standard part of the quantum stack.

The UF team has spent a lot of this year thinking about AI for Quantum Open Source Software (read our ArXiv paper [here](https://arxiv.org/abs/2610.38049)!), and this data will continue to corroborate and inform our work. 



## ⚙️ [Full-Stack Platforms](https://unitaryfoundation.github.io/survey-2026/#Full-stack-development), [Cloud Services](https://unitaryfoundation.github.io/survey-2026/#Cloud-services), + Developer Workflows
While Qiskit (65.4% current/future usage) and PennyLane (46.2%) remain the most widely used platforms in the ecosystem, we noted significant growth among up-and-coming and specialized packages. Here are the smaller and mid-sized packages that jumped the most this year:

- **Bloqade (QuEra):** Had the highest overall jump, growing from 10.7% to 18.2% in current/future usage (and more than doubling its active user share from 2.5% to 5.6%).
- **MQT Core (Munich Quantum Toolkit):** Jumped from 10.0% to 16.6% in current/future usage.
- **Perceval (Quandela):** Grew from 9.3% to 13.5% in current/future usage.
- **Graphix:** Climbed from 8.8% to 12.6% in current/future usage.
- **Equilux (OpenQuantumDesign):** Rose from 8.5% to 11.6% in current/future usage.

Among larger frameworks, Classiq and NVIDIA CUDA-Q also saw major adoption gains, while Windows edged out Mac and Linux as the top OS for accessing quantum software platforms.



## 🛠️ [Software](https://unitaryfoundation.github.io/survey-2026/#Software)
To capture how the quantum software stack is evolving across specialized domains, we structured this year’s software section into six focused subsections, including a brand-new deep dive into hybrid workflows: (5.1.) Software for Applications & Tools, (5.2.) Hardware Design & Control, (5.3.) Hybrid Quantum–Classical Workflows (NEW), (5.4.) Quantum Error Correction, (5.5.) High-Performance Computing Software, (5.6.) Resource Estimation. Across these six areas, a few standout trends show how builders are working today:
- In our new subsection on **hybrid workflows**, over half of respondents (52.9%) reported running hybrid quantum–classical workloads over the past year, including 46.8% pairing QPU execution with classical pre- and post-processing, and 36.8% running iterative QPU–classical loops. Scaling those workloads still hits real-world friction, led by limited QPU access (54.5%), cost (41.8%), and limited GPU/HPC access (37.0%).
- After sitting flat around ~20% in 2024 (19.8%) and 2025 (20.9%), **resource estimation** usage jumped to 33.4% in 2026. Led by PennyLane (54.4%) and Qualtran (14.2%), developers are using these tools primarily to pinpoint algorithmic bottlenecks (61.8%), benchmark performance (59.6%), and estimate hardware runtimes (57.5%).
- Roughly a third of respondents use **Quantum Error Correction software** and **HPC software**, while 27.9% use tools for **hardware design and low-level control** (up from 23.5% in 2025).
- Across every software category, developers rank **quality of results (#1)** and **ease of use (#2)** as their top priorities, while **price/economical cost (51.3%)** reached a five-year high as the #1 barrier to adopting new tools even as poor documentation dropped sharply as a pain point (from 50.6% in 2024 to 29.7% in 2026).



## 🔬 [OSS Development, Research + Programming Languages](https://unitaryfoundation.github.io/survey-2026/#Open-source)
Regarding the areas of quantum computing believed to be the most promising for future research, two areas continued to decline in 2026:
- **Hardware Development** dropped to 19.9% (down from 27% in 2025 and 34% in 2024).
- **Error Mitigation** dropped to 15.4% (down from 23% in 2025 and 28% in 2024).

Meanwhile, Algorithm Development (54.3%), Error Correction (44.4%), and Application Development (42.6%) continue to be considered the **most promising areas**, joined by a strong debut for QPU–HPC Integration (23.8%).

It’s also encouraging to see sustained momentum around open-source research and code: 48.0% of respondents actively contribute code to quantum OSS projects, 32.7% have already co-authored a research paper based on open-source software, and another 32.6% want to in the future.

Finally, while Python (92.5%) remains the standard language and C/C++ jumped from 27.8% to 33.9% in active usage, the data on programming languages respondents want to learn next was unambiguous for the third year in a row: everyone still wants to learn Rust (45.3%)!



## 💬 [Community](https://unitaryfoundation.github.io/survey-2026/#Community), Learning, + Troubleshooting Shifts
Even as the tools and workflows around quantum computing evolve rapidly, one constant stands out across all five years of the survey: an overwhelming **90.7% of respondents view open-source software as having a positive impact on the quantum community** (75.1% very positive, 15.6% somewhat positive).

How developers learn and troubleshoot, however, looks noticeably different than it did just a few years ago. **Project documentation (75.2%) and GitHub/GitLab source code (72.4%) remain the top two places developers turn for answers**, confirming that clear docs and readable repositories continue to anchor the ecosystem. Right behind them, GenAI tools surged to 63.7% - climbing steadily from 37.5% in 2024 and 54.3% in 2025 - while traditional Q&A forums continued a multi-year decline, with Quantum Computing Stack Exchange falling to 27.2% (down from 45.7% in 2022) and Stack Overflow dropping to 19.0% (down from 45.4% in 2022).

**Hackathons (53.0%) held steady and moved back into the top spot as the most helpful resource for learning and engagement**, while video resources dropped nearly 10 percentage points (from 60.1% in 2025 to 50.9% in 2026). Certificates and degrees (45.7%), digital text tutorials (45.0%), and mentorship programs (41.5%) rounded out the top five.

As quantum open source welcomes a broader mix of researchers, classical developers, students, and industry builders, those shared public goods - well-documented tools, open benchmarks, mentorship, and hands-on hackathons - will remain essential to helping everyone build together.


## [Review the Full Data-Set](https://unitaryfoundation.github.io/survey-2026/) + Join the Conversation!
Thank you to all 1,878 respondents who shared their experiences with us this year. The 2026 results paint a clear picture: quantum open source is larger, more global, and more tightly integrated with classical HPC and AI workflows than ever before, while still depending on clear documentation, mentorship, and shared public goods to keep the doors open for newcomers.

Check out the [full interactive 2026 survey results page](https://unitaryfoundation.github.io/survey-2026/) or explore the raw data and analysis scripts in our [GitHub repository](https://github.com/unitaryfoundation/qoss-survey/tree/main) (you can find all previous years’ data here too, if you’d like to fact check us!). From there, join the conversation on the [UF Discord server](https://discord.gg/2Y9z9xKKbr) or email us at info@unitary.foundation! 
