import { expect, test } from 'vitest';
import { lint } from 'browserslist-lint';
import webConfig from './web.cjs';
import nodeConfig from './node.cjs';

test('Web config lints without warnings', async () => {
  const result = lint(webConfig);

  expect(result).toEqual([]);
});

test('Node config lints without warnings', async () => {
  const result = lint(nodeConfig);

  expect(result).toEqual([]);
});
