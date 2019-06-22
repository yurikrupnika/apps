FROM node:10
WORKDIR /app
RUN cat ~/.npmrc > ~/.npmrc
COPY package-lock.json package.json ./
RUN npm install

COPY packages ./packages
COPY babel.config.js .
COPY .eslintrc.js .
COPY webpack.config.server.js .
COPY webpack.config.client.js .
COPY rollup.config.js .
COPY rollup.components.config.js .
COPY lerna.json .
RUN npm run pi
