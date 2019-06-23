FROM client-apps_lerna AS builder

#ARG NODE_ENV_DOCKER=true
#ARG npm-name=@krupnik
#ARG package-name=service1
#ARG port=7000
#ARG host=0.0.0.0
#ENV PORT=$port
ARG port=7000
#ARG host=0.0.0.0
ENV PORT=$port
#ENV HOST=http://service1
#ENV DEST_PORT=8000
#
#ARG PACKAGE_NAME=service1
#ARG DATABASE_URL=mongodb://db/service1-db
#
#RUN echo $PORT
#RUN echo ${PORT}
#RUN echo $port
#RUN echo ${port}
#RUN echo ${host}
#RUN echo ${HOST}

RUN npx lerna run build --scope @krupnik/service1

FROM node:10-alpine
WORKDIR /usr/src/app
COPY --from=builder /app/packages/service1/dist .
RUN npm install --only=production

EXPOSE 7000
CMD ["npm", "start"]
