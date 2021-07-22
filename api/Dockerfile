FROM node:14-alpine

WORKDIR /app

COPY ./package.json ./package.json
COPY ./tsconfig.json ./tsconfig.json
COPY ./setup.js ./setup.js
COPY ./src ./src
COPY ./prisma ./prisma

RUN yarn
RUN yarn prisma:generate

# Ensure entrypoint script is available and executable
COPY docker-entrypoint.sh /app/docker-entrypoint.sh
RUN chmod +x /app/docker-entrypoint.sh

# specify entrypoint script
ENTRYPOINT [ "/app/docker-entrypoint.sh" ]

# start server
CMD ["server"]