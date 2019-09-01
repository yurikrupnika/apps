#! /bin/bash
npx lerna publish --yes --no-push
npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
git add **/package-lock.json
#git commit --amend --no-edit
#VERSION=`node -pe "require('$PWD/package.json').version;"`
#git tag -f 5.5.5
npm version patch
git commit --amend --no-edit
git push --follow-tags


# "postversion": "npm install --package-lock && git add package-lock.json && commit --amend --no-edit"
