# Contributing to HydraLite

We love your input! We want to make contributing as easy and transparent as possible, whether it's:

- Reporting a bug
- Proposing new features
- Discussing the current state of the code
- Submitting a fix
- Coding new features
- Becoming a maintainer

## Geting Started

Make sure you've installed Node.js (Web, API, landing, Discord bot), Python (automation), Rust (CLI) and/or Flutter + Dart (Mobile App) before start hacking/contributing within your local machine, especially if you use [code-server](https://github.com/cdr/code-server) in an PaaS where Dockerfiles are supported.

### Quick Setup for frontend/backend development

To start both the frontend and backend servers:

1. Navigate to the root directory and install dependencies with `yarn` (or `yarn install`)
2. Then, run an intuitive setup procedure with `yarn setup` or manually copy the contents of `api/.env.example` into an new file called `api/.env` and run `yarn setup` to run database migrations.
3. Once Setup is complete, run `yarn dev`

Want to start only a specific part of Hydralite? Run the respective command in that directory!

### Using Docker

To spin up Postgres database, the Redis cache, Redis Insight, the frontend Next.js webapp, and the backend GraphQL API on a local Docker network:

1. Make sure to configure the relevant environment variables in the `api` and `web` components.
2. Navigate to the `docker` directory placed in the root of the project
3. Run `yarn hydralite:start`. This will build, download and run the respective images on your local machine.

We also support running individual components:

- Run `yarn api:start` to start the GraphQL API, Postgres and Redis servers, including Redis Insight.
- Run `yarn web:start` to start the Next.js frontend

Using the `:stop` suffix on any of these commands will stop the running network

### Using Gitpod

1. [Open this repo in Gitpod.io](https://gitpod.io/#github.com/hydralite/hydralite). Sign in using your GItHub account if needed.
2. Start the components you need with either [Docker](#using-docker) or [Normal Mode](#normal-mode)
3. Enjoy Hacking/Coding!

While Node.js/Python (web, API, automation and landing page) and Rust (CLI) development will work flawlessly in Gitpod, Flutter/Dart
development may work but nested virtualization for Android emulators in case of mobile app development isn't supprted in
Google Kubernetes Engine (where Gitpod.io hosted).

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Fork the repo and create your branch from `dev`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes, especially our Commitlint CI which checks if your commit messages complies with Conventional Changelog, and our supported types and scopes.
5. Make sure your code lints.
6. Submit that pull request!

## Report bugs using Github's [issues](https://github.com/hydralite/hydralite/issues)

Momentarily, we use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/hydralite/hydralite/issues); it's that easy!

## Any contributions you make will be under the Apache 2.0 Software License

In short, when you submit code changes, your submissions are understood to be under the same [Apache 2.0 License](LICENSE) that covers the project. Feel free to contact the maintainers if that's a concern.

In the future, we may require users to sign-off their commits in compliance with [Developer's Certificate of Origin](https://developercertificate.org), which you don't need to worry if you run `yarn commit:dco`
(or simply `yarn commit`), or if you're using an IDE editor that supports commit signoffs and
you enabled it (in VS Code, `git.alwaysSignOff` is set to `true` on the project's `.vscode/settings.json`).

If you commit manually using the `git commit` way, add the `--signoff` flag before hitting Enter.

## References

This document was influenced by the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)
