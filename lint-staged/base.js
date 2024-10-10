const config = {
  '*.{js,cjs,ts,mts,tsx}': [
    'eslint --fix --max-warnings 0',
    'prettier --write',
  ],
  '*.{html,css,json,md}': ['prettier --write'],
};

export default config;
