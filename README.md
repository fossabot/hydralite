# Welcome to Hydralite

![SemVer - API Version](https://img.shields.io/badge/version-1.0.0--pre--alpha-ff69b4)
![LOC](https://img.shields.io/tokei/lines/github/hydralite/hydralite?color=white&label=lines%20of%20code)
![Top Language](https://img.shields.io/github/languages/top/hydralite/hydralite?color=%230xfffff)
![Repo Size](https://img.shields.io/github/repo-size/hydralite/hydralite?color=orange)

## What Is Hydralite?

Hydralite is an open-source, next-generation project marketing and management platform that uses a platform-specific "currency" called Hydra, which enables you to build a vast community around your product using an algorithmic, promotional feed of content, as well as to conduct your software effectively with an intuitive, one-of-a-kind product management framework.

## Project Components

- [`web`](./web)</a> - frontend Next.js web app
- [`api`](./api) - GraphQL API/backend
- [`cli`](./cli) - CLI
- [`hydrabot`](./hydrabot) - Hydralite Discord Bot
- [`landing`](./landing) - Landing Page
- [`mobile`](./mobile) - Flutter mobile app
- [`cz-commitlint-config`](./cz-commitlint-config) - custom types based on `@commitlint/conventional` NPM package and our custom Commitizen adapter based on `cz-conventional-changelog`
- [`repo:prototypes`](https://github.com/hydralite/prototypes) - Prototypes

## Quick Start for Development

Although we highly recommend reading <a href="https://github.com/hydralite/hydralite/blob/dev/CONTRIBUTING.md">the contributing guidelines/docs</a>, here's the fastest way to get started.

Make sure you've installed Node.js (Web, API, landing, Discord bot), Python (automation), Rust (CLI) and/or Flutter + Dart (Mobile App) before start hacking/contributing within your local machine, especially if you use [code-server](https://github.com/cdr/code-server) in an PaaS where Dockerfiles are supported.

To start both the frontend webapp and the GraphQL API backend servers:

1. Navigate to the root directory and install dependencies with `yarn` (or `yarn install`)
2. Then, run an intuitive setup procedure with `yarn setup`
3. Once Setup is complete, run `yarn dev`

**Other Ways To Get Started:**

- [With Docker](https://github.com/hydralite/hydralite/blob/dev/CONTRIBUTING.md#using-docker)
- [On Gitpod](https://github.com/hydralite/hydralite/blob/dev/CONTRIBUTING.md#using-gitpod)
