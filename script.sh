#!/bin/bash
echo How old are you?

read age

if [ "$age" -gt 20 ]
then
    echo You can drink.
else
    echo You are too young to drink.
fi
WEBSERVERs=./packages/webservers/*
SERVICES=./packages/services/*

for file in $WEBSERVERs
do
    echo $(basename  $file)
done
for file in $SERVICES
do
    echo $(basename $file)
done
#npm run test
