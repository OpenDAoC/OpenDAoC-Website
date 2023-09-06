---
title: Manual Setup - Account Manager
description: Instructions for getting started with OpenDAoC Account Manager without using Docker.
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

The easiest way to get started is to use the Docker container as described in the [Docker Setup][1] guide, but this guide will also cover how to get started without using Docker.

## Prerequisites

### Discord Application

The Account Manager requires a Discord application to be created to allow users to authenticate with Discord.  
If you haven't already, please see the [Discord Application][2] page for instructions on how to create one.

### Server Database Access

The Account Manager requires access to the server's MySQL database to access the account data.  
Make sure to adjust your system configuration to allow the Account Manager to connect to the server's from wherever you will be running the Account Manager.

:::tip[Database Access]
It is recommended to create a new user with limited access to the database for the Account Manager to use.
:::

### Node.js

The Account Manager is built using Next.js and as such requires Node.js to be installed.  
You will also need to reverse proxy port `3000` with your web server of choice.

## Manual Setup

### Getting the Latest Release

Getting the latest release is as easy as extracting the contents of the [release archive][3] or clone the [repository][4] to a directory of your choice.

### Configuring the Account Manager

The Account Manager is configured using environment variables.  
Replace the content of `.env.production` with the content of `.env.example` and set the values to match your server and Discord application.

```yml
SERVER_NAME=OpenDAoC
SITE_TITLE=OpenDAoC | Account Manager
SITE_DESCRIPTION=OpenDAoC Account Manager allows you to link your OpenDAoC account to your Discord for easy password recovery.
SITE_FOOTER=OpenDAoC Account Manager
LOGO_PATH=/logo.svg
THEME_FOREGROUND=0, 0, 0
THEME_BACKGROUND_LIGHT=8, 38, 80
THEME_BACKGROUND_DARK=2, 7, 19
TOAST_DURATION=8
DATABASE_HOST=your_database_host
DATABASE_USER=your_database_user
DATABASE_PASSWORD=your_database_password
DATABASE_NAME=your_database_name
MIN_PASSWORD_LENGTH=6
MAX_PASSWORD_LENGTH=12
DISCORD_CLIENT_ID=your_discord_client_id
DISCORD_CLIENT_SECRET=your_discord_client_secret
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=change-me-please-123456789012
```

#### Personalization
We have an extensive list of environment variables that can be used to personalize the Account Manager, please see the [Personalization][4] page for more information.


### Building the Account Manager

First, install the required dependencies using `npm`.

```bash
npm install
```

Then, build the Account Manager using `npm`.

```bash
npm run build
```

:::tip[Environment Variables]
If you change any of the environment variables, you will need to rebuild the application.
:::
### Running the Account Manager

Once the Account Manager has been built, you can run it using `npm`.

```bash
npm run start
```

This will start the Account Manager on port `3000`.

:::tip[Reverse Proxy]
You will need to reverse proxy port `3000` with your web server of choice.  
:::


[1]: /docs/account-manager/docker-setup
[2]: /docs/account-manager/discord-application
[3]: https://github.com/OpenDAoC/opendaoc-accountmanager/releases/latest
[4]: https://github.com/OpenDAoC/opendaoc-accountmanager