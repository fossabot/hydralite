FROM node

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
COPY prisma ./prisma

RUN yarn install
RUN npm install
RUN yarn run prisma:generate
RUN yarn run build

CMD ["npm", "start"]