#! /bin/bash

set -e
#node scripts/prepare.publish.js
npx lerna run --since --parallel build
#npx lerna publish prepatch --dist-tag lol --yes --no-push --conventional-commits
#npx lerna publish patch --preid some-branch  --dist-tag bra1
npx lerna publish patch --yes --no-push --conventional-commits
npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
git add -u
git commit -am "package-lock.json update"
npm version patch
git push origin --follow-tags

# tag
#$npm_package_version
#echo $npm_package_version
git tag "$(node -p "require('./package.json').version")"  -a -m "$(node -p "require('./package.json').version")"
git push origin --follow-tags
