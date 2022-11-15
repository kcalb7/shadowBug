# syntax=docker/dockerfile:1
FROM node:16.18-bullseye

RUN apt update && apt upgrade -y

WORKDIR /app

EXPOSE 3000
