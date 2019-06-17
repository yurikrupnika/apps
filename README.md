[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) 
[![Greenkeeper badge](https://badges.greenkeeper.io/yurikrupniktools/client-apps.svg)](https://greenkeeper.io/)
[![CircleCI](https://circleci.com/gh/yurikrupniktools/client-apps.svg?style=svg)](https://circleci.com/gh/yurikrupniktools/client-apps)
[![codecov](https://codecov.io/gh/yurikrupniktools/client-apps/branch/master/graph/badge.svg)](https://codecov.io/gh/yurikrupniktools/client-apps)
[![dependencies Status](https://david-dm.org/yurikrupniktools/client-apps/status.svg)](https://david-dm.org/yurikrupniktools/client-apps)
[![devDependencies Status](https://david-dm.org/yurikrupniktools/client-apps/dev-status.svg)](https://david-dm.org/yurikrupniktools/client-apps?type=dev)

# Before usage
Add .env files with port env variable

* webserver1 PORT=9000 
* gateway1 PORT=7000 
* service1 PORT=8000 

### Follow package.json scripts

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

local test comoponents
```
npx lerna exec --scope @krupnik/components -- npm run test -- --coverage
```

add local package, pre publish
```
 npx lerna --scope=@krupnik/webserver1 add  @krupnik/list 
```
# apps

Client applications in monorepo.
