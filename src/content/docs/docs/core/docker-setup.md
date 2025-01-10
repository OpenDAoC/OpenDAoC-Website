---
title: Docker Setup - OpenDAoC
description: Instructions for getting started with OpenDAoC with Docker.
---
## Prerequisites

To run the OpenDAoC Docker container you will need to have Docker and Docker Compose installed on your system.  
For instructions on how to install Docker and Docker Compose on your system, please see the [Docker documentation][1].  

:::tip[Suggested Utilities]
While not required, we suggest installing [Portainer CE][2] to manage your Docker containers.  
:::

## Docker Compose

OpenDAoC requires a MySQL database to store all persistent data.  
The easiest way to get the OpenDAoC image up and running with a paired DB container is to use a `docker-compose` file to create the required stack.

We will also use the `docker-compose` file to configure the OpenDAoC container with the required environment variables.

A dummy database is provided with the OpenDAoC image that will create the required database and tables when the container is started for the first time.  
A more complete and updated database is available on GitHub and can be used to replace the dummy database after the initial setup.

Create a new directory for the OpenDAoC stack and create a `docker-compose.yml` file in that directory with the following content:

:::caution[Security]
 - Remember to replace the `MYSQL_ROOT_PASSWORD` value with a strong password.  
 - You can additionally set `GID` and `UID` to the user and group ID of the user running the container.
:::

:::tip[Server Name]
Replace the `SERVER_NAME` and `SERVER_NAME_SHORT` values with the name of your server.
:::

```yaml
networks:
  opendaoc-network:
    driver: bridge

volumes:
  opendaoc-db-data:
  base-db:

services:
  db:
    image: mariadb:10.6
    container_name: opendaoc-db
    stdin_open: true
    tty: true
    command: --default-authentication-plugin=mysql_native_password --lower_case_table_names=1 --character-set-server=utf8mb3 --collation-server=utf8mb3_general_ci --innodb_large_prefix=1 --innodb_file_format=Barracuda --innodb_file_per_table=1
    restart: always
    environment:
      MYSQL_DATABASE: opendaoc
      MYSQL_ROOT_PASSWORD: my-secret-pw
    volumes:
      - opendaoc-db-data:/var/lib/mysql
      - base-db:/docker-entrypoint-initdb.d
    networks:
      - opendaoc-network

  gameserver:
    image: ghcr.io/opendaoc/opendaoc-core:latest
    container_name: opendaoc-server
    stdin_open: true
    tty: true
    ports:
      - "10300:10300"
      - "10400:10400"
    depends_on:
      - db
    environment:
      UID: "1000"
      GID: "1000"
      AUTO_ACCOUNT_CREATION: "True"
      CHEAT_LOGGER_NAME: "cheats"
      CPU_USE: "8"
      DB_AUTOSAVE: "True"
      DB_AUTOSAVE_INTERVAL: "10"
      DB_CONNECTION_STRING: "server=db;port=3306;database=opendaoc;userid=root;password=my-secret-pw;treattinyasboolean=true"
      DB_TYPE: "MYSQL"
      DETECT_REGION_IP: "True"
      ENABLE_COMPILATION: "True"
      ENABLE_UPNP: "False"
      GAME_TYPE: "Normal"
      GM_ACTION_LOGGER_NAME: "gmactions"
      INVALID_NAMES_FILE: "./config/invalidnames.txt"
      LOG_CONFIG_FILE: "./config/logconfig.xml"
      REGION_IP: "0.0.0.0"
      REGION_PORT: "10400"
      SCRIPT_ASSEMBLIES: ""
      SCRIPT_COMPILATION_TARGET: "./lib/GameServerScripts.dll"
      SERVER_IP: "0.0.0.0"
      SERVER_NAME: "OpenDAoC"
      SERVER_NAME_SHORT: "OPENDAOC"
      SERVER_PORT: "10300"
      UDP_IP: "0.0.0.0"
      UDP_PORT: "10400"
      DOTNET_SYSTEM_GLOBALIZATION_INVARIANT: "False"
    volumes:
      - base-db:/tmp/opendaoc-db
    networks:
      - opendaoc-network
```

### Launching the server

To start the stack, run the following command in the directory where you created the `docker-compose.yml` file:

```bash
docker-compose up -d
```

This will start the OpenDAoC container and the MySQL container in the background.  
The first time you start the stack, the MySQL container will create the database and tables required by OpenDAoC. Please be patient as this can take a few minutes.


### Updating the database

The `docker-compose.yml` file above uses a dummy database to create the required database and tables when the container is started for the first time.  
While intended for bootstrapping your server, the dummy database is just a minimal version and does not contain all mobs, items, spells, etc.

Once you have completed the initial setup, you can replace the dummy database with our complete database as covered in the [Database][3] section.

### Updating the OpenDAoC image

We release updated OpenDAoC images frequently.

It is recommended that you update the OpenDAoC image on a regular basis to ensure that you are running the latest version and are benefiting from the latest bug fixes and features.

:::tip[Watchtower]
If you are running [Watchtower][4] to automatically update your Docker containers, we suggest excluding the OpenDAoC container as it would interrupt gameplay.  
Please see the [Watchtower documentation][5] for instructions on how to exclude containers from automatic updates.
:::

To update the OpenDAoC Docker image, you will need to stop the container, pull the latest image and then restart the container.

The steps to do this in a live environment are as follows:

- Issue the `/shutdown` command in-game to stop the server.
- Stop the OpenDAoC container once the server has shut down.
```bash
docker stop gameserver
```
- Pull the latest image.
```bash
docker pull ghcr.io/opendaoc/opendaoc-core:latest
```
- Start the OpenDAoC container.
```bash
docker start gameserver
```

The server will now be running the latest version of OpenDAoC.

[1]: https://docs.docker.com/get-docker/
[2]: https://docs.portainer.io/start/install-ce
[3]: /docs/database/
[4]: https://containrrr.dev/watchtower/
[5]: https://containrrr.dev/watchtower/Arguments/
