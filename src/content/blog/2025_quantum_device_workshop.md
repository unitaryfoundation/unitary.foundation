---
title: Inaugural Quantum Device Workshop!
author: Quantum Computing Student Association
day: 15
month: 8
year: 2025
tags: 
  - open-source
  - community
  - education
  - open hardware
  - Guest Post
---

<em> This is a guest post by the Quantum Computing Student Association at UCLA. Unitary Foundation is proud to have been a sponsor of the event.

</em>

The [Quantum Computing Student Association](https://www.qcsa-ucla.org/) ignited the community this year with the launch of its first-ever [Quantum Device Workshop](https://qdw-ucla.squarespace.com/)—a four-day celebration of innovation, hands-on learning, and cutting-edge quantum hardware design. Drawing a vibrant mix of students, researchers, and industry professionals from around the world, the workshop delivered high-impact lectures, immersive technical sessions, and dynamic networking opportunities that showcased the rapidly growing excitement around open-source quantum engineering.

![](/images/Group_Photo.jpg)  
**<p style="text-align:center;">Quantum Device Workshop Group Photo!</p>**

So what exactly occured at this workshop? We will break down what occured day by day. 

---

## Day 1

The first day started off with attendees checking in and grabbing breakfast, followed by Professor Eli Levenson-Falk giving an overview and goals of the workshop. After that, the workshop was split into the two separate tracks, beginner and advanced. For the beginner track, Zlatko Minev from Google taught a two hour workshop on circuit quantum electrodynamics (cQED) and the basic principles behind designing a transmon qubit coupled to a resonator. After Zlatko's workshop, the beginner track had lunch. After lunch, Professor Devoret discussed how a superconducting qubit compares to atom based qubits. This was followed by a talk by Daniel Sank from Google who discussed how to do readout of a superconducting qubit. To cap off the day for the beginners, Professor Andreas Wallraff talked about the physics on how to couple two qubits for the purpose of preforming two qubit gates. 

![](/images/Beg_Day1.jpg)  
**<p style="text-align:center;">Professor Eli Levenson-Falk giving the opening talk to a packed house!</p>**

For the advanced track, Daniel Sank talked about how to optimize the design of readout resonators for superconducting qubits, issues with scaling up dispersive readout, and designing alternatives for dispersive readout that could be more scalable. This was followed by a workshop session by Ofer Naaman from Google on how to use Keysight ADS to design a Snake Parametric Amplifier. After Ofer's workshop, the advanced track had lunch. After lunch, we resumed with Professor Andreas Wallraff's talk about how to implement a surface code on superconducting quantum devices. During the talk, he also showed a image of a GDS file of chip designed for surface codes and allowed the participants to ask questions about the different circuit elements on the chip, which was very useful for the audience as these images are rarely shared in actual publications. After this, Professor Devoret taught the advanced track participants about constructing Hamiltonians and Lagrangians from a circuit diagram following a second quantization framework. To cap off the day for the advanced track, Zlatko Minev did a deep dive into the backend behind PyEPR and Qiskit Metal and discussed a little bit on optimal meshing conditions for electromagnetic simulation of superconducting qubit devices. 

![](/images/Adv_Day1.jpg)  
**<p style="text-align:center;">Quantum Device Workshop Organizer Cody Fan helps Professor Devoret do a quick A/V check before his advanced track talk.</p>**

After concluding the first day of workshop sessions and talks, many attendees went out to Santa Monica Brew Works for a Los Angeles Quantum Beers social with representatives from many companies present, such as HRL, Google Quantum AI, AWS Quantum, Phasecraft, and etc.

![](/images/Quantum_Beers.jpg)  
**<p style="text-align:center;">Zlatko Minev takes a selfie during a busy Quantum Beers social!</p>**

---

## Day 2

On Tuesday, the beginner track kicked things off with a 3-part workshop from David and Lukas Pahl (who we affectionately refer to as the Pahl brothers) from MIT who discussed the ABCD matrix formalism for designing quantum circuits. This was followed by lunch, after which Professor Jens Koch taught the beginners track participants how to use the open source SCqubits package, which models cQED systems and superconducting quantum devices. To cap off the day for the beginners track, Murat can Sarihan from Google led a two hour workshop on electromagnetic simulation, EPR, and LOM analysis of superconducting devices. 

For the advanced track, Professor Jens Koch kicked the day off with an advanced tutorial of modeling cQED systems with the open source scQubits and qFit packages. Then Professor Eli Levenson-Falk discussed how to optmially teach design to students in a way that is scalable. Then the advanced track took a break for lunch. After lunch, Sadman Ahmed Shanto (whom we typically just refer to as Shanto) from USC led a workshop on advanced features and the backend of the open source SQuAADS package, which uses machine learning to generate a GDS file or chip design from a given cQED Hamiltonian. This was followed by a breakout session on formalizing cQED and quantum device design education, namely how do we make an interactive textbook and set aside dedicated lab equipment for an open source educational ecosystem for cQED and superconducting qubits. 

During lunch, we also hosted an industry networking session where companies like Keysight, Zurich Instruments, and Quantum Machines had table top demos or brochures about their microwave control system interfaces and design tools for quantum computers that attendees could walk around and see. This same session was hosted during lunch on day 3 as well. 

---

## Day 3

On Wednesday, the beginner track kicked things off with a tutorial from Shanto about how to use SQuAADs to generate circuit layouts and best practices for accurate electromagnetic simulation of quantum devices such as best practices for meshing, convergence criteria, and DRC rules. This was followed by a talk by Professor Hakan Tureci on his open source package, DEC-QED that can take into account flux quantization, kinetic inductance, and penetration depth. After that, the beginner session took a break for lunch. After lunch, Loren Alegria from Lawrence Livermore National Laboratory gave a talk about designing superconducting qubits with material science considerations and using large language models to design qubits. Finally, the day was capped off with Ben Jarvis-Frain from Rigetti Computing who gave a talk on designing large-scale quantum devices and accounting for cross talk, flip chip architectures, and other 3D architectures. 

The advanced track started things off with Arpit Arora from UCLA who gave a talk on designing superconducting diodes and nonreciprocal quantum circuits. This was followed by a workshop on running microwave simulations on a large scale quantum device in a scalable way and how to simulate 3D and flip chip integrated quantum circuits. After this, the advanced track had lunch. After lunch, Dung Pham from Princeton gave a talk about DEC-QEC and modeling open quantum systems and nonlinear phenomena in superconducting circuits. The last talk of the day was given by the Pahl brothers who discussed quantum device architecture for qLDPC codes in superconducting qubits. Finally the day was ended with a breakout session where the advanced track participants discussed open source design software maintnence and feature additions. During this time, a group dedicated to software maintnence was also formed. The discord link to join this group is [here](https://discord.gg/swHQTSgXrs)

![](/images/Adv_Day3.jpg)  
**<p style="text-align:center;">Lukas Pahl from MIT gives a talk on designing superconducting devices for quantum low density parity check codes.</p>**

---

## Day 4

For day 4, the beginner and advanced track was combined. To kick things off, Jin Sung Kim from Nvidia gave a workshop on how to use CUDA-Q for fast quantum simulations of the Jaynes-Cummings Hamiltonian and the Landau-Zener effect. After this, the participants had lunch. The day and the workshop was capped off by the panel event and reception, where Andrew Bestwick (senior VP of quantum systems at Rigetti Computing), Professors Andreas Wallraff, Michel Devoret, Eli Levenson-Falk, and Jens Koch discussed the future of designing quantum devices and scaling up superconducting qubits. This panel was moderated by Zlatko Minev. 

![](/images/Panel3.jpg)  
**<p style="text-align:center;">All smiles among the panelists as they dive into the future of  quantum device design!</p>**

---

## Post-Event Summary

The inaugural Quantum Device Workshop successfully brought together a global community eager to learn, collaborate, and contribute to the future of quantum hardware design. Across both tracks, participants gained hands-on experience with leading simulation tools, explored emerging research directions, and engaged directly with experts advancing the state of the art.

### Highlights

- Exceptional turnout from academic, industry, and student communities  
- High engagement across both technical tracks, from foundational cQED concepts to advanced architectures  
- Interactive breakout sessions supporting open-source development and education  
- Networking opportunities that sparked new collaborations and community connections  

---

## Looking Ahead

Building on the momentum of this year’s program, the organizing team plans to expand session offerings, strengthen accessibility, introduce additional mentorship opportunities, and continue broadening the workshop’s reach. Planning for next year is already underway, with the vision of welcoming an even more diverse and enthusiastic quantum hardware community.

---

## Join the Community

To stay involved with open-source quantum device design tools and receive updates on future workshops, we welcome you to join the [Community Discord](https://discord.gg/swHQTSgXrs) and pre-register for next year’s event. For more events hosted by the Quantum Computing Student Association, feel free to join the [QCSA Discord](https://discord.gg/Uv9RbsBYW6).

![](/images/Finale.jpg)  
**<p style="text-align:center;">From all of the sponsors, speakers, and organizers, we wish you long coherence times and fast two qubit gate times in your designs! See you next year!!</p>**


