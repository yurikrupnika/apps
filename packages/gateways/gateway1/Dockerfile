FROM yurikrupnik/client-apps_lerna AS builder

#ARG NODE_ENV_DOCKER=true
#ARG npm-name=@krupnik
#ARG package-name=gateway1
ARG port=8000
ENV PORT=$port

ENV USERS_HOST=http://service1:7000
ENV PROJECTS_HOST=http://projects:7001
#ARG host=0.0.0.0
#ENV DEST_PORT=7000
COPY . ./packages/gateways/gateway1
RUN npm run pi
RUN npx lerna run build --scope @krupnik/gateway1

FROM node:12-alpine
WORKDIR /usr/src/app
COPY --from=builder /app/packages/gateways/gateway1/dist .
RUN npm install --only=production

EXPOSE 8000
CMD ["npm", "start"]
