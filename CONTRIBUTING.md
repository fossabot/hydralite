# Contributing to HydraLite

We love your input! We want to make contributing as easy and transparent as possible, whether it's:

- Reporting a bug
- Proposing new features
- Discussing the current state of the code
- Submitting a fix
- Coding new features
- Becoming a maintainer

## Geting Started

### Quick Setup

To start both the web and api servers -

Make sure you've installed Node.js (Web, API, landing, Discord bot), Python (automation), Rust (CLI) and/or Flutter + Dart (Mobile App) before start hacking/contributing within your local machine, especially if you use [code-server](https://github.com/cdr/code-server)

1. Navigate to the root directory and install dependencies with `yarn` (or `yarn install`)
2. Then, run an intuitive setup procedure with `yarn setup`
3. Once Setup is complete, run `yarn dev`

Want to start only a specific part of Hydralite? Run the respective command in that directory!

### Using Docker

To spin up postgres, the redis cache, a GUI for redis, the web-app, and the api on a local docker network -

1. Make sure to configure the relevant environment variables in the `api` and `web` components.
2. Navigate to the `docker` directory placed in the root of the project
3. Run `yarn hydralite:start`. This will build, download and run the respective images on your local machine.

We also support running individual components:

- Run `yarn api:start` to start the api, postgres, redis, and a GUI for redis
- Run `yarn web:start` to start the web app

Using the `:stop` postfix on any of these commands will stop the running network

## We Use [Github Flow](https://guides.github.com/introduction/flow/index.html), So All Code Changes Happen Through Pull Requests

Pull requests are the best way to propose changes to the codebase (we use [Github Flow](https://guides.github.com/introduction/flow/index.html)). We actively welcome your pull requests:

1. Fork the repo and create your branch from `dev`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Report bugs using Github's [issues](https://github.com/hydralite/hydralite/issues)

Momentarily, We use GitHub issues to track public bugs. Report a bug by [opening a new issue](https://github.com/hydralite/hydralite/issues); it's that easy!

## Any contributions you make will be under the Apache 2.0 Software License

In short, when you submit code changes, your submissions are understood to be under the same [Apache 2.0 License](LICENSE) that covers the project. Feel free to contact the maintainers if that's a concern.

## References

This document was influenced by the open-source contribution guidelines for [Facebook's Draft](https://github.com/facebook/draft-js/blob/a9316a723f9e918afde44dea68b5f9f39b7d9b00/CONTRIBUTING.md)
