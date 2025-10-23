FROM node:20-alpine AS build

WORKDIR /usr/app

COPY package.json .
COPY package-lock.json .
COPY ./crypto-ui/package.json ./crypto-ui/

RUN npm ci

COPY . .

RUN npm run build:shell
RUN npm run build:market
RUN npm run build:wallet


FROM nginx:latest

COPY --from=build /usr/app/crypto-ui/apps/shell/dist /data/apps/shell
COPY --from=build /usr/app/crypto-ui/apps/market/dist /data/apps/market
COPY --from=build /usr/app/crypto-ui/apps/wallet/dist /data/apps/wallet

COPY --from=build usr/app/crypto-ui/nginx.conf /etc/nginx

EXPOSE 8080 8081 8082