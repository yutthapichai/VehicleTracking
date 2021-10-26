<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Project 
Vehicle Tracking API

## Description

A vehicle Tracking System is a system for an admin to track the current position of vehicles in a fleet. \
In order to get the vehicle current position, the vehicle embedded GPS device will report its current position every 10 seconds.


## Installation

```bash
$ npm install
```

## First step

```bash
# Create database MySQL with docker compose
$ docker compose up -d

# Create table
$ npx knex migrate:latest 

# Generate data Vehicle amount 10000 record
$ npx knex seed:run

# Generate new data Vehicle
$ npx knex migrate:rollback -> npx knex seed:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Middleware by Basic Auth

User: adminTester \
Pass: superAdmin

## API

Vehicle \
  GET localhost:3000/api/vehicle?pagesize=10&page=1 \
  GET localhost:3000/api/vehicle/1 \
  POST localhost:3000/api/vehicle \
  PUT localhost:3000/api/vehicle/1 

Location \
  GET localhost:3000/api/location?pagesize=10&page=1 \
  GET localhost:3000/api/location/1 \
  POST localhost:3000/api/location 

## cURL

Vehicle \
curl --location --request POST 'localhost:3000/api/vehicle' \
--header 'Authorization: Basic YWRtaW5UZXN0ZXI6c3VwZXJBZG1pbg==' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'VehicleName=Car taxis' \
--data-urlencode 'VehicleType=Yellow' \
--data-urlencode 'TextColor=Green' \
--data-urlencode 'BackgroundColor=hg121212'

Location \
curl --location --request POST 'localhost:3000/api/location' \
--header 'Authorization: Basic YWRtaW5UZXN0ZXI6c3VwZXJBZG1pbg==' \
--header 'Content-Type: application/x-www-form-urlencoded' \
--data-urlencode 'VehicleID=1' \
--data-urlencode 'Latitude=37.7768006' \
--data-urlencode 'Longitude=-122.4187928'

## Image

 Display their journey on a table.
![image](https://i.ibb.co/0rLhrBJ/Screen-Shot-2564-10-26-at-15-12-28.png)

 Create Vehicle
![image](https://i.ibb.co/NjWwR1p/Screen-Shot-2564-10-26-at-15-16-18.png)


## Support

https://github.com/yutthapichai/VehicleTracking
https://www.canva.com/design/DAEs5DJZ03I/7BrbzQ2s2AIq3VwpLN5aJQ/view?


## License

App by Yutdev.
