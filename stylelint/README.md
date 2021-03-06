# Example stylelint config

> A mighty, modern linter that helps you avoid errors and enforce conventions in your styles. [stylelint](https://stylelint.io/)

- [Example stylelint config](#example-stylelint-config)
  - [Installation](#installation)
  - [Use with Prettier](#use-with-prettier)
  - [Plugins](#plugins)

## Installation

First install stylelint and the standard configuration:

```sh
yarn add -D stylelint stylelint-config-recommended
```

Then you can use the `.stylelintrc.json` in your project.

## Use with Prettier

Stylelint could also be used with Prettier with `stylelint-prettier`.
Install the plugin and prettier for usage:

```sh
yarn add -D stylelint-config-prettier stylelint-prettier prettier
```

Then, in your `.stylelintrc.json`:

```json
{
  "plugins": ["stylelint-prettier"],
  "rules": {
    "prettier/prettier": true
  }
}
```

## Plugins

Useful Plugins could be added, too:

- [Order properties](https://github.com/hudochenkov/stylelint-order)
- [SCSS](https://github.com/kristerkari/stylelint-scss)
- [SCSS Guidelines](https://github.com/bjankord/stylelint-config-sass-guidelines)
- [styled components](https://github.com/styled-components/stylelint-processor-styled-components)
- [styled components config](https://github.com/styled-components/stylelint-config-styled-components)
