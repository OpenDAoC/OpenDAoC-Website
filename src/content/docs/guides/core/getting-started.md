---
title: Getting Started
description: Instructions for getting started with OpenDAoC.
---

OpenDAoC is a .Net 6.0 application that emulates a DAoC server.  
OpenDAOC is provided as source code and can be compiled and run on Windows or Linux. It is also provided as a Docker container that can be run on any platform that supports Docker.

The easiest way to get started is to use the Docker container, but this guide will also cover how to compile and run the server on Linux.

## Docker

:::caution
While the Docker container can be run on any platform that supports Docker, we will assume that you are running Docker on a Debian based Linux distribution such as Ubuntu.
:::

### Prerequisites

To run the OpenDAoC Docker container you will need to have Docker and Docker Compose installed on your system.  
For instructions on how to install Docker and Docker Compose on your system, please see the [Docker documentation](https://docs.docker.com/get-docker/).  

### Docker Compose

OpenDAoC requires a MySQL database to store all persistent data.  
The easiest way to get the OpenDAoC image up and running with a paired DB container is to use a `docker-compose` file to create the required stack.

We will also use the `docker-compose` file to configure the OpenDAoC container with the required environment variables.

A dummy database is provided with the OpenDAoC image that will create the required database and tables when the container is started for the first time.  
A more complete and updated database is available on GitHub and can be used to replace the dummy database after the initial setup.

Create a new directory for the OpenDAoC stack and create a `docker-compose.yml` file in that directory with the following content:

:::caution
Remember to replace the `MYSQL_ROOT_PASSWORD` value with a strong password.
:::

:::tip
Remember to replace the `SERVER_NAME` and `SERVER_NAME_SHORT` values with the name of your server.
:::

```yaml
version: "3.3"

networks:
  opendaoc-network:
    driver: bridge

services:
  db:
    image: mariadb:10.6
    stdin_open: true # docker run -i
    tty: true        # docker run -t
    command: --default-authentication-plugin=mysql_native_password --lower_case_table_names=1 --character-set-server=utf8mb3 --collation-server=utf8mb3_general_ci --innodb_large_prefix=1 --innodb_file_format=Barracuda --innodb_file_per_table=1
    restart: always
    environment:
      MYSQL_DATABASE: opendaoc
      MYSQL_ROOT_PASSWORD: my-secret-pw
    volumes:
      - opendaoc-db-data:/var/lib/mysql
      - dummy-db:/docker-entrypoint-initdb.d
    networks: 
      - opendaoc-network
      
  gameserver:
    stdin_open: true # docker run -i
    tty: true        # docker run -t
    image: claitz/opendaoc:latest
    ports:
      - "10300:10300"
      - "10400:10400"
    depends_on:
      - db
    environment:
      DB_CONNECTION_STRING: "server=db;port=3306;database=opendaoc;userid=root;password=my-secret-pw;treattinyasboolean=true"
      SERVER_PORT: "10300"
      SERVER_IP: "0.0.0.0"
      REGION_IP: "0.0.0.0"
      REGION_PORT: "10400"
      UDP_IP: "0.0.0.0"
      UDP_PORT: "10400"
      ENABLE_UPNP: "False"
      DETECT_REGION_IP: "True"
      SERVER_NAME: "OpenDAoC"
      SERVER_NAME_SHORT: "OPENDAOC"
      LOG_CONFIG_FILE: "./config/logconfig.xml"
      SCRIPT_COMPILATION_TARGET: "./lib/GameServerScripts.dll"
      SCRIPT_ASSEMBLIES: ""
      ENABLE_COMPILATION: "True"
      AUTO_ACCOUNT_CREATION: "True"
      GAME_TYPE: "Normal"
      CHEAT_LOGGER_NAME: "cheats"
      GM_ACTION_LOGGER_NAME: "gmactions"
      INVALID_NAMES_FILE: "./config/invalidnames.txt"
      DB_TYPE: "MYSQL"
      DB_AUTOSAVE: "True"
      DB_AUTOSAVE_INTERVAL: "10"
      CPU_USE: "8"

    volumes:
      - dummy-db:/tmp/dummy-db
      
    networks: 
      - opendaoc-network

volumes:
  opendaoc-db-data:
  dummy-db:
```

### Starting the stack

To start the stack, run the following command in the directory where you created the `docker-compose.yml` file:

```bash
docker-compose up -d
```

This will start the OpenDAoC container and the MySQL container in the background.  
The first time you start the stack, the MySQL container will create the database and tables required by OpenDAoC. Please be patient as this can take a few minutes.