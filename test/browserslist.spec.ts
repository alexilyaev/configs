import { lint } from 'browserslist-lint';
import { expect, test } from 'vitest';
import nodeMaintainedConfig from '../browserslist/node-maintained.cjs';
import webConfig from '../browserslist/web.cjs';

test('Web config lints without warnings', () => {
  const result = lint(webConfig);

  expect(result).toEqual([]);
});

test('Node config lints without warnings', () => {
  const result = lint(nodeMaintainedConfig);

  expect(result).toEqual([]);
});
