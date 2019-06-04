
FROM client-apps_builds AS builder

FROM node:10-alpine
WORKDIR /usr/src/app
COPY --from=builder /app/packages/gateway1/dist .
RUN npm install --only=production

EXPOSE 80
CMD ["npm", "start"]
