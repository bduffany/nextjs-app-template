#!/bin/bash

# Script used to push a new version.
#
# Assumes that a GitHub hook is setup to auto-deploy code on the PUSH_TO
# branch. For Google Cloud, see:
# https://cloud.google.com/run/docs/continuous-deployment-with-cloud-build

set -eo pipefail

function arg_or_default () {
  [[ -z "$1" ]] && echo "$2" || echo "$1"
}

MERGE_FROM=$(arg_or_default "$1" "master")
PUSH_TO=$(arg_or_default "$2" "production")

git checkout -B "$PUSH_TO"
git merge "$MERGE_FROM"
git push origin "$PUSH_TO"

echo "Done."
