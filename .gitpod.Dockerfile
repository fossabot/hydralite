FROM golang:1.16 AS shfmt

# Formatting shell scripts, especially our Docker image's entrypoint script, as
# ShellCheck's README recommends
# https://github.com/mvdan/sh#shfmt
RUN GO111MODULE=on go get mvdan.cc/sh/v3/cmd/shfmt

FROM gitpod/workspace-base:latest AS base

USER gitpod
ENV IS_GITPOD=true

### Node.js ###
LABEL dazzle/layer=lang-node
LABEL dazzle/test=tests/lang-node.yaml
ENV NODE_VERSION=14.17.3
ENV TRIGGER_REBUILD=1
RUN curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | PROFILE=/dev/null bash \
    && bash -c ". .nvm/nvm.sh \
        && nvm install $NODE_VERSION \
        && nvm alias default $NODE_VERSION \
        && npm install -g typescript yarn node-gyp" \
    && echo ". ~/.nvm/nvm-lazy.sh"  >> /home/gitpod/.bashrc.d/50-node
# above, we are adding the lazy nvm init to .bashrc, because one is executed on interactive shells, the other for non-interactive shells (e.g. plugin-host)
RUN curl https://raw.githubusercontent.com/gitpod-io/workspace-images/master/full/nvm-lazy.sh >> /home/gitpod/.nvm/nvm-lazy.sh \
    && chmod +x+ /home/gitpod/.nvm/nvm-lazy.sh
ENV PATH=$PATH:/home/gitpod/.nvm/versions/node/v${NODE_VERSION}/bin

### Python ###
LABEL dazzle/layer=lang-python
LABEL dazzle/test=tests/lang-python.yaml
RUN sudo install-packages python3-pip

ENV PATH=$HOME/.pyenv/bin:$HOME/.pyenv/shims:$PATH
RUN curl -fsSL https://github.com/pyenv/pyenv-installer/raw/master/bin/pyenv-installer | bash \
    && { echo; \
        echo 'eval "$(pyenv init -)"'; \
        echo 'eval "$(pyenv virtualenv-init -)"'; } >> /home/gitpod/.bashrc.d/60-python \
    && pyenv update \
    && pyenv install 3.8.11 \
    && pyenv global 3.8.11 \
    && python3 -m pip install --no-cache-dir --upgrade pip \
    && python3 -m pip install --no-cache-dir --upgrade \
        setuptools wheel virtualenv pipenv pylint rope flake8 \
        mypy autopep8 pep8 pylama pydocstyle bandit notebook \
        twine \
    && sudo rm -rf /tmp/*


### Rust ###
LABEL dazzle/layer=lang-rust
LABEL dazzle/test=tests/lang-rust.yaml
RUN cp /home/gitpod/.profile /home/gitpod/.profile_orig && \
    curl -fsSL https://sh.rustup.rs | sh -s -- -y --profile minimal --default-toolchain 1.53.0 \
    && .cargo/bin/rustup component add \
        rls \
        rust-analysis \
        rust-src \
        rustfmt \
    && .cargo/bin/rustup completions bash | sudo tee /etc/bash_completion.d/rustup.bash-completion > /dev/null \
    && .cargo/bin/rustup completions bash cargo | sudo tee /etc/bash_completion.d/rustup.cargo-bash-completion > /dev/null \
    && grep -v -F -x -f /home/gitpod/.profile_orig /home/gitpod/.profile > /home/gitpod/.bashrc.d/80-rust
ENV PATH=$PATH:$HOME/.cargo/bin
RUN bash -lc "cargo install cargo-watch cargo-edit cargo-tree"

### PostgresSQL ###
RUN sudo install-packages postgresql-12 postgresql-contrib-12
ENV PATH="$PATH:/usr/lib/postgresql/12/bin"
ENV PGDATA="/workspace/.pgsql/data"
RUN mkdir -p ~/.pg_ctl/bin ~/.pg_ctl/sockets \
 && printf '#!/bin/bash\n[ ! -d $PGDATA ] && mkdir -p $PGDATA && initdb -D $PGDATA\npg_ctl -D $PGDATA -l ~/.pg_ctl/log -o "-k ~/.pg_ctl/sockets" start\n' > ~/.pg_ctl/bin/pg_start \
 && printf '#!/bin/bash\npg_ctl -D $PGDATA -l ~/.pg_ctl/log -o "-k ~/.pg_ctl/sockets" stop\n' > ~/.pg_ctl/bin/pg_stop \
 && chmod +x ~/.pg_ctl/bin/*
ENV PATH="$PATH:$HOME/.pg_ctl/bin"
ENV DATABASE_URL="postgresql://gitpod@localhost"
ENV PGHOSTADDR="127.0.0.1"
ENV PGDATABASE="postgres"
# This is a bit of a hack. At the moment we have no means of starting background
# tasks from a Dockerfile. This workaround checks, on each bashrc eval, if the
# PostgreSQL server is running, and if not starts it. We can proably add this into
# our tasks, probably on the before part for Postgres one.
RUN printf "\n# Auto-start PostgreSQL server.\n[[ \$(pg_ctl status | grep PID) ]] || pg_start > /dev/null\n" >> ~/.bashrc

### Redis ###
# TODO

### Flutter ###
# Note that you cannot emulate Android apps yet because of KVM requirement, but nested birtualization is unsupported in GKE currently
# See Gitpod issue at https://github.com/gitpod-io/gitpod/issues/1273 and also in Google Issue Tracker in general at https://issuetracker.google.com/issues/110507927?pli=1
RUN sudo install-packages libglu1-mesa
RUN set -ex; \
    mkdir ~/development; \
    cd ~/development; \
    git clone --depth 1 https://github.com/flutter/flutter.git -b stable --no-single-branch
ENV PATH="$PATH:/home/gitpod/development/flutter/bin"
RUN set -ex; \
    flutter channel stable; \
    flutter upgrade; \
    flutter precache --android --ios --universal -v

### Docker ###
RUN curl -o /tmp/docker.gpg -fsSL https://download.docker.com/linux/ubuntu/gpg \
    && sudo apt-key add /tmp/docker.gpg \
    && sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" \
    && sudo install-packages docker-ce=5:19.03.15~3-0~ubuntu-focal docker-ce-cli=5:19.03.15~3-0~ubuntu-focal containerd.io \
    # Don't forget to add Gitpod user to the docker Unix group
    && sudo usermod -aG docker gitpod
# slirp4netns for rootless containers
RUN sudo curl -o /usr/bin/slirp4netns -fsSL https://github.com/rootless-containers/slirp4netns/releases/download/v1.1.9/slirp4netns-$(uname -m) \
    && sudo chmod +x /usr/bin/slirp4netns
# Docker Compose
RUN sudo curl -o /usr/local/bin/docker-compose -fsSL https://github.com/docker/compose/releases/download/1.28.5/docker-compose-Linux-x86_64 \
    && sudo chmod +x /usr/local/bin/docker-compose
# https://github.com/wagoodman/dive
RUN curl -o /tmp/dive.deb -fsSL https://github.com/wagoodman/dive/releases/download/v0.10.0/dive_0.10.0_linux_amd64.deb \
    && sudo install-packages /tmp/dive.deb

### ShellCheck/Halolint and other linting tools ###
# scversion can be also "v0.4.7", or "latest", which shuld be changed on build time via
# --build-args flag.
ARG scversion="stable"
# ShellCheck for our Docker image's entrypoint script
RUN set -ex; \
    wget -qO- "https://github.com/koalaman/shellcheck/releases/download/${scversion?}/shellcheck-${scversion?}.linux.x86_64.tar.xz" | tar -xJv -C /tmp; \
    sudo cp "/tmp/shellcheck-${scversion}/shellcheck" /usr/bin/; \
    rm -rfv /tmp/shellcheck-*
# Shell script linting / formatter from our golang build stage
COPY --from=shfmt /go/bin/shfmt /usr/bin/shfmt
# Hadolint is ShellCheck for Dockerfiles, we cannot use Homebrew here.
ARG HADOLINT_VERSION="latest"
RUN set -ex; \
    wget -q "https://github.com/hadolint/hadolint/releases/download/${HADOLINT_VERSION?}/hadolint-Linux-x86_64" -O /tmp/hadolint; \
    sudo mv /tmp/halolint /usr/local/bin/hadolint; sudo chmod +x /usr/bin/hadolint

### Cleanup ###
RUN sudo apt-get clean -y \
    && sudo rm -rfv /var/cache/debconf/* /var/lib/apt/lists/* /tmp/* /var/tmp/*