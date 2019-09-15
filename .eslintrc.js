const OFF = 0;
const WARNING = 1;
const ERROR = 2;

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
    "react-native/react-native": true
  },
  root: true,
  plugins: ["import", "react", "react-native"],
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
  },
  rules: {
    "no-console": [ERROR, { allow: ["warn", "error"] }],
    "react/prop-types": OFF,
    "react/display-name": OFF,
    "quotes": [ERROR, "single"],
    "indent": [ERROR, 2],
    "react-native/no-unused-styles": ERROR,
    "prefer-const": ERROR,
    "no-var": ERROR,
    "no-multiple-empty-lines": ERROR,
    "lines-between-class-members": ERROR,
    "arrow-parens": [ERROR, "as-needed", { "requireForBlockBody": true }],
    "max-len": [ERROR, {
      "code": 80, "ignoreComments": true, "ignoreUrls": true }],
    "semi": [ERROR, "always", { "omitLastInOneLineBlock": true }]
  }
};
