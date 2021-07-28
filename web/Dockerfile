FROM node

WORKDIR /app

COPY package.json ./
COPY tsconfig.json ./

COPY postcss.config.js ./
COPY tailwind.config.js ./

COPY next-env.d.ts ./

COPY components ./components
COPY constants ./constants
COPY data ./data
COPY hoc ./hoc
COPY logic ./logic
COPY pages ./pages
COPY partials ./partials
COPY public ./public
COPY styles ./styles
COPY types ./types
COPY util ./util

RUN npm install
RUN npm run build

CMD ["npm", "start"]
