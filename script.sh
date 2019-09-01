#! /bin/bash
npx lerna publish patch --yes --no-push
#npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
npm run pi
git add .
#git add add ./packages/services/projects/package-lock.json
#git add add ./packages/services/service1/package-lock.json
#git add add ./packages/ui/list/package-lock.json
#git add add ./packages/ui/button/package-lock.json
#git add add ./packages/node/render/package-lock.json
#git add add ./packages/node/express-responses/package-lock.json
#git commit --amend --no-edit
#VERSION=`node -pe "require('$PWD/package.json').version;"`
#git tag -f 0.0.4
git commit -m "package-lock.json update"
npm version patch
git push --follow-tags


# "postversion": "npm install --package-lock && git add package-lock.json && commit --amend --no-edit"
