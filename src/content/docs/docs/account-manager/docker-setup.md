---
title: Docker Setup - Account Manager
description: Instructions for getting started with OpenDAoC's Account Manager using Docker.
tableOfContents:
  minHeadingLevel: 2
  maxHeadingLevel: 4
---

## Prerequisites

### Discord Application

The Account Manager requires a Discord application to be created to allow users to authenticate with Discord.  
If you haven't already, please see the [Discord Application][1] page for instructions on how to create one.

### Server Database Access

The Account Manager requires access to the server's MySQL database to access the account data.  
Make sure to adjust your system configuration to allow the Account Manager to connect to the server's database from Docker.

:::tip[Database Access]
It is recommended to create a new user with limited access to the database for the Account Manager to use.
:::

### Docker

To run the OpenDAoC Account Manager container you will need to have Docker and Docker Compose installed on your system.  
For instructions on how to install Docker and Docker Compose on your system, please see the [Docker documentation][2].  

:::tip[Suggested Utilities]
While not required, we suggest installing [Portainer CE][3] to manage your Docker containers.  
:::

## Docker Compose

The Account Manager is built using Next.js and as such requires a trick to get it to work with Docker Compose and pass environment variables to the container.  

To do this, we will be setting the environment variables in the `docker-compose.yml` file and then passing them to the container using the `environment` key - and then using the `entrypoint.sh` script to set the environment variables in the container before building and running the application.

For ease of use, we have created a `docker-compose.yml` file that you can use to get started.

```yaml
version: '3'
services:
  web:
    image: ghcr.io/opendaoc/opendaoc-accountmanager:latest
    ports:
      - "3000:3000"
    environment:
      - SERVER_NAME: OpenDAoC
      - SITE_TITLE: OpenDAoC | Account Manager
      - SITE_DESCRIPTION: OpenDAoC Account Manager allows you to link your OpenDAoC account to your Discord for easy password recovery.
      - SITE_FOOTER: OpenDAoC Account Manager
      - LOGO_PATH: /logo.svg
      - THEME_FOREGROUND: 0, 0, 0
      - THEME_BACKGROUND_LIGHT: 8, 38, 80
      - THEME_BACKGROUND_DARK: 2, 7, 19
      - TOAST_DURATION: 8
      - DATABASE_HOST: your_database_host
      - DATABASE_USER: your_database_user
      - DATABASE_PASSWORD: your_database_password
      - DATABASE_NAME: your_database_name
      - MIN_PASSWORD_LENGTH: 6
      - MAX_PASSWORD_LENGTH: 12
      - DISCORD_CLIENT_ID: your_discord_client_id
      - DISCORD_CLIENT_SECRET: your_discord_client_secret
      - NEXTAUTH_URL: http://localhost:3000
      - NEXTAUTH_SECRET: change-me-please-123456789012

```
:::caution[Environment Variables]
Replace the values in the `environment` section with the values for your server and Discord application.
:::

### Personalization

We have an extensive list of environment variables that can be used to personalize the Account Manager, please see the [Personalization][4] page for more information.

### Starting the application

To start the application, run the following from the same directory as the `docker-compose.yml` file:

```bash
docker-compose up -d
```

This will start the container, replacing the environment variables with the values you have set in the `docker-compose.yml` file and finally build and start the application.


### Updating the application

:::tip[Watchtower]
If can use [Watchtower][5] to automatically update your Docker containers.  
:::

To update the Account Manager Docker image, you will need to stop the container, pull the latest image and then restart the container.

You can do this by running the following from the same directory as the `docker-compose.yml` file:

```bash
docker-compose down
docker-compose pull
docker-compose up -d
```

All of your data will be preserved during this process.


[1]: /docs/account-manager/discord-application
[2]: https://docs.docker.com/get-docker/
[3]: https://docs.portainer.io/start/install-ce
[4]: /docs/account-manager/personalization
[5]: https://containrrr.dev/watchtower/
