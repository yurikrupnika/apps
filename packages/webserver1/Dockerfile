
FROM client-apps_builds AS builder

FROM node:10
WORKDIR /usr/src/app
COPY --from=builder /app/packages/webserver1/dist .
RUN npm install --only=production

EXPOSE 80
CMD ["npm", "start"]
