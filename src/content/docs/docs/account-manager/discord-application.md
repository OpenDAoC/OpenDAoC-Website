---
title: Discord OAuth - Account Manager
description: Instructions for creating a Discord application for use with OpenDAoC's Account Manager.
---

Creating a Discord application for use with OpenDAoC's Account Manager is a simple process that can be completed in a few minutes.

## Creating a Discord application

1. Go to the [Discord Developer Portal][1]

![Discord Developer Portal](/src/assets/images/account-manager/oauth-1.png "Discord Developer Portal")

2. Click on the **New Application** button in the top right corner and enter a name for your application.

![New Application](/src/assets/images/account-manager/oauth-2.png "New Application")

3. Go to the **OAuth2** tab and add a redirect URL.  

:::tip[Redirect URL]
This should be the URL of your site with `/api/auth/callback/discord` appended to it.   
e.g. `https://account.opendaoc.com/api/auth/callback/discord`.
:::

You can also add a localhost redirect URL for testing purposes.

![Redirect URL](/src/assets/images/account-manager/oauth-3.png "Redirect URL")

4. Copy the **Client ID** and **Client Secret** values and save them for later.

![Client ID and Secret](/src/assets/images/account-manager/oauth-4.png "Client ID and Secret")

:::caution[Client Secret]
Once you leave the page, you will not be able to retrieve the Client Secret again so make sure to save it somewhere safe.
:::

We will be using these values to configure the Account Manager in the next steps.

[1]: https://discord.com/developers/applications