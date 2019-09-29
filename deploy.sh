#! /bin/bash
npm run build
npx lerna publish patch --yes --no-push --conventional-commits
npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
git add -u
git commit -m "package-lock.json update"
npm version patch -m "update version"
git tag "$(node -p "require('./package.json').version")"  -a
git push origin --follow-tags

# "postversion": "npm install --package-lock && git add package-lock.json && commit --amend --no-edit"
