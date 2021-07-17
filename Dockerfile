# Update the Node.js Docker tag to latest LTS as needed.
# Possibly automate with Dependabot soon.
FROM node:14

# Install dumb-init to help handle signals, especially Bash doesn't handle SIGTERM properly
# when Docker is about t shut down a container.
ARG DUMB_INIT_RELEASE=1.2.5
RUN wget -O /usr/local/bin/dumb-init https://github.com/Yelp/dumb-init/releases/download/v${DUMB_INIT_RELEASE}/dumb-init_${DUMB_INIT_RELEASE}_$(arch) \
    && chmod +x /usr/local/bin/dumb-init

# The /app directory is the usual directory Node.js Dockerized apps usually used as their working directory, especially in Heroku.
# In case of Hydralite, we want to seperate the frontend from backend, because that's how monorepos work and most PaaS services that only support
# Dockerfiles are only one port is allowed to be forwarded to public-facing internet, unless we're gonna mess up with Cloudflare Tunnel.
# The format in this case will be /app/hydralite/<component> inside individual components (excluding the root Dockerfile)
COPY ./ /app/hydralite

# ...so we can install them all
WORKDIR /app/hydralite
RUN yarn && yarn prisma:generate

# Ensure our entrypoint script is executable
RUN chmod +x /app/hydralite/docker-entrypoint.sh

# Finally start the server (we might need to configure the API endpoints first when running in production)
ENTRYPOINT [ "/app/hydralite/docker-entrypoint.sh" ]
# Use NODE_ENV variable to set modes, by default you'll be running in development mode.
# To run in production, set NODE_ENV to production.
CMD [ "server" ]