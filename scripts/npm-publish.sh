#! /bin/bash

set -e
#node scripts/prepare.publish.js
npx lerna run --since --parallel build
#npx lerna publish prepatch --dist-tag lol --yes --no-push --conventional-commits
#npx lerna publish patch --preid some-branch  --dist-tag bra1

#npx lerna changed -a
if [ "npx lerna changed -a" -eq 0 ]
then
  echo "Success: I found IP address in file."
  exit 1
else
  echo "Failure: I did not found IP address in file. Script failed" >&2
  exit 1
fi
#npx lerna publish patch --yes --no-push --conventional-commits
#npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
#git add -u
#git commit -am "package-lock.json update"
#npm version patch
#git push origin --follow-tags
#
## tag
##$npm_package_version
##echo $npm_package_version
#npx lerna changed -a
#git tag "$(node -p "require('./package.json').version")"  -a -m "$(node -p "require('./package.json').version")"
#git push origin --follow-tags
#npx lerna changed -a
