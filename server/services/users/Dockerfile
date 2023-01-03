FROM node:16.13

WORKDIR /usr/local/p3-challenge-2/server/services/users

ENV PORT=4001

COPY package.json package-lock.json /usr/local/p3-challenge-2/server/services/users

RUN npm install && npm cache clean --force

RUN npm install -g nodemon

COPY ./ ./

CMD ["npm", "run", "start"]