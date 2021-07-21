FROM node

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
COPY prisma ./prisma

RUN yarn
RUN yarn prisma:generate
RUN yarn build

CMD ["npm", "start"]