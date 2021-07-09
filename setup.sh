#!/bin/bash

# Install deps first
yarn

if [[ $IS_GITPOD_PREBUILD != "1" ]]; then
  # Run 'yarn setup' if not running this script as part of prebuilds in Gitpod
  yarn setup
fi