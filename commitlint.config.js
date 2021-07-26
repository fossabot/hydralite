/* We want to customize the defaults in @commitlint/config-conventional, so
 * our Commitlint CI doesn't complain about "merge(pr|git-pull): ..." in the future
 */
const conventionalCommit = require('./cz-commitlint-config/custom-types.json');
const typesEnum = Object.keys(conventionalCommit.types);

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
        2,
        "always",
        typesEnum
    ],
    "scope-enum": [
      2,
      "always",
      [
        "global", // project-wide stuff, README included
        "api", // backend
        "landing", // landing page
        "automation", // automation scripts
        "mobile", // Flutter mobile app
        "prototype", // prototypes
        "web", // frontend
        "hydrabot", // Discord bot/GitHub App
        "docker", // Docker Compose, Docckerfiles
        "gitpod", // Gitpod
        "devcontainer", // devcontainer dir
        "docs", // just in case you didn't use docs type. if used the docs type, DO NOT USE THIS SCOPE
        "contributing-guide", // CONTRIBUTING.md
        "meta", // code of conduct, other sort of meta stuff. sometimes, README and CONTRIBUTING.md may fall into this in some cases
        "commitlint", // Commitlint stuff, especially this file OwO
        "commitizen", // Commitizen stuff
        "issue-templates", // Issue templates
        "prettier", // prettierr, prettierignore
        "assets", // images, logos, screenshots
        "github-a tions", "actions", "gh-actions", // GitHub Actions
        "gitlab-ci", // GitLab CI/CD
        "deps-dev", "deps-peer", "deps-optional", "deps", // Dependabot stuff
        "lockfiles", // yarn.loommitik and Cargo.lock
        "pr", "mr", "pull-request", "merge-request", // GitHub/GitLab stuff for pull requests
        "git-pull" // the legendary 'git pull upstream dev'
      ],
    ],
  },
};
