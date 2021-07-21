FROM node

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./
COPY src ./src
COPY prisma ./prisma

RUN npm install
RUN npm run prisma:generate
RUN npm run build

CMD ["npm", "start"]