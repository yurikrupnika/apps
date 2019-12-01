#! /bin/bash

set -e
npx lerna changed -a
if [[ $? -ne 0 ]]; then
  echo all good, can do npm publish
else
  circleci-agent step halt
fi
npm run build
#npx lerna publish major --yes --no-push --conventional-commits
#npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
#git add -u
#git commit -am "package-lock.json update"
#npm version major
#git push origin --follow-tags
#
## tag
#git tag "$(node -p "require('./package.json').version")"  -a -m "$(node -p "require('./package.json').version")"
#git push origin --follow-tags
