FROM node:10 as builder
WORKDIR /app
COPY package-lock.json package.json ./
RUN npm install
RUN rm -rf package-lock.json package.json
COPY babel.config.js .
COPY .eslintrc.js .
COPY webpack.config.server.js .

COPY packages/service1/.env .
COPY packages/service1/src ./src
COPY packages/service1/package-lock.json packages/service1/package.json ./
RUN npm install
RUN npm run build

FROM node:10
WORKDIR /usr/src/app
COPY --from=builder /app/dist .
RUN npm install --only=production

EXPOSE 80
CMD ["npm", "start"]
