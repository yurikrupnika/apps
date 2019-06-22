
FROM yurikrupnik/client-apps_builds AS builder
ARG NODE_ENV_DOCKER=true
ARG DOCKER_NAME=@krupnik
ARG PACKAGE_NAME=service1
ARG DATABASE_URL=mongodb://db/service1-db

ARG port=7000
ENV PORT=$port
RUN npx lerna run build --scope ${DOCKER_NAME}/${PACKAGE_NAME}

FROM node:10-alpine
WORKDIR /usr/src/app
ARG PACKAGE_NAME=service1
COPY --from=builder /app/packages/${PACKAGE_NAME}/dist .
RUN npm install --only=production

EXPOSE ${PORT}
CMD ["npm", "start"]
