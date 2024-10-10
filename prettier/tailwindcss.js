import prettierBaseConfig from './base.js';

/**
 * Make sue to install `prettier-plugin-tailwindcss`:
 * @code
 * pnpm add -D prettier-plugin-tailwindcss
 *
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 * */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  ...prettierBaseConfig,
};

export default config;
