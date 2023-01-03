FROM node:16.13

WORKDIR /usr/local/p3-challenge-2/server/services/app

ENV PORT=4002

COPY package.json package-lock.json /usr/local/p3-challenge-2/server/services/app

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD ["npm", "run", "start"]