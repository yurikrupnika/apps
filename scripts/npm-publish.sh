#! /bin/bash

set -eo pipefail
echo $npm_package_version

node scripts/prepare.publish.js

FILE=publish-command.text
#while read USER; do echo "Hello $USER!"; done < private-to-publish.text
if test -f "$FILE"; then
  echo 'asd'
  git status
  npx lerna exec --stream --since -- npm i
  npx lerna run --parallel build --since
  npx lerna publish patch --yes --no-push --conventional-commits
  npx lerna exec --stream -- npm install --package-lock-only --ignore-scripts --no-audit
  git add -u
#  git checkout -- publish-command.text
  git commit -am "package-lock.json update"

  npm version patch
  git push origin --follow-tags
##
##  # tag
##  #$npm_package_version
#  git pull
  git tag "$(node -p "require('./package.json').version")" -a -m "$(node -p "require('./package.json').version")"
  git push origin --follow-tags
else
  echo no packages to publish
fi
