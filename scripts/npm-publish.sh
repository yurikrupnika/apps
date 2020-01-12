#! /bin/bash

set -eo pipefail
echo $npm_package_version

#git status

#node scripts/prepare.publish.js
#git add publish-command.text
FILE=publish-command.text
#read $FILE
#if [ -s "$file" ]
#then
#   echo " file exists and is not empty "
#else
#   echo " file does not exist, or is empty "
#fi
#while read USER; do echo "Hello $USER!"; done < publish-command.text
#if test -s "$FILE"; then
echo 'asd'
#  git status
#  git rm publish-command.text
#git reset --hard
#  echo ${'cat publish-command.text}
#  rm publish-command.text

#git add publish-command.text .
#git commit -m "add publish-command.text file"
cat publish-command.text
#  git status
#  rm publish-command.text
  git add publish-command.text .
  git status
npx lerna exec --stream --since -- npm i
npx lerna run --parallel build --since
npx lerna publish major --yes --no-push --conventional-commits
npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
  git status
#  git checkout -- publish-command.text
#  git add publish-command.text .
  git status
git add -u
git commit -am "package-lock.json update"
git status
npm version major
git push origin --follow-tags
###
###  # tag
###  #$npm_package_version
  git status
git tag "$(node -p "require('./package.json').version")" -a -m "$(node -p "require('./package.json').version")"
git push origin --follow-tags
#else
#  echo no packages to publish
#fi
