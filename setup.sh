#!/bin/bash
# shellcheck disable=SC2034

set -e

checkIfYarnInstalled() {
  YARNPKG_PATH=$(which yarn)

  if [[ $YARNPKG_PATH == "" ]]; then
    warn "Yarn isn't installed, installing with npmjs..."
    npm i -g yarn
  fi
}

# Terminal colors, copied from https://github.com/railwayapp/cli/blob/master/install.sh#L60-L79
useColor() {
  # Only use colors if connected to a terminal
  if [ -t 1 ]; then
    RED=$(printf '\033[31m')
    GREEN=$(printf '\033[32m')
    YELLOW=$(printf '\033[33m')
    BLUE=$(printf '\033[34m')
    MAGENTA=$(printf '\033[35m')
    BOLD=$(printf '\033[1m')
    RESET=$(printf '\033[m')
  else
    RED=""
    GREEN=""
    YELLOW=""
    BLUE=""
    MAGENTA=""
    BOLD=""
    RESET=""
  fi
}

# Source: https://github.com/ajhalili2006/dotfiles/blob/main/bootstrap#L38-L57
echoStageName() {
    echo "${BOLD}----> $* ${RESET}"
}
echoStageNameAdd() {
    echo "${BOLD}      $* ${RESET}"
}
warn() {
    echo "${YELLOW}warning: $* ${RESET}"
}
error() {
    # this will be long, so I must do "&& exit 1" manually
    echo "${RED}error: $* ${RESET}"
}
success() {
    echo "${GREEN}success: $* ${RESET}"
}

main() {
  useColor

  # Install Yarn if not yet installed
  checkIfYarnInstalled

  # Install deps first
  yarn

  if [[ $IS_GITPOD_PREBUILD != "1" ]]; then
    # Run 'yarn setup' if not running this script as part of prebuilds in Gitpod
    yarn setup
  fi

  # TODO: Check if Cargo and Rust installed and install deps for cli/*
}

# We wrapped the main logic as an function to make things nicer.
main