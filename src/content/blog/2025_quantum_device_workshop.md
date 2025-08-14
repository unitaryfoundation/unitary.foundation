---
title: Inaugural Quantum Device Workshop!
author: Quantum Computing Student Association
day: 11
month: 8
year: 2025
tags: 
  - open-source
  - community
  - education
  - open hardware
  - research
---

This year, the [Quantum Computing Student Association at UCLA](https://uclaqcsa.squarespace.com/) hosted the inaugural [Quantum Device Workshop](https://qdw-ucla.squarespace.com/)! The workshop aimed to teach quantum device design to beginners and provide an environment for the exchange of knowledge between experts in the field. We hosted a beginner and an advanced track for the workshop and more than 400 people were present at the event, with over 100 people in-person and over 300 people online. Indeed, it was a packed house!

  ![](/images/Group_Photo.jpg)
  **<p style="text-align:center;">Quantum Device Workshop Group Photo!</p>**
 

So what exactly occured at this workshop? Call us DJ Enzyme cuz we will be breaking it down day by day. 

## Day 1 
The first day started off with attendees checking in and grabbing breakfast, followed by Professor Eli Levenson-Falk giving an overview and goals of the workshop. After that, the workshop was split into the two separate tracks, beginner and advanced. For the beginner track, Zlatko Minev from Google taught a two hour workshop on circuit quantum electrodynamics (cQED) and the basic principles behind designing a transmon qubit coupled to a resonator. After Zlatko's workshop, the beginner track had lunch. After lunch, Professor Devoret discussed how a superconducting qubit compares to atom based qubits. This was followed by a talk by Daniel Sank from Google who discussed how to do readout of a superconducting qubit. To cap off the day for the beginners, Professor Andreas Wallraff talked about the physics on how to couple two qubits for the purpose of preforming two qubit gates. 

- Highlight: Professor Eli Levenson-Falk gave the opening talk to a packed house.


For the advanced track, Daniel Sank talked about how to optimize the design of readout resonators for superconducting qubits, issues with scaling up dispersive readout, and designing alternatives for dispersive readout that could be more scalable. This was followed by a workshop session by Ofer Naaman from Google on how to use Keysight ADS to design a Snake Parametric Amplifier. After Ofer's workshop, the advanced track had lunch. After lunch, we resumed with Professor Andreas Wallraff's talk about how to implement a surface code on superconducting quantum devices. During the talk, he also showed a image of a GDS file of chip designed for surface codes and allowed the participants to ask questions about the different circuit elements on the chip, which was very useful for the audience as these images are rarely shared in actual publications. After this, Professor Devoret taught the advanced track participants about constructing Hamiltonians and Lagrangians from a circuit diagram following a second quantization framework. To cap off the day for the advanced track, Zlatko Minev did a deep dive into the backend behind PyEPR and Qiskit Metal and discussed a little bit on optimal meshing conditions for electromagnetic simulation of superconducting qubit devices. 

   ![](/images/Adv_Day1.jpg)
   **<p style="text-align:center;">Quantum Device Workshop Organizer Cody Fan helps Professor Devoret do a quick A/V check before his advanced track talk.</p>**

After concluding the first day of workshop sessions and talks, many attendees went out to Santa Monica Brew Works for a Los Angeles Quantum Beers social with representatives from many companies present, such as HRL, Google Quantum AI, AWS Quantum, Phasecraft, and etc.

## Day 2 
On Tuesday, the beginner track kicked things off with a 3-part workshop from David and Lukas Pahl (who we affectionately refer to as the Pahl brothers) from MIT who discussed the ABCD matrix formalism for designing quantum circuits. This was followed by lunch, after which Professor Jens Koch taught the beginners track participants how to use the open source SCqubits package, which models cQED systems and superconducting quantum devices. To cap off the day for the beginners track, Murat can Sarihan from Google led a two hour workshop on electromagnetic simulation, EPR, and LOM analysis of superconducting devices. 

For the advanced track, Professor Jens Koch kicked the day off with an advanced tutorial of modeling cQED systems with the open source scQubits and qFit packages. Then Professor Eli Levenson-Falk discussed how to optimally teach design to students in a way that is scalable. Then the advanced track took a break for lunch. After lunch, Sadman Ahmed Shanto (whom we typically just refer to as Shanto) from USC led a workshop on advanced features and the backend of the open source SQuAADS package, which uses machine learning to generate a GDS file or chip design from a given cQED Hamiltonian. This was followed by a breakout session on formalizing cQED and quantum device design education, namely how do we make an interactive textbook and set aside dedicated lab equipment for an open source educational ecosystem for cQED and superconducting qubits. 

During lunch, we also hosted an industry networking session where companies like Keysight, Zurich Instruments, and Quantum Machines had table top demos or brochures about their microwave control system interfaces and design tools for quantum computers that attendees could walk around and see. This same session was hosted during lunch on day 3 as well. 

*Highlights:*
- Mani Peroomal and Gabe Lenetsky from Keysight explained their microwave control system and design tools to attendees.
- Taekwan Yoon from Zurich Instruments explained their microwave control system and design tools to attendees.

## Day 3 
On Wednesday, the beginner track kicked things off with a tutorial from Shanto about how to use SQuAADs to generate circuit layouts and best practices for accurate electromagnetic simulation of quantum devices such as best practices for meshing, convergence criteria, and DRC rules. This was followed by a talk by Professor Hakan Tureci on his open source package, DEC-QED that can take into account flux quantization, kinetic inductance, and penetration depth. After that, the beginner session took a break for lunch. After lunch, Loren Alegria from Lawrence Livermore National Laboratory gave a talk about designing superconducting qubits with material science considerations and using large language models to design qubits. Finally, the day was capped off with Ben Jarvis-Frain from Rigetti Computing who gave a talk on designing large-scale quantum devices and accounting for cross talk, flip chip architectures, and other 3D architectures. 

The advanced track started things off with Arpit Arora from UCLA who gave a talk on designing superconducting diodes and nonreciprocal quantum circuits. This was followed by a workshop on running microwave simulations on a large scale quantum device in a scalable way and how to simulate 3D and flip chip integrated quantum circuits. After this, the advanced track had lunch. After lunch, Dung Pham from Princeton gave a talk about DEC-QEC and modeling open quantum systems and nonlinear phenomena in superconducting circuits. The last talk of the day was given by the Pahl brothers who discussed quantum device architecture for qLDPC codes in superconducting qubits. Finally the day was ended with a breakout session where the advanced track participants discussed open source design software maintenance and feature additions. During this time, a group dedicated to software maintenance was also formed. The discord link to join this group is [here](https://discord.gg/9yYmbDPH)

   ![](/images/Adv_Day3.jpg)
   **<p style="text-align:center;">Lukas Pahl from MIT gives a talk on designing superconducting devices for quantum low density parity check codes.</p>**

## Day 4 
For day 4, the beginner and advanced track was combined. To kick things off, Jin Sung Kim from Nvidia gave a workshop on how to use CUDA-Q for fast quantum simulations of the Jaynes-Cummings Hamiltonian and the Landau-Zener effect. After this, the participants had lunch. The day and the workshop was capped off by the panel event and reception, where Andrew Bestwick (senior VP of quantum systems at Rigetti Computing), Professors Andreas Wallraff, Michel Devoret, Eli Levenson-Falk, and Jens Koch discussed the future of designing quantum devices and scaling up superconducting qubits. This panel was moderated by Zlatko Minev. 

*Highlights:*
- Quantum Computing Student Association President Alex Jurgens gave opening remarks before the panel and reception.
- Quantum Device Workshop Organizer Nicolas Dirnegger introduces the panelists to the audience before the panel.

## What we learned 📚

There is a lot that we learned by attending and moderating the talks, but we also learned quite a bit by organizing this workshop. We list this below.

- **Venue** -- In order to plan a successful event, the venue date should be booked immediately after drafting the white paper, and scouting out potential venues should be done in parallel to inquiring about speaker availability and getting sponsors. We did this after confirming an optimal date for all of our speakers and had some trouble getting a venue large enough for the amount of interest the event was getting. Additionally, there were complaints about the room being a little hot. 

- **Prepare for more participants** -- Signups piled in at an exponentially increasing rate and we had to start turning away people from signing up online. However, at one point we even had to turn people away from signing up online because our zoom webinar could have overflowed! 

- **Find space for food and outlets** -- Events that require laptop usage require there be enough outlets. The outlets also need to be placed at optimal locations for access. For instance, it is not good to bunch up a bunch of outlets or else the area around the outlets will get crowded. Additionally, the food should be placed in an accessible location close to the talks and workshops but not in the same room, as the caterer setting up the food could disrupt the flow of the talk or be distracting to the audience. 

- **Software Packages** -- There were a good amount of complaints about the software packages for the workshop being difficult to download or having compatibility issues between packages. 

- **A/V Issues** -- There are always a few last second A/V issues that pop up, but to avoid this, a practice talk can be tried out by the organizers beforehand to test the equipment more thoroughly. 

- **Pacing and Questions** -- It is difficult to deem how much time for questions is available especially for hybrid events. More time should be allocated to ask the speaker how they prefer to take questions and how they want the talk to be moderated. 

- **Money needs a landing spot** -- Luckily, we caught this in time, but any sponsorship money needs a bank account to be allocated to. This requires an EIN to open for student organizations and is usually available at every major university. 

- **Legal and 501(c)3** -- Filing for 501(c)3 is no easy endeavor. It requires a $600 incorporation fee and requires you to fill out a state and a federal form. The state form costs 30 dollars to fill out, and the federal form costs 600 dollars to fill out. Additionally, for large scale events, a terms and conditions, code of conduct, and recording and photography consent forms must be sent out and agreed to. 

- **Handling sign-ups past registration deadline** -- Technically this is doable, but comes with additional logistical challenges. It is likely we won't be accommodating post registration deadline signups in the future due to the significant logistical challenges associated with this as there are already going to be last second logistical challenges in setting up the venue and triple checking the A/V.

## What we'll do differently next time 🐞
There are a few improvements that we want to make to the workshop so that it is an even better experience for the participants!

- **Venue** -- Book the venue earlier. This way there won't be any challenges associated with this. Additionally, we plan to host a larger venue that could accommodate 300-500 attendees in person since we realized that this is a topic that very many people are interested in. Also the venue will have more space for the industry networking event for people to walk around and we can set up more booths! 

- **Dedicated Package for QDW** -- To avoid conflicts between packages or installation bugs, we plan to have a dedicated package to QDW that has all of the modules for the workshops coded into the package. This way there shouldn't be any bugs with installation and it would be easier to debug since the organizers will have full control over the package and its dependencies/version control. 

- **More breakout sessions** -- It would have been nice to have breakout sessions dedicated to different topics relevant to cQED or quantum device design. Also, it would have been nice to have breakouts for mentorship, or to make beginning grad students or undergrads feel more comfortable in this space. 

- **Poster Sessions** -- It would be cool for some of the participants to showcase some of their work as well. Many experts also attended the advanced track to learn more. 

- **Better food** -- We want to try to cater through Mendocino Farms or Fresh Corn Grill, since their food is quite good compared to what ASUCLA catering could offer. 

- **Finish 501(c)3 incorporation** -- Currently we are working with a law firm to make Quantum Computing Student Association into a proper 501(c)3, and have many branches at various universities. 

- **More Organizers** -- Organizing an event of this scale is a lot of work, and having more help is always appreciated! 

- **Some Tourism** -- It would have been nice to have some event dedicated to splitting up into groups for a social activity in LA, such as hiking, clubbing, or going to an LA landmark. This way there the participants can get to know each other better and potentially have avenues to begin new collaborations. 

- **More coordination between speakers** -- While we made an effort to coordinate the talks so that each one would build upon the last, there were definitely some improvements we can make for next year. 

- **New lineup of speakers and more diversity** -- We plan to get some familiar faces for speakers, and some new speakers with additional emphasis on getting a more diverse range of speakers while keeping our focus on open source quantum device design and cQED. 

- **More accessibility** -- We plan on having closed captioning live with the event livestream and not purely in the recording alone. 

## What went well 🎯

- **A/V** -- All of the A/V issues were solved relatively quickly!

- **Attendance** -- Over 90% of the attendees who signed up in person showed up to the event! Also we had a full house on Day 1 with a small decrease on the rest of the days, but this is to be expected with recordings being available online for the participants.  

- **No cancellation** -- All of the speakers who agreed to speak showed up and didn't cancel!

- **Overall content** -- People were very pleased about the way the content was presented and everyone seemed to learn something new! 

- **Advertisements** -- Advertising at APS March Meeting and LinkedIn worked so well that we spent a total of zero dollars on advertisement. We hope this will be the case in the future as well so more funding can be used for scholarships for attendees and getting more speakers and better food/venues! 

## Quantum-specific considerations 🧩

- **Material Science Considerations** -- Some people wanted a few more talks or workshops on material science considerations in quantum device design. However, this is a difficult balance. While experimentalists love thinking about material science, the theorists care a bit less about it. 

- **Content and Switching Tracks** -- I think we allowed people to switch between tracks even if we encouraged people to just stick to one. During the workshop we encouraged people who thought the advanced track talks and workshops were too hard to switch to the beginner track. I think next year we need to have a syllabus with pre-requisites for each track. 

- **Hybrid Quantum Devices** -- Potential talk on cQED for coupling hybrid quantum devices. There is an increasing interest in other quantum hardware communities in using superconductors to couple devices together. 

- **More qubit types** -- Some people wanted to learn more about Fluxonium or Bosonic qubits. There is indeed a very pedagogical way to include this into the workshop. For Fluxonium, we can extend Michel Devoret's talk to talk more about flux versus charge coupling and control in cQED and build from talks about phase and flux qubits versus charge qubits and tunable transmons. In addition, designing Josephson Junction arrays in a way that avoids fabrication defects could be interesting to talk about. For Bosonic qubits, talking about how to design high Q resonators or cavities versus the design of low Q readout resonators could be an interesting topic and would allow us to introduce important considerations such as internal and external Q. 

- **More on Amplifiers and other circuit components** -- Purcell filters (and Purcell filter-like components) and amplifiers are becoming an increasingly important part of scaling superconducting qubit systems and we maybe could spend more time talking about them. Many parametric amplifiers are useful for coupling between bosonic qubits (eg. SNAILs and 3 wave mixing), nonlinear effects, or squeezing experiments. 


## Final Thoughts 💭

Overall, it was a successful event, and we will do it again next year! We were excited to see all the enthusiasm from the community towards designing scalable quantum devices and hope people continue to be very enthusiastic to design more devices and learn more. We also hope that this workshop will bring more people to help maintain open source quantum hardware design tools and create more accessible educational content! The Quantum Computing Student Association, the event sponsors, speakers, and advisory board worked hard to make this event possible and we thank everyone involved to make this event amazing. Please join the [Discord](https://discord.gg/9yYmbDPH) for open source quantum hardware design tools and accessible quantum hardware education if you haven't already. We have already started to organize next year's iteration for the quantum device workshop, and the link to pre-register is [here](https://qdw-ucla.squarespace.com/qdw2026)!
      
![](/images/Finale.jpg)
**<p style="text-align:center;">From all of the sponsors, speakers, and organizers, we wish you long coherence times and fast two qubit gate times in your designs! See you next year!!</p>**

