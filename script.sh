#! /bin/bash
npm run build
npx lerna publish major --yes --no-push
npx lerna exec -- npm install --package-lock-only --ignore-scripts --no-audit
git add .
git commit -m "package-lock.json update"
npm version patch
git push --follow-tags


# "postversion": "npm install --package-lock && git add package-lock.json && commit --amend --no-edit"
