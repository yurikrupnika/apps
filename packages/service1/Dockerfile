FROM node:10
WORKDIR /app

# copy lerna related package.json
#COPY ../../package-lock.json .
#COPY ../../package.json .

RUN npm install

#COPY ../../babel.config.js .
#COPY ../../.eslintrc.js .
#COPY ../../webpack.config.server.js .
#COPY ../../webpack.config.client.js .
#COPY ../..lerna.json .
RUN docker cp lerna:/app .
COPY packages/service1 ./packages/service1

RUN npx lerna bootstrap
RUN npm run build

FROM node:10
WORKDIR /usr/src/app
COPY --from=builder /app/packages/service1/dist .
RUN npm install --only=production

EXPOSE 80
CMD ["npm", "start"]
