FROM node:14-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./setup.js ./setup.js
COPY ./src ./src
COPY ./prisma ./prisma
COPY .env ./

# Install Bash first, because in Alpine that's not preinstalled
ARG DUMB_INIT_RELEASE=1.2.5
RUN apk add bash coreutils \
    # Then bring dumb-init next
    && wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_RELEASE}/dumb-init_${DUMB_INIT_RELEASE}_$(arch) \
    && chmod +x /usr/local/bin/dumb-init \
    # Finally install deps wih Yarn and run prisma:generate script
    && yarn && yarn prisma:generate

# Ensure entrypoint script is available and executable
COPY docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh

# Use our custom Docker entrypoint, where dumb-init will kick in
# while running this pure Bash script
ENTRYPOINT [ "/app/docker-entrypoint.sh" ]

# start server
CMD ["server"]
