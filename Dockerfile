FROM node:latest

WORKDIR /usr/app

COPY . .
RUN npm install
COPY . .

CMD ["node", "index.js"]