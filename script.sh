#! /bin/bash
npm run build
npx lerna publish major --yes --no-push --conventional-commits
npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
git add -u
git commit -am "package-lock.json update"
npm version patch
git push origin --follow-tags

# "postversion": "npm install --package-lock && git add package-lock.json && commit --amend --no-edit"
