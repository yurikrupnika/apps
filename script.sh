#! /bin/bash
npx lerna publish patch --yes --no-push
npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
git add add .
#git commit --amend --no-edit
#VERSION=`node -pe "require('$PWD/package.json').version;"`
#git tag -f 5.5.5
git commit --amend --no-edit
#npm version patch
git push --tags origin


# "postversion": "npm install --package-lock && git add package-lock.json && commit --amend --no-edit"
