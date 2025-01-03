/**
 * @see
 * https://prettier.io/docs/en/options.html
 *
 * - These are the default values for Prettier 3.x
 *   Except for `singleQuote`, because double quotes are not fun.
 * - These defaults were chosen and updated by Prettier based on the most common
 *   usages in the community. We should aim to follow them as much as possible.
 *
 * Special notes:
 * - `printWidth` - Read this:
 *   https://prettier.io/docs/en/options.html#print-width
 */

/**
 * @type {import('prettier').Config}
 */
const config = {
  arrowParens: 'always',
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: 'lf',
  htmlWhitespaceSensitivity: 'css',
  jsxSingleQuote: false,
  printWidth: 80,
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  semi: true,
  singleAttributePerLine: false,
  // default: false
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  plugins: [],

  overrides: [
    {
      files: '*.snap',
      options: {
        printWidth: 200,
      },
    },
  ],
};

export default config;
