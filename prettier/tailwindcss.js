import prettierBaseConfig from './base.js';

/**
 * Make sue to install `prettier-plugin-tailwindcss`:
 * @code
 * pnpm add -D prettier-plugin-tailwindcss
 *
 * @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions}
 * */
const config = {
  ...prettierBaseConfig,
  plugins: [...prettierBaseConfig.plugins, 'prettier-plugin-tailwindcss'],
};

export default config;
