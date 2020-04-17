FROM node:alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app
RUN npm install

COPY . /usr/src/app
RUN ln config/env.production.ts config/env.ts

RUN npm run build

CMD ["sh", "bin/start.sh"]
