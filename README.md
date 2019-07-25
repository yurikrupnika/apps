[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/) 
[![Greenkeeper badge](https://badges.greenkeeper.io/yurikrupniktools/client-apps.svg)](https://greenkeeper.io/)
[![CircleCI](https://circleci.com/gh/yurikrupniktools/client-apps.svg?style=svg)](https://circleci.com/gh/yurikrupniktools/client-apps)
[![codecov](https://codecov.io/gh/yurikrupniktools/client-apps/branch/master/graph/badge.svg)](https://codecov.io/gh/yurikrupniktools/client-apps)
[![dependencies Status](https://david-dm.org/yurikrupniktools/client-apps/status.svg)](https://david-dm.org/yurikrupniktools/client-apps)
[![devDependencies Status](https://david-dm.org/yurikrupniktools/client-apps/dev-status.svg)](https://david-dm.org/yurikrupniktools/client-apps?type=dev)

## Multiple applications in a monorepo.

### Run dev on local machine

Run mongodb instance using docker 
```
npm run start:mongo
```

Install mono-repo dependencies
```
npm i
```

Install packages dependencies
```
npm run pi
```

Build web servers with ejs injected with webpack bundle result, needed for ssr.
```
 npm run prepare:ejs
```

Sub link packages
```
npm run bootstrap
```

Start all services.
```
npm start
```

Browser with all FE applications will open.

### Happy development

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
