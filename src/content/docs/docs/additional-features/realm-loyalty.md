---
title: Realm Loyalty
description: Realm loyalty is an important aspect of Dark Age of Camelot as it helps foster community and ultimately forms the backbone of RvR. To encourage that, we're implementing a realm loyalty bonus that extends from XP to currencies.
---

Realm loyalty is an important aspect of Dark Age of Camelot as it helps foster community and ultimately forms the backbone of RvR. To encourage that, we're implementing a realm loyalty bonus that extends from XP to currencies.

## Starting the Loyalty Timer

Upon killing anything in a realm, this starts a "loyalty" timer for that Account (and realm)--if a loyalty timer does not already exist.

Loyalty timers only reset under the following conditions:
- If a player logs in on a different realm and engages in RvR, the timer progress for the previous realm is immediately reset to 0 and a new timer beings for the current realm.
- If a player logs in on a different realm and engages in PvE, the timer's progress for the previous realm is maintained, but decays at 2x the rate loyalty would normally build for a non-loyal realm.

:::caution[Realm Loyalty and Battlegrounds]
Participating in Battlegrounds constitutes a PvE "activity." This means that loyalty progress will not reset completely when playing in Battlegrounds on other realms. Instead, the standard 2x decay rate for PvE will apply.
:::

## Building Loyalty

Loyalty rewards are built up over the course of 30 days, raising in 24-hour increments while a player remains loyal to one realm.

:::caution
The 24-hour timer is based on a standard calendar day, not actual play time.
:::

The maximum allowable loyalty bonus applied is based on a player's current progress toward the 30-day cap. For example:
- **Day 1**: 1/30th of the loyalty benefit (3.33 %)
- **Day 10**: 10/30th (30%)
- **Day 15**: 15/30th (50%)
- **Day 25**: 25/30th (83.33%)
- **Day 30**: 30/30th (100%)


The loyalty bonus effectively rewards players that play for a specific realm over a prolonged period of time, with bonuses increasing over the course of 30 days. Players may still freely change realms as they desire, but at the expense of any realm bonuses built up.

In a way, this is a "timed nerf" intended to slightly discourage realm-hopping, while incentivizing sticking with a realm through its high and low points.

The player's current loyalty levels can be checked using the command `/loyalty`

## Realm Loyalty Rewards

The longer a player dedicates toward the success of their realm, the more rewards they stand to earn as a result. There exists two categories of reward as part of realm loyalty:
- Scaling rewards
- Static rewards
 
Scaling rewards provide a dynamic benefit based on a player's built-up of loyalty days for a specific realm. As your loyalty increases (i.e., more days spent logged in on only one realm), so too will the value of any scaled rewards. Static rewards are granted upon achieving loyalty milestones, and will remain available as long as a player's loyalty days stay above the required value associated with the reward.

### Scaling Rewards
Below are all the maximum rewards available with realm loyalty upon hitting the 30-day loyalty bonus cap:
- +25% XP from all sources
- +20% Atlas Orbs from all sources
- 30-second reduction in XP Item global cooldown timer
- 50% out-of-class ROG chance (detailed below)
- Up to 20% bonus chance to get orbs when killing some epic creatures