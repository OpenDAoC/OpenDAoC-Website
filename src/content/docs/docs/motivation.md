---
title: Motivation
description: Why OpenDAoC?
---

As we have finished transitioning from Atlas to OpenDAoC, we wanted to take a moment to explain our motivations for this project and what we hope to achieve.

## Atlas

When we started this project, we wanted to create a server that would be able to support the DAoC freeshard ecosystem for years to come, starting with a 1.65 baseline. Atlas was the effect of love for the game and a desire to see it continue to thrive.

We started working off the [Dawn of Light][1] package - a great piece of software that bootstrapped our journey but almost immediately showed its limitations in supporting more than a few handfuls of players.

Working off that codebase, we've spent the past year refactoring the core pieces: introducing the game loop, reworking event driven systems to instead use entity/component architecture, removing the 'good enough' combat formulas and ensuring parity with accepted data, and filling an entire game world with NPCs for our players to enjoy.

We strive to provide a stable, performant, and accurate server that can support thousands of players, and we have spent collectively thousands of hours working towards that goal, either developing or finding sources of truth for the data we need.

As mentioned, our goal was to provide a platform to support the DAoC freeshard ecosystem's longevity moving forward.

While Atlas might not have been the server for everyone, we hope that it can be a platform for others to build upon and extend.

To that end, we have open sourced what we like to call the 'Classic Module' for Atlas under the name OpenDAoC.

## OpenDAoC

Unlike Atlas, OpenDAoC is not a server. It is a platform for others to build upon and extend.  
The server formerly known as Atlas has become a showcase for what can be done with OpenDAoC.

Under the OpenDAoC umbrella, we will be providing the tools and documentation necessary for others to create their own servers.

Specifically, we have open sourced the following:

- The *Classic* Module
- The *PvP* Module
- The database
- The launcher
- The queue service


A large portion of our development time went into validating and verifying the changes we were making were accurate for the patch level.  

With these tools and the documentation we provide, we hope to make it easier for others to create their own servers and to contribute back to the community.

[1]: https://github.com/Dawn-of-Light