
FROM client-apps_builds AS builder

FROM node:10-alpine
WORKDIR /usr/src/app
COPY --from=builder /app/packages/service1/dist .
RUN npm install --only=production

EXPOSE 8000
CMD ["npm", "start"]
