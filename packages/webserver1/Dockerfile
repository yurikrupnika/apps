FROM yurikrupnik/client-apps_lerna AS builder

#ARG NODE_ENV_DOCKER=true
#ARG npm-name=@krupnik
#ARG package-name=webserver1
ARG port=9000
ARG host=http://0.0.0.0
ENV HOST=$host
ENV PORT=$port
ARG dest_port=7000
ENV DEST_PORT=$dest_port
ENV DESTINATION_HOST=http://service1

RUN echo ${DEST_PORT}
RUN echo ${PORT}
RUN echo ${HOST}


RUN npx lerna run build --scope @krupnik/webserver1

FROM node:10-alpine
WORKDIR /usr/src/app
COPY --from=builder /app/packages/webserver1/dist .
RUN npm install --only=production

EXPOSE 9000
CMD ["npm", "start"]
