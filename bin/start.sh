#!/bin/sh
# Starter script invoked by the Dockerfile.

if [[ -e '.env' ]]; then
  source '.env'
fi
npm run start -- --port "$PORT"
