#! /bin/bash

#set -e
#docker images
#docker-compose -f docker-compose.lerna.yml build  --force-rm
set -e
npx lerna changed -a
echo "exit code $?"
#echo "File name: $0"

if [[ $? -ne 0 ]]; then
  echo all good, can do npm publish
else
  echo no changes
#  circleci-agent step halt
fi
#echo "first paramater: $1"
#echo "second paramater: $2"
#echo "1111: $@"
#echo "22222 $@"
#
#for (item in $(npx lerna changed -a -q)); do
#  echo item
#done



# execute command
#$@ npx lerna changed
#docker-compose build $("npx lerna changed -q") --parallel
#if [ $STATUS == 0 ]; then
#  echo "Command '$@' completed successfully"
#else
#  echo "Command '$@' exited with error status $STATUS"
#fi
