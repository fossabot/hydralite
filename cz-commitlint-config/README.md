# Commitizen/Commitlint Configuration for HydraLite

This is where our customized Commitizen adapter to [`cz-conventional-changelog`](https://github.com/commitizen/cz-conventional-changelog) and also where our accepted types and scopes for Commitlint CI to pass.

## Usage

### As standalone package

> :warning: **This package isn't yet published on npm registry!** We just leave this in case we're published this in the future.

1. Make your repository Commitizen-friendly first if not yet. If your repository is Commitizen-friendly and uses `cz-conventional-changelog` adapter,
   you can switch to this package without breaking anything.

```sh
# Install Commitizen globally first. If you get an EACCESS error, use Node Version manager instead or prefix sudo or run it as root.
npm i -g commitizen

# Install our adapter. If you use Yarn instead, add --yarn flag.
# Or if you want to swap out your current adapter with ours, add --force
# flag also.
commitizen init @hydralite/cz-commitlint-config --save-dev
```

2. Configure Commitizen as needed. See the Coniguration section below for supported environment variables and config keys.

3. Add the following scripts to `package.json`.

```json5
{
  // your stuff above here
  scripts: {
    // we added the signoff Git commit flag since we assume you
    // need DCO compliance instead of having new contributors to sign CLAs
    commit: "cz --signoff",
  },
  // your stuff below here
}
```

4. Stage changes and test with `yarn commit`. If its works, ship it anyway.

### In Hydralite

1. Right after cloning Hydralite and navigating into your local repository through `cd`, install the dependencies using `yarn` (shortcut for `yarn install`).
2. Work on your new features/CI stuff/documentation writing on an seperate branch with `git switch -c <your-username>/<chore> origin/dev`, assuming `origin/dev` points to either the upstream repo or your GitHub fork.
3. When you're ready, stage all and commit anyway with `yarn commit:stage-all` or pick which to stage first then run `yarn commit` (shortcut for the `commit:dco` script in the global `package.json` at project root) to call the custom adapter.
4. Follow prompts, such as:

- selecting an type of commit and its scope (see below for supported types and scopes so Commitlint CI will go green when you push)
- typing the commit subject
- optionally input the commit body
- if yes, describe any breaking changes (ONLY DO THIS on new major versions, doing breaking changes at minor versions might cause downtime to users when deployed straight to production)
- if yes, pasting the GitHub/GitLab SaaS issue link (entering just the issue number may break on cross-platform basis)

5. Push your commits to your branch/fork on GitHub/GitLab SaaS with `git push origin <branch-name-here>`. Remember to keep your branch up-to-date with the upstream with `git fetch --all && git pull upstream dev`.
6. Repeat steps 2-5, until you're done with your work, in which you can now submit an pull request.

## Configuration

Like commitizen, you specify the configuration of @hydralite/cz-commitlint-config through the package.json's `config.commitizen` key.

```json5
{
  // ...  default values
  config: {
    commitizen: {
      path: "./node_modules/@hydralite/cz-commitlint-config",
      disableScopeLowerCase: false,
      disableSubjectLowerCase: false,
      maxHeaderWidth: 100,
      maxLineWidth: 100,
      defaultType: "",
      defaultScope: "",
      defaultSubject: "",
      defaultBody: "",
      defaultIssues: "",
      types: {
        // Full JSON list at customizations.json file
        feat: {
          description: "A new feature",
          title: "Features",
        },
        // your config here...
      },
      scopes: {
        // Full JSON list at customizations.json file
        global: {
          description: "Global project-level changes that affects all components",
          title: "Global Changes",
        },
        // your config here...
      },
    },
  },
  // ...
}
```

### Environment variables

The following environment varibles can be used to override any default configuration or package.json based configuration. Most of these are
inherited from the upstream package.

- CZ_TYPE = defaultType
- CZ_SCOPE = defaultScope
- CZ_SUBJECT = defaultSubject
- CZ_BODY = defaultBody
- CZ_MAX_HEADER_WIDTH = maxHeaderWidth
- CZ_MAX_LINE_WIDTH = maxLineWidth

### Commitlint

If using [Commitlint](https://github.com/conventional-changelog/commitlint) in combination with Commitizen or as part of your CI, the "maxHeaderWidth" configuration property will default to the configuration of the "header-max-length" rule instead of the hard coded value of 100. This can be ovewritten by setting the 'maxHeaderWidth' configuration in package.json or the CZ_MAX_HEADER_WIDTH environment variable.

## Reference

> This list might be outdated as we add new ones and deprecate/remove some in the future, so please consult [our customizations JSON file](./customizations.json).

### Types

- **feat** - A new feature, can be also improvement to an existing feature
- **fix** - A bug fix, especially fix security vunleabilities.
- **docs** - Documentation-only changes
- **style** - Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- **refractor** - A code change that neither fixes a bug nor adds a feature, usually rewriting code and cleanup old, unused stuff
- **perf** - Performance improvements and optmizations
- **test** - Adding missing tests or correcting existing ones
- **build** - Changes that affect the build system or external dependencies. For dependency upgrades and changes to the lockfiles, use the `chore` type instead.
- **ci** - Changes to Ci configuration files and scripts (e.g. GitHub Actions, GitLab CI/CD, Wreft)
- **chore** - Other changes that don't modify either src or test files
- **revert** - Reverts a previous fix, action, or commit
- **merge** - Usually reserved for merge commits after pulling changes from upstream and fix any conflicts.

### Scopes

- **global** - project-wide changes, includes changes to project's `.editorconfig` and `.vscode/settings.json`
- **api** - backend code
- **landing** - landing page for Hydralite
- **automation** - automation scripts, usually scrapping stuff from Stack Overflow
- **mobile** - frontend Flutter mobile app, written in Dart
- **prototype** - technical prototypes for future Hydralite features, should be moved to [the prototypes repo](https://github.com/hydralite/prototypes) instead
- **web** - frontend Next.js webapp
- **hydrabot** - Discord bot and GitHub app server, documentation for the seperate bot account is available in [hydralitebot's README repository](https://github.com/hydralitebot/hydralitebot)
- **docker** - Dockerfiles and Docker Compose stuff
- **gitpod** - Gitpod configuration and custom workspace Dockerfile
- **devcontainer** - configuration files and Dockerfile for VS Code's Remote - Dev Containers and GitHub Codespaces
- **docs** - catch-all basin in case the `docs` type isn't being used in an commit
- **contributing-guide** - [`CONTRIBUTING.md`](../CONTRIBUTING.md) file
- **meta** - project governance, code of conduct, other sort of meta stuff
- **commitlint** - [`commitlint.config.js`](../commitlint.config.js) and [our Custom Types JSON file](./custom-types.json)
- **issue-templates** - Issue templates for GitHub and GitLab SaaS
- **prettier** - Prettier configuration and ignore files
- **assets** - logos, backgrounds, screenshots
- **github-actions**, **actions**, **gh-actions** - changes to GitHub Actions workflow files
- **gitlab-ci** - changes to `.gitlab-ci.yml` and related files for GitLab CI/CD, currently reserved just in case Hydralite switch to GitLab in the future
- **deps-dev**, **deps-peer**, **deps-optional**, **deps** - Mostly automated dependency upgrades by Dependabot for npmjs/Yarnpkg

* **lockfiles** - changes to the lockfiles, such as [`yarn.lock`] and [`Cargo.lock` in Hydralite CLI](../cli/Cargo.lock)
* **pr**, **mr**, **pull-request**, **merge-request** - GitHub / GitLab terms for pull requests when merged from the web UI/API, this may also applied if you used `git merge` way in command line.
* **git-pull** - the legendary `git pull upstream dev` command
