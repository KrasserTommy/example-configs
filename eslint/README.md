# ESLint config examples for JS, TS and React

You can find some example configs for ESLint here. The configs uses also plugins for `import` and in the case of React included `jsx-a11y`, `react` and `react-hooks`.

> ESLint is a tool for identifying and reporting on patterns found in ECMAScript/JavaScript code, with the goal of making code more consistent and avoiding bugs. [eslint.org](https://eslint.org/)

- [ESLint config examples for JS, TS and React](#eslint-config-examples-for-js-ts-and-react)
  - [Usage](#usage)
    - [IDE Plugins](#ide-plugins)
  - [Useful commands](#useful-commands)
  - [Useful plugins](#useful-plugins)
    - [Jest](#jest)
    - [Node](#node)
    - [Promises](#promises)
    - [Unicorn](#unicorn)
    - [css-modules](#css-modules)
    - [eslint-comments](#eslint-comments)
    - [Recent Plugins](#recent-plugins)
  - [Further reading](#further-reading)

## Usage

Use the config for your project. There are following configs included:

- [Javascript with Airbnb](javascript/airbnb/README.md)
- [Javascript React with Airbnb](javascript/airbnb-react/README.md)
- [Typescript](typescript/typescript-eslint/typescript-eslint/README.md)
- [Typescript React](typescript/typescript-eslint/typescript-eslint-react/README.md)
- [Typescript with Airbnb](typescript/airbnb/airbnb/README.md)
- [Typescript React with Airbnb](typescript/airbnb/airbnb-react/README.md)

### IDE Plugins

- Visual Studio Code: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Jetbrains IntelliJ-based: [ESLint](https://plugins.jetbrains.com/plugin/7494-eslint)

## Useful commands

- `yarn eslint . --ext .js,.jsx,.ts,.tsx` to lint the code globally

## Useful plugins

There are some useful extensions for specific cases you could use:

### Jest

Install the plugin:

```
yarn add --dev eslint-plugin-jest
```

Then add this to your `.eslintrc.js`

```
{
  "extends": ["plugin:jest/recommended"]
}
```

### Node

Install the plugin:

```
yarn add --dev eslint-plugin-node
```

Then add this to your `.eslintrc.js`

```
{
"extends": ["plugin:node/recommended"]
}
```

and this to your `package.json` (an example):

```
"engines": {
    "node": ">=8.10.0"
}
```

### Promises

Install the plugin:

```
yarn add --dev eslint-plugin-promise
```

Then add this to your `.eslintrc.js`

```
{
  "extends": ["plugin:promise/recommended"]
}
```

### Unicorn

The Unicorn Plugin has some very useful ESLint rules included for better code quality:

Install the plugin:

```
yarn add --dev eslint-plugin-unicorn
```

Then add this to your `.eslintrc.js`

```
{
  "extends": ["plugin:unicorn/recommended"]
}
```

### css-modules

The Unicorn Plugin has some very useful ESLint rules included for better code quality:

Install the plugin:

```
yarn add --dev eslint-plugin-css-modules
```

Then add this to your `.eslintrc.js`

```
{
  "plugins": [
    "css-modules"
  ],
  "extends": [
    "plugin:css-modules/recommended"
  ]
}
```

### eslint-comments

The eslint-comments plugin include additional rules for ESLint directive comments

Install the plugin:

```
yarn add --dev eslint-plugin-eslint-comments
```

Then add this to your `.eslintrc.js`

```
{
  "extends": [
        "plugin:eslint-comments/recommended"
  ]
}
```

### Recent Plugins

There are a lot of more plugins, which could be helpful. They uses a hacky way sometimes:

- [Lint HTML inline scripts](https://www.npmjs.com/package/eslint-plugin-html)
- [Lint JSON files - the hacky way](https://www.npmjs.com/package/eslint-plugin-json)
- [Process php markup - the hacky way](https://www.npmjs.com/package/eslint-plugin-php-markup)
- [Lint browser compatibily](https://www.npmjs.com/package/eslint-plugin-compat)
- [Check tagged query strings against GraphQL schema](https://www.npmjs.com/package/eslint-plugin-graphql)
- [Lint inline scripts in Pug files](https://www.npmjs.com/package/eslint-plugin-pug)
- [Add support of PugJS in react](https://www.npmjs.com/package/eslint-plugin-react-pug)
- [SVG Rules for react](https://www.npmjs.com/package/eslint-plugin-react-svg)
- [Lint YAML files](https://www.npmjs.com/package/eslint-plugin-yml)
- [Linting rules for JSDoc](https://www.npmjs.com/package/eslint-plugin-jsdoc)
- [Lint TSDoc comments](https://www.npmjs.com/package/eslint-plugin-tsdoc)
- [Lint styled components](https://www.npmjs.com/package/eslint-plugin-styled-components-a11y)

## Further reading

- [ESLint](https://eslint.org/docs/user-guide/configuring)
- [Typescript-ESLint](https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/README.md#configuration)
- [ESLint-Plugin-React](https://github.com/yannickcr/eslint-plugin-react#configuration)
- [Prettier with linters](https://prettier.io/docs/en/integrating-with-linters.html)
