module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  plugins: ["@typescript-eslint"],
  extends: ["airbnb-typescript", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
    project: "./tsconfig.json",
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

    // @typescript-eslint
    // Use function hoisting to improve code readability
    "@typescript-eslint/no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true, typedefs: true },
    ],
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
    ],
    "@typescript-eslint/strict-boolean-expressions": [
      "warn",
      {
        allowString: false,
        allowNumber: false,
        allowNullableObject: false,
        allowNullableBoolean: false,
        allowNullableString: false,
        allowNullableNumber: false,
        allowAny: false,
      },
    ],

    // React
    // Too restrictive: https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/destructuring-assignment.md
    "react/destructuring-assignment": "off",
    // No jsx extension: https://github.com/facebook/create-react-app/issues/87#issuecomment-234627904
    "react/jsx-filename-extension": "off",
  },
};
