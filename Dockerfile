FROM node:14-alpine AS base

RUN apk update && apk add curl bash && rm -rf /var/cache/apk/*

WORKDIR /hydralite

COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

COPY ./api ./api
COPY ./web ./web
COPY ./hydrabot ./hydrabot

RUN yarn
RUN yarn workspace @hydralite/api run prisma:generate

RUN yarn workspace @hydralite/api run build
RUN yarn workspace @hydralite/hydrabot run build
RUN yarn workspace @hydralite/web run build
# RUN yarn workspaces foreach --include @hydralite/api,@hydralite/web,@hydralite/hydrabot -p run build

CMD yarn start