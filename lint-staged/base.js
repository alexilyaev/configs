/**
 * @code `lint-staged.config.js`:
 * ```
 * export { default } from '@alexilyaev/configs/lint-staged/base.js';
 * ```
 */
const config = {
  '*.{js,cjs,ts,mts,tsx}': [
    'eslint --fix --max-warnings 0',
    'prettier --write',
  ],
  '*.{html,css,json,md,sql}': ['prettier --write'],
};

export default config;
