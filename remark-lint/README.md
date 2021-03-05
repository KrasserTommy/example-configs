# Example remark-lint config

> Ensuring the Markdown you (and contributors) write is of great quality will
> provide better rendering in all the different markdown parsers, and makes sure
> less refactoring is needed afterwards. [remark-lint](https://stylelint.io/)

- [Example remark-lint config](#example-remark-lint-config)
  - [Installation](#installation)
  - [Use with Prettier](#use-with-prettier)
  - [Plugins](#plugins)

## Installation

First install `remark-lint` and the CLI with a preset for usage:

```sh
yarn add -D unified remark-frontmatter remark-retext retext-english retext-syntax-urls retext-spell dictionary-en-us retext-sentence-spacing retext-repeated-words retext-usage remark-preset-lint-consistent remark-preset-lint-recommended remark-preset-lint-markdown-style-guide
```

Then you could use the `.remarkrc.js` config file.

## Use with Prettier

Stylelint could also be used with Prettier with `stylelint-prettier`.
Install the plugin and prettier for usage:

```sh
yarn add -D stylelint-config-prettier stylelint-prettier prettier
```

Then, in your `.stylelintrc.json`:

```sh
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
