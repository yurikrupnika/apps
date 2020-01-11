#! /bin/bash

set -eo pipefail
echo $npm_package_version
#echo $(node scripts/prepare.publish.js -q)
#node scripts/prepare.publish.js
#npx lerna publish prepatch --dist-tag lol --yes --no-push --conventional-commits
#npx lerna publish patch --preid some-branch  --dist-tag bra1

#npx lerna changed -a

node scripts/prepare.publish.js -q
file=./private-to-publish.text
echo $PATH
#echo ${cat private-to-publish.text}
#cat private-to-publish.text
#while IFS= read -r -uN line
#do
#  # do something on $line
#  echo "$line"
#done <"$file"
echo before cat
#cat private-to-publish.text
#echo 'export COMAND2=$(cat private-to-publish.text)'
#COMAND4=$(cat publish-command.text)
echo yse $COMAND4
FILE=publish-command.text
#while read USER; do echo "Hello $USER!"; done < private-to-publish.text
if test -f "$FILE"; then
  npx lerna exec --parallel --since -- npm ci
  npx lerna run --since --parallel build
  npx lerna publish minor --yes --no-push --conventional-commits
  npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
  git add -u
  git commit -am "package-lock.json update"
  npm version minor
  git push origin --follow-tags
#
#  # tag
#  #$npm_package_version
#  #echo $npm_package_version
  git tag "$(node -p "require('./package.json').version")" -a -m "$(node -p "require('./package.json').version")"
  git push origin --follow-tags
else

  echo no packages to publish
fi
