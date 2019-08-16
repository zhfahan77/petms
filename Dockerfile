FROM node:alpine

WORKDIR /apps

COPY ./ $WORKDIR

RUN npm install

CMD NODE_ENV=production node app.js