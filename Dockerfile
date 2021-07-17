FROM node:14-alpine AS base

# Install curl and bash, then clean up caches
RUN apk update && apk add curl bash && rm -rf /var/cache/apk/*

# Install dumb-init to help handle signals, especially Bash doesn't handle SIGTERM properly
# when Docker is about to shut down a container.
ARG DUMB_INIT_RELEASE=1.2.5
RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_RELEASE}/dumb-init_${DUMB_INIT_RELEASE}_$(arch) \
    && chmod +x /usr/local/bin/dumb-init

WORKDIR /hydralite

# Yarn config, manifests and lockfile
COPY .yarn .yarn
COPY .yarnrc.yml .yarnrc.yml
COPY ./package.json ./package.json
COPY ./yarn.lock ./yarn.lock

# Frontend + backend of Hydralite and the bot
COPY ./api ./api
COPY ./web ./web
COPY ./hydrabot ./hydrabot

# Install dependencies
RUN yarn

# Generate Prisma files and run production builds
# Dockerfile Best Pratice: Less layers == faster builds
RUN yarn workspace @hydralite/api run prisma:generate \
    && yarn workspace @hydralite/api run build \
    && yarn workspace @hydralite/hydrabot run build \
    && yarn workspace @hydralite/web run build
# RUN yarn workspaces foreach --include @hydralite/api,@hydralite/web,@hydralite/hydrabot -p run build

# Ensure our entrypoint script is available and executable
COPY docker-entrypoint.sh /hydralite/docker-entrypoint.sh
RUN chmod +x /hydralite/docker-entrypoint.sh

# Finally start the server (we might need to configure the API endpoints first when running in production)
ENTRYPOINT [ "/hydralite/docker-entrypoint.sh" ]
# Use NODE_ENV variable to set modes, by default you'll be running in development mode.
# To run in production, set NODE_ENV to production.
CMD [ "server" ]
