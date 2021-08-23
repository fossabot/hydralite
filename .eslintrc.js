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
    "react/prop-types": "off",
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
  },
};
