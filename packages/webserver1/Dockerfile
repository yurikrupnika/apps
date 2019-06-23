FROM client-apps_lerna AS builder

#ARG NODE_ENV_DOCKER=true
#ARG npm-name=@krupnik
#ARG package-name=webserver1
ARG port=9000
#ARG host=0.0.0.0
ENV PORT=$port
#ENV HOST=http://service1
ARG dest_port=7000
ENV DEST_PORT=$dest_port

RUN npx lerna run build --scope @krupnik/webserver1

FROM node:10-alpine
WORKDIR /usr/src/app
COPY --from=builder /app/packages/webserver1/dist .
RUN npm install --only=production

EXPOSE 9000
CMD ["npm", "start"]
