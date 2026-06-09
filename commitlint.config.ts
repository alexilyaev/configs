import type { UserConfig } from '@commitlint/types';

/**
 * @see
 * https://commitlint.js.org/reference/configuration.html
 * https://www.conventionalcommits.org/
 */
const config: UserConfig = {
  // https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
  extends: ['@commitlint/config-conventional'],
};

export default config;
