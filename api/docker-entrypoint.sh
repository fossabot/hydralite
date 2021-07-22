#!/usr/local/bin/dumb-init /bin/bash
# shellcheck shell=bash

# Only bail out if error occurs
set -e

# We only run these if we're running the Hydralite server to check for any
# missing variables.
if [[ $1 == "server" ]]; then
  yarn setup
fi

# Once the database init process is done, we'll use exec to replace bash with Node.js processes or to the login shell if needed.
if [[ $NODE_ENV == "production" ]] && [[ $1 == "server" ]]; then
  echo "warn: Hydralite isn't yet production ready, proceed at your own risk! Starting in 5 seconds..."
  sleep 5
  
  exec yarn build
  exec yarn start
elif [[ $1 == "server" ]];then
  exec yarn setup
  exec yarn dev
elif [[ $1 == "shell" ]] || [[ $1 == "bash" ]]; then
  exec bash -l
else
  exec "$@"
fi