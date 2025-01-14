---
title: Manual Setup - OpenDAoC
description: Instructions for getting started with OpenDAoC without using Docker.
---

The easiest way to get started is to use the Docker container as described in the [Docker Setup][1] guide, but this guide will also cover how to compile and run the server on Linux.

## Setting up the environment

:::caution
For the purpose of this guide we will assume that you are attempting to run OpenDAoC on a Debian based Linux distribution such as Ubuntu 22.04 to which we'll be referring.
:::

:::danger
We will be using the default values for the user ID, user password, and database name in the following steps.  
Be sure to replace these values with your own and to secure SSH access to your server.
:::

This process assumes you do not already have a fully-configured environment with the specific tools or software installed previously.

If you've already completed a step previously, we recommend that you quickly review the steps again to ensure no special configurations are missed.

### Installing git

To clone the OpenDAoC repository, you will need to have git installed on your system.

To install git, run the following command from the Terminal:

```bash
sudo apt-get update && \
sudo apt-get install -y git
```

### Installing .NET SDK

OpenDAoC is a .NET application and requires the .NET SDK to be installed on your system.

If you are running a Debian based Linux distribution such as Ubuntu or Debian, you can install the SDK by running the following commands from the Terminal:

```bash
sudo apt-get update && \
sudo apt-get install -y dotnet-sdk-8.0
```

Please see [Microsoft's documentation][2] for instructions on how to install the .NET SDK on other platforms.

### Installing MariaDB

MariaDB is an open-source relational database management system (RDBMS). OpenDAoC has been tested with MariaDB up to version 10.6.

Perform the following steps from the Terminal:

```bash
sudo apt update && \
sudo apt install mariadb-server && \
sudo mysql_secure_installation
```

The RDBMS is installed, but needs a user and database for OpenDAoC to access and use.

### Preparing the Database

The following steps walk you through the process of adding a user and database using MariaDB.

:::danger
We will be using the default values for the user ID, user password, and database name in the following steps.  
Please note that these values are **NOT** secure and should be replaced if you intend to use this database for anything other than testing purposes.
:::

In this example, we will be using the following values:

* User: `opendaoc`
* Password: `opendaoc`
* Database: `opendaoc`

To create the user and database, perform the following steps from the Terminal:

1. Access your MySQL server using a privileged user
  ```bash
  sudo mysql -u root
  ```
2. Create the database and verify that it exists
  ```bash
  CREATE DATABASE opendaoc;
  SHOW DATABASES;
  ```
3. Verify that the database exists  
  ```bash
  SHOW DATABASES;
  ```
4. Create the user and verify that it exists
  ```bash
  CREATE USER 'opendaoc'@localhost IDENTIFIED BY 'opendaoc';
  SELECT User FROM mysql.user;
  ```
5. Grant privileges to the user
  ```bash
  GRANT ALL PRIVILEGES ON opendaoc.* TO 'opendaoc'@localhost;
  ```
6. Refresh the privilege changes and verify that the user has the correct privileges
  ```bash
  FLUSH PRIVILEGES;
  SHOW GRANTS FOR 'opendaoc'@localhost;
  ```

## Cloning the Repository

The OpenDAoC repository can be cloned from [GitHub][3].  
In this example, we will be cloning `OpenDAoC-Core` to the `/home/opendaoc/OpenDAoC-Core` directory.

To clone the repository, run the following command from the Terminal:

```bash
cd /home/opendaoc && \
git clone https://github.com/OpenDAoC/OpenDAoC-Core.git
```

## Populating the Database

The database needs to be populated with the required tables and data before the server can be run.  
We provide both a `DummyDB.sql` file with just the tables and the full OpenDAoC DB dump.

Using the `DummyDB.sql` file is only recommended if you plan using your own data or if you are familiar with the OpenDAoC database structure.

### Using the DummyDB.sql file

The database needs to be populated with the required tables and data with the provided `DummyDB.sql` file before the server can be run.

Run the following command from the Terminal:

```bash
sudo mysql -u opendaoc -p opendaoc < /home/opendaoc/OpenDAoC-Core/DummyDB.sql
```

You will be prompted for the password for the `opendaoc` user, which is `opendaoc` in this example.

:::tip
If you are using a different user, password, database name or DummyDB location, you will need to update the command file to reflect the correct values.
:::

## Altering `serverconfig.xml`

The last step before running the server is to alter the `serverconfig.xml` file to reflect your own configuration.

1. Copy `/home/opendaoc/OpenDAoC-Core/DOLServer/config/serverconfig.example.xml` to `/home/opendaoc/OpenDAoC-Core/DOLServer/config/serverconfig.xml`.
2. Open the `serverconfig.xml` file.
3. Within the `RegionIP` tags, change the value `0.0.0.0` to one of these:
   - To test locally, enter `127.0.0.1`.
   - To test over LAN, enter your machine's IP address (use the Terminal command `ip a`, and it should start with `192`).
   - To test outside your network, [enter your public IP address][4].
4. Configure the database access as per your own configuration.
   
Now you're ready to build and run the server!

## Building OpenDAoC

This section provides the commands necessary to build the server code.

1. Navigate to the `/home/opendaoc/OpenDAoC-Core/` directory
2. Run `dotnet build DOLLinux.sln`

:::tip
Building the server can take a while, be patient!
:::

## Launching the Server

1. Navigate to the `/home/opendaoc/OpenDAoC-Core/` directory
2. Run `dotnet run --project CoreServer`

:::tip
You will need to forward the ports (`10300` and `10301` by default) for the server to be accessible outside of your network.
:::


Congratulations!  
You're now running an instance of OpenDAoC.

[1]: /docs/core/docker-setup
[2]: https://learn.microsoft.com/en-us/dotnet/core/install/linux
[3]: https://github.com/OpenDAoC/
[4]: https://api.ipify.org
