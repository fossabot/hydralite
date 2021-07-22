FROM node

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY .env ./

COPY src ./src
COPY prisma ./prisma

RUN yarn install
RUN npm install
RUN yarn run prisma:generate
RUN yarn run build

CMD ["npm", "run", "start:push"]