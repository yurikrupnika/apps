FROM node:10
WORKDIR /app
RUN cat ~/.npmrc > ~/.npmrc
COPY package-lock.json package.json ./
RUN npm install

COPY .storybook ./.storybook
COPY docs ./docs
COPY babel.config.js .
COPY .eslintrc.js .
COPY webpack.config.server.js .
COPY webpack.config.client.js .
COPY rollup.config.js .
COPY lerna.json .
