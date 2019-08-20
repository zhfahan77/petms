FROM node:alpine

WORKDIR /home/node

COPY ./ $WORKDIR

RUN chown -R node: *

RUN npm install

USER node

CMD npm start