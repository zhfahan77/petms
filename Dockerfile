FROM node:alpine

WORKDIR /apps

COPY ./ $WORKDIR

RUN npm install --unsafe-perm

CMD NODE_ENV=production node app.js