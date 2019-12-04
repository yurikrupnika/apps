#! /bin/bash
#echo $0
#echo $1
#echo $2
#echo $s

npm run build
npx lerna publish prepatch --dist-tag lol --yes --no-push --conventional-commits
npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
git add -u
git commit -am "package-lock.json update"
npm version patch
git push origin --follow-tags

# tag
git tag "$(node -p "require('./package.json').version")"  -a -m "$(node -p "require('./package.json').version")"
git push origin --follow-tags
