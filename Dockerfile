FROM node:10 AS lerna
WORKDIR /app
RUN cat ~/.npmrc > ~/.npmrc
COPY package-lock.json package.json ./
COPY packages ./packages
COPY babel.config.js .
COPY .eslintrc.js .
COPY webpack.config.server.js .
COPY webpack.config.client.js .
COPY rollup.config.js .
COPY rollup.components.config.js .
COPY lerna.json .

RUN npm install
RUN npm run build
