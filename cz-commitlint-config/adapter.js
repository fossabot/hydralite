#!/usr/bin/env node

// This is the custom adapter Andrei Jiroh wrote so customizations to the cz-conventional-changelog
// will be applied when using the Commitizen CLI through 'yarn commit:*' or the globally-installed one through npmjs.
// Currently, we're just calling cz-conventional-changelog for now, but in the future, we'll add our custom types,
// and possibliy our scopes from Commitlint configuration.

"use strict";

const path = require("path");
const bootstrap = require("commitizen/dist/cli/git-cz").bootstrap;

bootstrap({
  cliPath: path.join(__dirname, "../node_modules/commitizen"),
  config: {
    path: "cz-conventional-changelog",
  },
});
