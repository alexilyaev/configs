/**
 * @code `lint-staged.config.js`:
 * ```
 * export { default } from '@alexilyaev/configs/lint-staged/base';
 * ```
 */
/**
 * @type {Record<string, string | (filenames: string[]) => string | string[] | Promise<string | string[]>}
 */
const config = {
  '*.{js,cjs,ts,mts,tsx}': [
    'eslint --fix --max-warnings 0',
    'prettier --write',
  ],
  '*.{html,css,json,sql}': ['prettier --write'],
  '*.md': ['prettier --write', 'rumdl check --fix'],
};

export default config;
