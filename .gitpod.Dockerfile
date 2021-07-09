# syntax=docker/dockerfile:1
FROM gitpod/workspace-full

### NOTE FROM ANDREI JIROH - START ###
# TL;DR: 1) run "docker build --file .gitpod.Dockerfile .devcontainer" when reproducing this image, and 2) keep Flutter code up-to-date with Flutter releases as much as possible
# - If you reproducing the build of this Dockerfile for Gitpod, please use the .devcontainer directory as your context while $PWD/.gitpod.Dockerfile as the file flag when doing docker build locally.
# - Update Flutter code to be compartible with latest release as possible. (Beware of major releases!) If in the future HydraLite wants its Flutter code to be also works 
# for desktop and web, update this Dockerfile to include commands found in https://flutter.dev/docs/get-started/install/linux#linux-setup and https://flutter.dev/docs/get-started/web

### NOTE FROM ANDREI JIROH - END ###

USER gitpod

# Make 

### Flutter ###
# Note that you cannot emulate Android apps yet because of KVM requirement, but nested birtualization is unsupported in GKE currently
# See Gitpod issue at https://github.com/gitpod-io/gitpod/issues/1273 and also in Google Issue Tracker in general at https://issuetracker.google.com/issues/110507927?pli=1
ENV FLUTTER_VERSION=2.0.5 FLUTTER_RELEASE_CHANNEL=stable
RUN sudo apt install libglu1-mesa -y \
    && wget -qO- https://storage.googleapis.com/flutter_infra_release/releases/${FLUTTER_RELEASE_CHANNEL}/linux/flutter_linux_${FLUTTER_VERSION}-${FLUTTER_RELEASE_CHANNEL}.tar.xz | tar -xfv -C /home/gitpod \
    && /home/gitpod/flutter/bin/flutter 
    # TODO: Add Linux setup for desktop if needed. Also install Chrome for web

# Note from @ajhalili2006: $PROJECT_ROOT/.devcontainer/flutter.bashrc
COPY flutter.bashrc /home/gitpod/.bashrc/40-flutter
