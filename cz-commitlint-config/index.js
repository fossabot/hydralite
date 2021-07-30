// Shamelessly copied stuff from cz-conventional-changelog's source code through its local copy from node_modules
// Original code licensed under MIT, while customizations are licensed in the same license as the Hydralite code itself.
// See https://github.com/commitizen/cz-conventional-changelog/blob/v3.3.0/index.js for the original code.

"format cjs";

var engine = require("./engine");
var customConfig = require("./customizations.json");
var configLoader = require("commitizen").configLoader;

var config = configLoader.load() || {};
var options = {
  types: config.types || customConfig.types,
  scopes: config.scopes || customConfig.scopes,
  defaultType: process.env.CZ_TYPE || config.defaultType,
  defaultScope: process.env.CZ_SCOPE || config.defaultScope,
  defaultSubject: process.env.CZ_SUBJECT || config.defaultSubject,
  defaultBody: process.env.CZ_BODY || config.defaultBody,
  defaultIssues: process.env.CZ_ISSUES || config.defaultIssues,
  disableScopeLowerCase:
    process.env.DISABLE_SCOPE_LOWERCASE || config.disableScopeLowerCase,
  disableSubjectLowerCase:
    process.env.DISABLE_SUBJECT_LOWERCASE || config.disableSubjectLowerCase,
  maxHeaderWidth:
    (process.env.CZ_MAX_HEADER_WIDTH &&
      parseInt(process.env.CZ_MAX_HEADER_WIDTH)) ||
    config.maxHeaderWidth ||
    100,
  maxLineWidth:
    (process.env.CZ_MAX_LINE_WIDTH &&
      parseInt(process.env.CZ_MAX_LINE_WIDTH)) ||
    config.maxLineWidth ||
    100,
};

(function (options) {
  try {
    var commitlintLoad = require("@commitlint/load");
    commitlintLoad().then(function (clConfig) {
      if (clConfig.rules) {
        var maxHeaderLengthRule = clConfig.rules["header-max-length"];
        if (
          typeof maxHeaderLengthRule === "object" &&
          maxHeaderLengthRule.length >= 3 &&
          !process.env.CZ_MAX_HEADER_WIDTH &&
          !config.maxHeaderWidth
        ) {
          options.maxHeaderWidth = maxHeaderLengthRule[2];
        }
      }
    });
  } catch (err) {}
})(options);

module.exports = engine(options);
