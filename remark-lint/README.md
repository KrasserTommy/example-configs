# Example remark-lint config

> Ensuring the Markdown you (and contributors) write is of great quality will
> provide better rendering in all the different markdown parsers, and makes sure
> less refactoring is needed afterwards. [remark-lint](https://stylelint.io/)

- [Example remark-lint config](#example-remark-lint-config)
  - [Installation](#installation)

## Installation

First install `remark-lint` and the CLI with a preset for usage:

```sh
yarn add -D unified remark-frontmatter remark-retext retext-english retext-syntax-urls retext-spell dictionary-en-us retext-sentence-spacing retext-repeated-words retext-usage remark-preset-lint-consistent remark-preset-lint-recommended remark-preset-lint-markdown-style-guide
```

Then you could use the `.remarkrc.js` config file.
