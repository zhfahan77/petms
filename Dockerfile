FROM node:alpine

WORKDIR /apps

COPY ./ $WORKDIR

RUN npm install --unsafe-perm

CMD npm start