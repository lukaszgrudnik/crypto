FROM node:20-alpine AS build

WORKDIR /usr/crypto-ui
COPY package*.json .

RUN npm ci

COPY . .

RUN npm run build:shell
RUN npm run build:market
RUN npm run build:wallet


FROM nginx:latest

COPY --from=build /usr/crypto-ui/apps/shell/dist /data/apps/shell
COPY --from=build /usr/crypto-ui/apps/market/dist /data/apps/market
COPY --from=build /usr/crypto-ui/apps/wallet/dist /data/apps/wallet

COPY --from=build usr/crypto-ui/nginx.conf /etc/nginx
