module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'global',
        'api',
        'landing',
        'automation',
        'mobile',
        'prototype',
        'web',
        'hydrabot',
        'docker',
        'gitpod',
        'devcontainer',
      ],
    ],
  },
};
