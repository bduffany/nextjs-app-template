#!/bin/sh
# Starter script invoked by the Dockerfile.

source env.sh
npm run start -- --port "$PORT"
