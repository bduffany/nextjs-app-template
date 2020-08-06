#!/bin/bash

cd $(dirname "$0")

# Start a fresh Git repo
rm -rf .git && git init
# Rename the package to match the directory name
perl -p -i -e "s@nextjs-app-template@$(pwd | xargs basename)@" package.json
# Install dependencies
yarn install
# Self-destruct
rm init.sh
# Start developing
yarn dev