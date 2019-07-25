FROM yurikrupnik/client-apps_lerna AS builder

#ARG NODE_ENV_DOCKER=true
#ARG npm-name=@krupnik
#ARG package-name=gateway1
#ARG port=8000
#ENV PORT=$port
#ARG host=0.0.0.0
#ENV DEST_PORT=7000

RUN npx lerna run build --scope @krupnik/gateway1

FROM node:10-alpine
WORKDIR /usr/src/app
COPY --from=builder /app/packages/gateways/gateway1/dist .
RUN npm install --only=production

EXPOSE 8000
CMD ["npm", "start"]
