#! /bin/bash

set -eo pipefail
#echo $(node scripts/prepare.publish.js -q)
#node scripts/prepare.publish.js
#npx lerna publish prepatch --dist-tag lol --yes --no-push --conventional-commits
#npx lerna publish patch --preid some-branch  --dist-tag bra1

#npx lerna changed -a

node scripts/prepare.publish.js -q
#PATH=private-to-publish.json
#echo $PATH
#cat ./$PATH
if [ $? -eq 0 ]
then
  echo "Success: I found IP address in file."
#  node prepare.publish.js
else
  echo "Failure: I did not found IP address in file. Script failed" >&2
  circleci-agent step halt
  exit 0
fi
#
#cat ~/.npmrc
npx lerna exec --parallel --since -- npm ci
npx lerna run --since --parallel build
npx lerna publish minor --yes --no-push --conventional-commits
npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
git add -u
git commit -am "package-lock.json update"
npm version minor
git push origin --follow-tags

# tag
#$npm_package_version
#echo $npm_package_version
git tag "$(node -p "require('./package.json').version")"  -a -m "$(node -p "require('./package.json').version")"
git push origin --follow-tags
