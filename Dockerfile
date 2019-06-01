# start of all-in1

#FROM node:10 as builder
#WORKDIR /app
#
#COPY package-lock.json package.json ./
#RUN npm install
#
#COPY babel.config.js .
#COPY .eslintrc.js .
#COPY webpack.config.server.js .
#COPY webpack.config.client.js .
#COPY lerna.json .
#COPY packages ./packages
#
#RUN npx lerna bootstrap
#
#EXPOSE 80
#CMD ["npm", "start"]

# end of all-in1

# start of 1 service

FROM node:10 as builder
WORKDIR /app

COPY package-lock.json package.json ./
RUN npm install

COPY babel.config.js .
COPY .eslintrc.js .
COPY webpack.config.server.js .
COPY webpack.config.client.js .
COPY lerna.json .
COPY packages/service1 ./packages/service1

RUN npx lerna bootstrap
RUN npx lerna run build

FROM node:10
WORKDIR /usr/src/app
COPY --from=builder /app/packages/service1/dist .
RUN npm install --only=production

EXPOSE 80
CMD ["npm", "start"]

# end of 1 service



