module.exports = {
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "*/tsconfig.json",
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb",
    "prettier",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/jsx-curly-brace-presence": [
      1,
      { props: "never", children: "never" },
    ],
    "react/jsx-filename-extension": [
      1,
      { extensions: [".js", ".jsx", ".ts", ".tsx"] },
    ],
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "import/prefer-default-export": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "no-undef": "off",
      },
    },
  ],
};
