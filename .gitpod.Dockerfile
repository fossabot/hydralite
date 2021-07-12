# syntax=docker/dockerfile:1
FROM gitpod/workspace-full
# TODO: Possibly build WS image from scratch using gitpod/workspace-base to optmize image size and boot times.
# If gone to that path, we'll only install Python 3.x through pyenv, Node.js 14.x through nvm and Cargo/Rust.

### NOTE FROM ANDREI JIROH - START ###
# TL;DR: 1) run "docker build --tag eu.gcr.io/gitpodify/hydralite:dev --file .gitpod.Dockerfile .devcontainer" when reproducing this image, and 2) keep Flutter code up-to-date with Flutter releases as much as possible
# - If you reproducing the build of this Dockerfile for Gitpod, please use the .devcontainer directory as your context while $PWD/.gitpod.Dockerfile as the file flag when doing docker build locally. Enabling BuildKit at client or deamon side or setting up Buildx and using "docker buildx build" instead of the "docker build" command above are welcome.
# - After confirming that the image build succeeds, fire up an seperate Gitpod workspace to check if its working, especially if your edited the .gitpod.yml file.
# - Update Flutter code to be compartible with latest release as possible. (Beware of major releases!) If in the future HydraLite wants its Flutter code to be also works 
# for desktop and web, update this Dockerfile to include commands found in https://flutter.dev/docs/get-started/install/linux#linux-setup and https://flutter.dev/docs/get-started/web
# - Actually there's an offical workspace image with Dart installed (https://github.com/gitpod-io/workspace-images/blob/master/dart/Dockerfile), but I preferred to use the one that included in Flutter
### NOTE FROM ANDREI JIROH - END ###

USER gitpod

# Make sure we have latest repositories' cache first, so we don't hit that 404 Not Fund errors when doing "apt install"
RUN sudo apt update

### Flutter ###
# Note that you cannot emulate Android apps yet because of KVM requirement, but nested birtualization is unsupported in GKE currently
# See Gitpod issue at https://github.com/gitpod-io/gitpod/issues/1273 and also in Google Issue Tracker in general at https://issuetracker.google.com/issues/110507927?pli=1

# Update the FLUTTER_VERSION variable below to the latest major.minor.patch release and update Flutter code to be compartible with that version as per the official docs.
ENV FLUTTER_VERSION=2.0.5 FLUTTER_RELEASE_CHANNEL=stable
# Dependencies for Dart itself, even we used the one included in Flutter, just in case you prefer not to use Flutter
RUN sudo apt install libkrb5-dev gcc make build-essential -y
# Main Flutter install
RUN sudo apt install libglu1-mesa -y \
    && wget -qO- https://storage.googleapis.com/flutter_infra_release/releases/${FLUTTER_RELEASE_CHANNEL}/linux/flutter_linux_${FLUTTER_VERSION}-${FLUTTER_RELEASE_CHANNEL}.tar.xz | tar -xJv -C /home/gitpod \
    # Note from @ajhalili2006: precaching platform-specific dev binaries are optionally btw, but include them to speed up development time
    # we'll pull artifacts for Android and iOS + universal artifacts for any dev platform
    # For desktop development, add linux, windows and macos flags. For the web, add web flag.
    && /home/gitpod/flutter/bin/flutter precache --android --ios --universal -v
    # TODO: Add Linux setup for desktop if needed. Also install Chrome for web

# Note from @ajhalili2006: $PROJECT_ROOT/.devcontainer/flutter.bashrc
COPY flutter.bashrc /home/gitpod/.bashrc.d/40-flutter

### Cleanup ###
RUN sudo apt-get clean -y && \
   sudo rm -rfv /var/cache/debconf/* \
   /var/lib/apt/lists/* \
   /tmp/* \
   /var/tmp/*