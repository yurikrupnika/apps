FROM node:10 AS lerna
WORKDIR /app
RUN cat ~/.npmrc > ~/.npmrc
COPY package-lock.json package.json ./
RUN npm install

COPY babel.config.js .
COPY .eslintrc.js .
COPY webpack.config.server.js .
COPY webpack.config.client.js .
COPY rollup.config.js .
COPY lerna.json .
COPY packages ./packages
RUN npm run bootstrap
RUN npm run build
