---
title: Conquest System
description: The conquest system is a new system that will be added to the game in the near future. It is designed to encourage players to fight in zones that are not currently being fought in, and to encourage players to fight in zones that are not currently being fought in.
---

A common concern with Old Frontiers is that without a goal, players often end up fighting endlessly in very few zones.

Dark Age of Camelot thrives on realm versus realm combat centered around keep warfare, relic captures, and massive player battles. However, we also respect that many players prefer conflict that breaks from this format such as 8v8, small-man, and solo. This system hopes to reinforce the major themes of realm versus realm conflict and the overall tug-of-war of the frontier, while organically creating reasons for players to visit zones they may otherwise not have, and still allowing for all play-styles to participate.

## Conquest

A conquest lasts for 1 hour and 30 minutes each before cycling to the next realm. When a conquest starts, a keep in the defending realm is chosen as the conquest objective. When a keep is chosen as a conquest objective, four flags will spawn in area surrounding the target

The following events will flag the player as a conquest participant:
- Capturing a flag
- Killing a player
- Damaging a player who dies from another target
- Healing damaged targets within the conquest zone
- Applying CC to targets within the conquest zone

Every 5 minutes, all participants are awarded RPs based on the number of flags held by their realm. Every 15 minutes, all participants will be cleared from memory. This means that a player may gain, at most, 3x RP awards for a single participation event.

## Flags

Flags may be captured by staying within a 750 unit radius of the base of the flag for a duration of 20 seconds. A capture timer may only be started if a single realm is nearby, and will be cancelled if more than one realm is within the radius.

You can find the location of flags by using the </conquest> command or the </faceflag #> command.

## Keep

Capturing the conquest objective will immediately award all attackers a sizeable amount of orbs and RPs, scaled based on the number of capture points held when the lord is killed.

## `/conquest` Command

To display information relating to this system, we have added a new command: /conquest

This command will display the following information:

![Conquest System Window](/src/assets/images/additional-features/conquest-system-1.png "Conquest System Window")


1) Information about the active conquest target, including frontier, target, current owner, and nearby players
2) Information about conquest capture points, including the current owner, nearby players, and location
3) Time remaining in the current frontier
4) Top 5 Predators for this conquest phase

## Keep Selection Criteria

If a realm controls their entire frontier, then the portal keep in zone 1 is chosen as the objective by default.

When a conquest starts:
- A target is randomly chosen from among any keeps in zone 3 are not owned by the original realm.
- If no targets have been found, a target is randomly chosen from among any keeps in zone 2 are not owned by the original realm.
- If no targets have been found, the keep in zone 1 in chosen as the target.

If a conquest objective is captured in the first half of the conquest window, the capturing realm will be tasked with defending the new keep.
If a conquest objective is captured in the second half of the conquest window, then the zones are re-assessed and a new target is chosen using the following logic:
- If all keeps of the current tier in the current frontier have been captured, the next target is chosen randomly from among the next tier.
- If any keeps of the current tier in the current frontier have not been captured, a target is randomly chosen from among them.

![Conquest System - Albion](/src/assets/images/additional-features/conquest-system-2.png "Conquest System - Albion")
![Conquest System - Midgard](/src/assets/images/additional-features/conquest-system-3.png "Conquest System - Midgard")
![Conquest System - Hibernia](/src/assets/images/additional-features/conquest-system-4.png "Conquest System - Hibernia")

