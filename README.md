# Welcome to Hydralite

<p>
  <img src="https://img.shields.io/badge/version-1.0.0--pre--alpha-ff69b4"> <img src="https://img.shields.io/tokei/lines/github/hydralite/hydralite?color=white&label=lines%20of%20code"> <img src="https://img.shields.io/github/languages/top/hydralite/hydralite?color=%230xfffff"> <img src="https://img.shields.io/github/repo-size/hydralite/hydralite?color=orange">
</p>

## About

Hydralite is a one-of-a-kind, open-source project management and discovery platform that enforces credit-based project discovery and a obtains a minimalist project management system.

## Why Hydralite?

Hydralite is a system that steers away from typical scrum methodology and adopts a state-of-the-art, intuitive system, but throws in project discovery, tight integration, developer outsourcing, soft releases, one click code deployments, seamless crowdsourced feedback collection, and loads more, into the mix.

## Structure

<a href="https://github.com/hydralite/hydralite/tree/dev/web">`web`</a> - Web App <br>
<a href="https://github.com/hydralite/hydralite/tree/dev/api">`api`</a> - GraphQL Api <br>
<a href="https://github.com/hydralite/hydralite/tree/dev/cli">`cli`</a> - CLI <br>
<a href="https://github.com/hydralite/hydralite/tree/dev/bot">`bot`</a> - Discord Bot <br>
<a href="https://github.com/hydralite/hydralite/tree/dev/landing">`landing`</a> - Landing Page <br>
<a href="https://github.com/hydralite/hydralite/tree/dev/mobile">`mobile`</a> - Mobile <br>
<a href="https://github.com/hydralite/prototypes">`repo:prototypes`</a> - Prototypes

## Getting Started

### Local Development

Make sure you installed Node.js (web, API, landing, Discord bot), Python (automation), Rust (CLI) and/or Flutter + Dart (mobile
client app) before start hacking/contributing within your local machine, especially if you use [code-server](https://github.com/cdr/code-server)
within an Dockerized development environment or in an VPS. Our setup script will only install Yarn for you to get started with the
webapp and GraphQL API develpment.

* After cloning, install dependencies with `yarn` (or `yarn install`). Then run the setup process with `yarn setup`.
* Once Prisma-generated files are ready and database migrations has been finished (if you forget to create `api/.env` file), run `yarn dev` in the root directory to start the API and web servers.

### In Gitpod

- [Open this repo in Gitpod.io](https://gitpod.io/#github.com/hydralite/hydralite). Sign in using your GItHub account if needed.
- Once the API and web servers are up in development mode, enjoy hacking/coding.

While Node.js/Python (web, API, automation and landing page) and Rust (CLI) development will work flawlessly in Gitpod, Flutter/Dart
development may work but nested virtualization for Android emulators in case of mobile app development isn't supprted in
Google Kubernetes Engine (where Gitpod.io hosted).
