// Shamelessly copied stuff from cz-conventional-changelog's source code through its local copy from node_modules
// Original code licensed under MIT, while customizations are licensed in the same license as the Hydralite code itself.
// See https://github.com/commitizen/cz-conventional-changelog/blob/v3.3.0/engine.js for the original code.

"format cjs";

const wrap = require("word-wrap");
const map = require("lodash.map");
const longest = require("longest");
const chalk = require("chalk");

const filter = function (array) {
  return array.filter((x) => x);
};

const headerLength = function (answers) {
  return (
    answers.type.length + 2 + (answers.scope ? answers.scope.length + 2 : 0)
  );
};

const maxSummaryLength = function (options, answers) {
  return options.maxHeaderWidth - headerLength(answers);
};

const filterSubject = function (subject, disableSubjectLowerCase) {
  subject = subject.trim();
  if (
    !disableSubjectLowerCase &&
    subject.charAt(0).toLowerCase() !== subject.charAt(0)
  ) {
    subject =
      subject.charAt(0).toLowerCase() + subject.slice(1, subject.length);
  }
  while (subject.endsWith(".")) {
    subject = subject.slice(0, subject.length - 1);
  }
  return subject;
};

// This can be any kind of SystemJS compatible module.
// We use Commonjs here, but ES6 or AMD would do just
// fine.
module.exports = function (options) {
  const { types } = options;
  const scopes = Object.keys(options.scopes);

  const length = longest(Object.keys(types)).length + 1;
  const choicesTypes = map(types, (type, key) => ({
    name: `${`${key}:`.padEnd(length)} ${type.description}`,
    value: key,
  }));

  return {
    // When a user runs `git cz`, prompter will
    // be executed. We pass you cz, which currently
    // is just an instance of inquirer.js. Using
    // this you can ask questions and get answers.
    //
    // The commit callback should be executed when
    // you're ready to send back a commit template
    // to git.
    //
    // By default, we'll de-indent your commit
    // template and will keep empty lines.
    prompter(cz, commit) {
      // Let's ask some questions of the user
      // so that we can populate our commit
      // template.
      //
      // See inquirer.js docs for specifics.
      // You can also opt to use another input
      // collection library if you prefer.

      // import lodash and fuzzy for our autocompletion and fuzzy search stuff
      const _ = require("lodash");
      const fuzzy = require("fuzzy");

      // when using Inquirer.js, which is the default in Commitizen, change inquirer to cz
      cz.registerPrompt(
        "autocomplete",
        require("inquirer-autocomplete-prompt")
      );

      function searchScopes(answers, input) {
        input = input || "";
        return new Promise((resolve) => {
          setTimeout(() => {
            const fuzzyResult = fuzzy.filter(input, scopes);
            const results = fuzzyResult.map((el) => el.original);

            results.splice(5, 0, new cz.Separator());
            results.push(new cz.Separator());
            resolve(results);
          }, _.random(30, 500));
        });
      }
      cz.prompt([
        {
          type: "list",
          name: "type",
          message: "Select the type of change that you're committing:",
          choices: choicesTypes,
          default: options.defaultType,
        },
        {
          // instead of an input, we'll show an list of scopes in either Commitizen config or the adapter's defaults for the user to choose.
          type: "autocomplete",
          name: "scope",
          message:
            "Select the scope of change that you're commiting (check project's Commitizen configuration or this adapter's default ones on its package README for details):",
          searchText: "Looking up for supported scopes...",
          emptyText:
            "Looks like that scope doesn't exist in either the Commitizen configuration or the adapter's defaults",
          source: searchScopes,
          default: options.defaultScope,
          pageSize: 6,
        },
        {
          type: "input",
          name: "subject",
          message(answers) {
            return `Write a short, imperative tense description of the change (max ${maxSummaryLength(
              options,
              answers
            )} chars):\n`;
          },
          default: options.defaultSubject,
          validate(subject, answers) {
            const filteredSubject = filterSubject(
              subject,
              options.disableSubjectLowerCase
            );
            return filteredSubject.length == 0
              ? "Commit subject is required"
              : filteredSubject.length <= maxSummaryLength(options, answers)
              ? true
              : `Subject length must be less than or equal to ${maxSummaryLength(
                  options,
                  answers
                )} characters. Current length is ${
                  filteredSubject.length
                } characters.`;
          },
          transformer(subject, answers) {
            const filteredSubject = filterSubject(
              subject,
              options.disableSubjectLowerCase
            );
            const color =
              filteredSubject.length <= maxSummaryLength(options, answers)
                ? chalk.green
                : chalk.red;
            return color(`(${filteredSubject.length}) ${subject}`);
          },
          filter(subject) {
            return filterSubject(subject, options.disableSubjectLowerCase);
          },
        },
        {
          type: "input",
          name: "body",
          message:
            "Provide a longer description of the change: (press enter to skip)\n",
          default: options.defaultBody,
        },
        {
          type: "confirm",
          name: "isBreaking",
          message: "Are there any breaking changes?",
          default: false,
        },
        {
          type: "input",
          name: "breakingBody",
          default: "-",
          message:
            "A BREAKING CHANGE commit requires a body. Please enter a longer description of the commit itself:\n",
          when(answers) {
            return answers.isBreaking && !answers.body;
          },
          validate(breakingBody, answers) {
            return (
              breakingBody.trim().length > 0 ||
              "Body is required for BREAKING CHANGE"
            );
          },
        },
        {
          type: "input",
          name: "breaking",
          message: "Describe the breaking changes:\n",
          when(answers) {
            return answers.isBreaking;
          },
        },

        {
          type: "confirm",
          name: "isIssueAffected",
          message: "Does this change affect any open issues?",
          default: !!options.defaultIssues,
        },
        {
          type: "input",
          name: "issuesBody",
          default: "-",
          message:
            "If issues are closed, the commit requires a body. Please enter a longer description of the commit itself:\n",
          when(answers) {
            return (
              answers.isIssueAffected && !answers.body && !answers.breakingBody
            );
          },
        },
        {
          type: "input",
          name: "issues",
          message:
            'Add issue references (e.g. "fix #123", "re #123", it\'s recommended to use the full issue link to avoid link breakage, especially on hard forks and repo mirrors):\n',
          when(answers) {
            return answers.isIssueAffected;
          },
          default: options.defaultIssues ? options.defaultIssues : undefined,
        },
      ]).then((answers) => {
        const wrapOptions = {
          trim: true,
          cut: false,
          newline: "\n",
          indent: "",
          width: options.maxLineWidth,
        };

        // parentheses are only needed when a scope is present
        const scope = answers.scope ? `(${answers.scope})` : "";

        // Hard limit this line in the validate
        const head = `${answers.type + scope}: ${answers.subject}`;

        // Wrap these lines at options.maxLineWidth characters
        const body = answers.body ? wrap(answers.body, wrapOptions) : false;

        // Apply breaking change prefix, removing it if already present
        let breaking = answers.breaking ? answers.breaking.trim() : "";
        breaking = breaking
          ? `BREAKING CHANGE: ${breaking.replace(/^BREAKING CHANGE: /, "")}`
          : "";
        breaking = breaking ? wrap(breaking, wrapOptions) : false;

        const issues = answers.issues
          ? wrap(answers.issues, wrapOptions)
          : false;

        commit(filter([head, body, breaking, issues]).join("\n\n"));
      });
    },
  };
};
