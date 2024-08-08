FROM node:18-alpine 
WORKDIR /app

COPY ./package.json /app
COPY ./package-lock.json /app

ENV NODE_ENV production
RUN npm ci

COPY . /app

RUN npm run build

EXPOSE 3000

CMD [ "npx", "serve", "build" ]
