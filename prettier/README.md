# Example config for prettier

Here you can find an example config for prettier.

> Prettier is an opinionated code formatter. It enforces a consistent code style (i.e. code formatting that won’t affect the AST) across your entire codebase because it disregards the original styling by parsing it away and re-printing the parsed AST with its own rules that take the maximum line length into account, wrapping code when necessary. [Prettier](https://prettier.io/)

- [Example config for prettier](#example-config-for-prettier)
  - [Installation](#installation)
    - [IDE Plugins](#ide-plugins)
  - [Useful commands](#useful-commands)
  - [Usage with ESLint](#usage-with-eslint)
  - [Plugins](#plugins)

## Installation

First install prettier with `yarn add -D prettier` and then use the [config]()

### IDE Plugins

- Visual Studio Code: [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- Jetbrains IntelliJ-based: [ESLint](https://plugins.jetbrains.com/plugin/7494-eslint)

## Useful commands

- `yarn eslint . --ext .js,.jsx,.ts,.tsx` to lint the code globally

## Usage with ESLint

If oyu use ESLint, install the [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier#installation) and have a look to the ESLint configs in this repo, which uses prettier, too.

## Plugins

There are some helpful Plugins for other languages you might want to use. The plugins are automatically loaded.

- [PHP](https://github.com/prettier/plugin-php)
- [Pug](https://github.com/prettier/plugin-pug)
- [Ruby](https://github.com/prettier/plugin-ruby)
- [Swift](https://github.com/prettier/plugin-swift)
- [XML](https://github.com/prettier/plugin-xml)

And there are some plugins for sorting your imports:

1. [With a prettier plugin](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports)
2. [With the feature of the TypeScript language service API](https://www.npmjs.com/package/prettier-plugin-organize-imports)
