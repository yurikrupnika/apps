#! /bin/bash

#docker images
#docker-compose -f docker-compose.lerna.yml build  --force-rm
npx lerna changed -a
if [ 'npx lerna changed -a -q' ]; then
    echo all good

else
 echo expression evaluated as false
# exit 1
fi

# execute command
#$@ npx lerna changed
#docker-compose build $("npx lerna changed -q") --parallel
#if [ $STATUS == 0 ]; then
#  echo "Command '$@' completed successfully"
#else
#  echo "Command '$@' exited with error status $STATUS"
#fi
