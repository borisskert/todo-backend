FROM node:12

RUN mkdir -p /app
ADD . /app

RUN cd /app && npm ci

WORKDIR /app

EXPOSE 3000

CMD node index.js
