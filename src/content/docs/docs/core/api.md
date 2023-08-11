---
title: OpenDAoC APIs
description: OpenDAoC APIs documentation and reference
---

# OpenDAoC API Documentation

## Introduction

Welcome to the OpenDAoC API documentation. This API provides information about various aspects of the OpenDAoC game server, including player information, guilds, realms, keeps, relics, news, and more.

## Base URL

To enable the APIs, you will need to set the `ATLAS_API` serverproperty to `true`.  
This will enable the API server on port `:5000` at the next server reboot.

:::tip[Exposing Ports and Custom Domains]
Remember to expose port `5000` on the machine running the server.  
Additionally, you can setup a reverse proxy to point `api.your-custom-domain.com` to your API endpoint.
:::

## Endpoints

| Endpoint                              | Description                                                        | Cache         |
|---------------------------------------|--------------------------------------------------------------------|---------------|
| `/stats`                              | Returns live population statistics.                                |               |
| `/stats/rp`                           | Returns the Top 10 RP holders.                                    | 60 min        |
| `/stats/uptime`                       | Returns server uptime.                                            | 30 sec        |
| `/guild/{guildName}`                  | Returns information about a single guild.                         | 1 min         |
| `/guild/{guildName}/members`          | Returns all players in a guild.                                   | 120 min       |
| `/guild/getAll`                       | Returns all guilds.                                               | 120 min       |
| `/guild/topRP`                        | Returns Top 10 RP holders guilds.                                 | 120 min       |
| `/player/{playerName}`                | Returns information about a single player.                        | 1 min         |
| `/player/{playerName}/specs`          | Returns detailed specialization information for a player.         | 1 min         |
| `/player/{playerName}/tradeskills`    | Returns detailed tradeskill information for a player.             | 1 min         |
| `/player/getAll`                      | Returns all players active in the last 31 days.                   | 120 min       |
| `/realm/{realmName}`                  | Returns the Keep's status for a given realm.                      | 1 min         |
| `/realm/df`                           | Returns the realm currently owning Darkness Falls access.         | 1 min         |
| `/realm/bg`                           | Returns the status of battleground keeps.                         | 1 min         |
| `/relic`                              | Returns the status of all relics.                                 | 1 min         |
| `/news/all`                           | Returns the last 100 in-game server news.                         | 2 min         |
| `/news/realm/{realm}`                 | Returns the last 100 in-game server news for a given realm.       | 2 min         |
| `/news/type/{type}`                   | Returns the last 100 in-game server news for a given type.        | 2 min         |

## Schemas

### allPlayers

Information about all players active in the last 31 days.

```json
[
  {
    "name": "Player1",
    "guild": "Guild1",
    "realm": "Albion",
    "level": 50,
    "realmPoints": 12345
  },
  {
    "name": "Player2",
    "guild": "Guild2",
    "realm": "Midgard",
    "level": 48,
    "realmPoints": 67890
  }
  // ... more player entries
]

```

### allGuilds

Information about all guilds.

```json
[
  {
    "name": "Guild1",
    "realm": "Albion",
    "members": 50
  },
  {
    "name": "Guild2",
    "realm": "Midgard",
    "members": 75
  }
  // ... more guild entries
]
```

### bgkeep

Information about a battleground keep.

```json
{
  "Name": "Thidranki Faste",
  "currentRealm": "Albion",
  "underSiege": 0
}
```

### bgkeeps

Information about multiple battleground keeps.

```json
[
  {
    "Name": "Keep1",
    "currentRealm": "Albion",
    "underSiege": 1
  },
  {
    "Name": "Keep2",
    "currentRealm": "Hibernia",
    "underSiege": 0
  }
  // ... more bgkeep entries
]
```

### df

The realm currently owning Darkness Falls access.

```json
"Midgard"
```

### guild

Information about a guild.

```json
{
  "name": "Guild1",
  "realm": "Albion",
  "members": 50,
  "realmPoints": 77845992
}
```

### keep

Information about a keep.

```json
{
  "Name": "Arvakr Faste",
  "originalRealm": "Midgard",
  "currentRealm": "Albion",
  "claimingGuild": "Cotswold Clan",
  "Level": 4,
  "underSiege": 0
}
```

### news

Information about in-game server news.

```json
[
  {
    "Date": "27-05-2022 04:37 AM",
    "Type": "RvR",
    "Realm": "Albion",
    "Text": "The forces of Albion have captured Dun Crauchon!"
  },
  {
    "Date": "28-05-2022 11:15 AM",
    "Type": "PlayerRP",
    "Realm": "Hibernia",
    "Text": "Player1 achieved a realm rank of 5L1."
  }
  // ... more news entries
]
```

### newsEntry

Details about an individual news entry.

```json
{
  "Date": "27-05-2022 04:37 AM",
  "Type": "RvR",
  "Realm": "Albion",
  "Text": "The forces of Albion have captured Dun Crauchon!"
}
```

### player

Detailed information about a player.

```json
{
  "name": "Player",
  "lastname": "Lastname",
  "guild": "Atlas",
  "realm": "Hibernia",
  "realmID": 3,
  "race": "Lurikeen",
  "raceID": 12,
  "class": "Eldritch",
  "classID": 40,
  "level": 50,
  "realmPoints": 91014,
  "realmRank": "3L2",
  "killsAlbionPlayers": 198,
  "killsMidgardPlayers": 245,
  "killsHiberniaPlayers": 0,
  "killsAlbionDeathBlows": 39,
  "killsMidgardDeathBlows": 38,
  "killsHiberniaDeathBlows": 0,
  "killsAlbionSolo": 1,
  "killsMidgardSolo": 1,
  "killsHiberniaSolo": 0,
  "pvpDeaths": 549
}
```

### playerSpec

Detailed information about a player's specialization.

```json
{
  "name": "Player1",
  "level": 50,
  "realm": "Hibernia",
  "class": "Enchanter",
  "specializations": {
    "Light": 1,
    "Mana": 48,
    "Enchantments": 24
  }
}
```

### playerTradeskills

Detailed information about a player's tradeskills.

```json
{
  "tradeskills": [
    { "Tradeskill": "Weaponcraft", "Level": 1250 },
    { "Tradeskill": "Armorcraft", "Level": 1250 },
    { "Tradeskill": "Alchemy", "Level": 1250 },
    // ... more tradeskill entries
  ]
}
```

### realm

Information about keeps in a realm.


```json
[
  {
    "Name": "Keep1",
    "originalRealm": "Midgard",
    "currentRealm": "Albion",
    "claimingGuild": "Cotswold Clan",
    "Level": 4,
    "underSiege": 0
  },
  {
    "Name": "Keep2",
    "originalRealm": "Hibernia",
    "currentRealm": "Midgard",
    "claimingGuild": "Thidranki Tribe",
    "Level": 3,
    "underSiege": 1
  }
  // ... more keep entries
]
```

### relic

Information about a relic.

```json
{
  "Name": "Scabbard of Excalibur",
  "Type": "Strength",
  "originalRealm": "Albion",
  "currentRealm": "Midgard"
}
```

### serverUptime

Information about server uptime.


```json
{
  "seconds": 45,
  "minutes": 32,
  "hours": 13,
  "days": 4,
  "uptime": "4d 13h 32m 45s"
}
```

### stats

Population statistics for different realms.

```json
{
  "Albion": 159,
  "Midgard": 156,
  "Hibernia": 163,
  "Total": 478,
  "Timestamp": "08-12-2021 11:18 AM"
}
```

## Notes

- Enums are used to represent specific values for certain properties.
- Cache durations are provided for each endpoint.

