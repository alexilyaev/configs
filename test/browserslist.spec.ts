import { expect, test } from 'vitest';
import { lint } from 'browserslist-lint';
import webConfig from '../browserslist/web.cjs';
import nodeMaintainedConfig from '../browserslist/node-maintained.cjs';

test('Web config lints without warnings', async () => {
  const result = lint(webConfig);

  expect(result).toEqual([]);
});

test('Node config lints without warnings', async () => {
  const result = lint(nodeMaintainedConfig);

  expect(result).toEqual([]);
});
