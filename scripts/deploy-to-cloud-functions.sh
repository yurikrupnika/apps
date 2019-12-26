#! /bin/bash

set -e

gcloud functions deploy $npm_package_name \
  --allow-unauthenticated \
  --runtime nodejs$npm_package_engines_node \
  --trigger-http \
  --entry-point=$npm_package_name \
  --source=dist
