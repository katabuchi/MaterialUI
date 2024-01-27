FROM node:21-bookworm-slim as base
WORKDIR /src
RUN [ "npm", "install", "-g", "npm@10.3.0" ]

FROM base as develop
COPY ./src/package*.json ./
RUN [ "npm", "install" ]