[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) 
[![Greenkeeper badge](https://badges.greenkeeper.io/yurikrupniktools/client-apps.svg)](https://greenkeeper.io/)

# usefull commands

Install packages scoped
```
npx lerna exec --scope @krupnik/webserver1 -- npm i -S morgan
```

Run package command 
```
 npx lerna run --stream --scope @krupnik/service1 start
```

docker copy
```$xslt
docker cp builds:app/packages/service1/dist ./packages/service1       
```
# apps

Client applications in monorepo.
