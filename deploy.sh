#! /bin/bash
npm run build
npx lerna publish patch --yes --no-push --conventional-commits
npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
git add -u
git commit -am "package-lock.json update"
npm version patch -am "update version"
git push origin --tags
git tag "$(node -p "require('./package.json').version")"  -a -m "update shit"
git push origin --tags

# "postversion": "npm install --package-lock && git add package-lock.json && commit --amend --no-edit"
