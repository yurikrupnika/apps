#! /bin/bash

set -eo pipefail
echo $npm_package_version

git status

node scripts/prepare.publish.js
#git add publish-command.text
git status

FILE=publish-command.text
#while read USER; do echo "Hello $USER!"; done < private-to-publish.text
if test -f "$FILE"; then
  echo 'asd'
  git add publish-command.text
  echo $FILE
  rm publish-command.text
  git status
#  npx lerna exec --stream --since -- npm i
#  npx lerna run --parallel build --since
#  npx lerna publish patch --yes --no-push --conventional-commits
#  npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
#  git status
##  git checkout -- publish-command.text
##  git add publish-command.text
#  git status
#  git add -u
#  git commit -am "package-lock.json update"
#  git status
#  npm version patch
#  git push origin --follow-tags
###
###  # tag
###  #$npm_package_version
##  git pull
#  git tag "$(node -p "require('./package.json').version")" -a -m "$(node -p "require('./package.json').version")"
#  git push origin --follow-tags
else
  echo no packages to publish
fi

