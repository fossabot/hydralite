#!/usr/local/bin/dumb-init /bin/bash
# shellcheck shell=bash

# Only bail out if error occurs
set -e

# We only run these if we're running the Hydralite server to check for any
# missing variables.
if [[ $1 == "server" ]]; then
  SKIP_DEPENDENCY_INSTALL=1 /app/hydralite/setup.sh
fi

# Once the database init process is done, we'll use exec to replace bash with Node.js processes
# or to the login shell if needed.
if [[ $NODE_ENV == "production" ]] && [[ $1 == "server" ]]; then
  echo "There's no such thing as production mode yet, Hydralite is still under development." && exit 1
elif [[ $1 == "server" ]];then
  exec yarn dev
elif [[ $1 == "shell" ]] || [[ $1 == "bash" ]]; then
  exec bash -l
else
  exec "$@"
fi