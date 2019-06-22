
FROM yurikrupnik/client-apps_builds AS builder
#FROM yurikrupnik/client-apps_builds

FROM node:10-alpine
WORKDIR /usr/src/app
COPY --from=builder /app/packages/webserver1/dist .
RUN npm install --only=production

EXPOSE 9000
CMD ["npm", "start"]
