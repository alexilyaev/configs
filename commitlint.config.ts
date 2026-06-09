/**
 * @see
 * https://www.conventionalcommits.org/
 * https://commitlint.js.org/reference/configuration.html
 */

import type { UserConfig } from '@commitlint/types';

const config: UserConfig = {
  // https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional
  extends: ['@commitlint/config-conventional'],
};

export default config;
