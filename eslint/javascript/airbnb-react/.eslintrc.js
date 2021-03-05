module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",
    // Use function hoisting to improve code readability
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],
    // Too restrictive for some developers
    "prefer-destructuring": "off",

    // import
    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",

    // JSX-a11y
    // disable need for key events
    "jsx-a11y/click-events-have-key-events": "off",

    // React
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    "react/jsx-filename-extension": "off",
    // default: "error"; Sometimes it's hard to specify an unique key, and sometimes it's not even needed when no manipulation of the array
    "react/jsx-key": "warn",
    // allow prop spreading
    "react/jsx-props-no-spreading": "off",
  },
};
