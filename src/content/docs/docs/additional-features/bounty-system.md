---
title: Bounty System
description: The Bounty System's goal is to dynamically draw attention where there's potential for a fight, allowing players to post a bounty with a reward on the enemy's head.
---

Have you ever been ganked while exping and wished you could post a Bounty on the enemy?
The Bounty System's goal is to dynamically draw attention where there's potential for a fight, allowing players to post a bounty with a reward on the enemy's head!

## The Bounty Hunt

When a player below level 35 is killed by any enemy to which they con grey, they can post a Realm Bounty with attached a gold reward to be claimed by the killer player(s) .

The ganked player can use `/bounty add <amount>` to post a bounty which will automatically select the ganker player and share their latest known location in the bounty poster.

The bounty has a **minimum reward of 50g** and a **maximum reward of 1p**.
This reward is paid by the ganked player posting the bounty, and is held in escrow by their Realm while the bounty is active.

For this service, the Realm takes a 10% cut out of this reward in gold when paid to the player(s) that killed the bounty target.

Additionally, the bounty target killer(s) reward include some Realm Loyalty.
This RL bonus is calculated on the total gold reward of the bounty, where the maximum gold reward for a bounty of 1000g equals to ~24h.

This means that a bounty can go from a minimum of 50g (Reward: 45g and ~1h of RL) to a maximum of 1p (Reward: 900g and 24h of RL).

If the target player is killed by multiple bounty hunters, the gold pot will be split equally with all attackers while the RL bonus is calculated on the total pot and applied fully to every player rewarded.

The original bounty poster (or ganked player), is not eligible to receive any reward for their target killing.

The ganker player is not hopeless in this system as there is a reward for risk-takers: for every yellow con player they kill while having a bounty on their head, 10% of the gold reward is stolen from the bounty and awarded.
If the updated bounty pot becomes less than the minimum bounty reward, the bounty automatically expires.

Once the bounty is posted, a message is propagated throughout the ganked player Realm as a call to arms!

All players can use `/bounty list` to show the bounties currently active and to check if they have any bounty on their head.

## System Rules

- You need to have at least 3 days of Realm Loyalty on the current Realm to call for a bounty
- You need to have at least 3 days of Realm Loyalty on the current Realm to be eligible to collect a bounty reward
- Min/max reward: 50/1000g
  - This money is withdrawn when posted and reimbursed (minus the tax) if the bounty expires
- There is a Realm Tax of 10%
  - If the player calling the Bounty is max RL, the RT is 0%.
  - If the player receiving a Bounty reward is max RL, the RT is 0%
- The bounty cannot be called arbitrarily on any player but will pick automatically the last player killer
- A player can only call one bounty at the time but can increase the amount on their existing bounties
- A player can have multiple bounties per Realm on his head at the time (one for each grey player they killed)
- A bounty expires automatically after 30mins
  - The bounty amount, minus the realm tax, is returned to the player that called the bounty
- If the Bounty target kills any yellow con players while hunted, the reward on their bounty will diminish by 10% for each kills until the reward becomes < minReward and hence consumes the bounty

## Commands

- `/bounty add <amount>`
  Usable by players < level 35 which have been killed by a purple con player
- `/bounty list`
  Shows the window with the currently active bounties in the Realm
  
  ![Active Bounties](/src/assets/images/additional-features/bounty-system-1.png "Active Bounties")
  ![Bounty Warning](/src/assets/images/additional-features/bounty-system-2.png "Bounty Warning")
  
## Examples
  
#### Example 1:

Clait, Druid level 34, gets killed in Darkness Falls by Fen, Skald level 50.
- Clait uses /bounty add 500
- A message is propagated throughout Hibernia: "Clait called for Fen's head in Darkness Falls, reward 500 gold"
- Drmed, Eldritch level 50, trips on a couple of spells and by chance kills Fen and is awarded 450g and ~12h of RL


#### Example 2:

Clait, Druid level 34, gets killed in Darkness Falls by Fen, Skald level 50.
- Clait uses /bounty add 500
- A message is propagated throughout Hibernia: "Clait called for Fen's head in Darkness Falls, reward 500 gold"
- Drmed, Eldritch level 50, and Kelteen, Bard level 50, join the fight together to kill Fen and each is awarded 225g and ~12h of RL


#### Example 3:

Clait, Druid level 34, gets killed in Darkness Falls by Fen, Skald level 50.
- Clait uses /bounty add 500
- A message is propagated throughout Hibernia: "Clait called for Fen's head in Darkness Falls, reward 500 gold"
- Fen's super skilled, kills the first player that comes to Clait's aid: Drmed, Eldritch Level 50.
- Fen is rewarded 50g and the Bounty total pot decreases to 450g
- Leftygamer, Hero level 50, kills Fen and is awarded 405g and ~11h of RL