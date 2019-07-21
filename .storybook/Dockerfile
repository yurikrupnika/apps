FROM yurikrupnik/client-apps_lerna AS builder
#FROM client-apps_lerna AS builder
#WORKDIR /app
RUN ls  -a
#CMD cd .storybook
CMD npm run build-storybook
CMD cd .storybook
RUN ls  -al

#FROM node:10-alpine
##WORKDIR /app
#COPY --from=builder /app/.storybook/dist ./dist
#RUN ls -a
#CMD npx http-server -p 6001 dist
#
##CMD npx http-server -p 6001 /usr/src/app/dist
#EXPOSE 6001
