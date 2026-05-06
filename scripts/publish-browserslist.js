import { execSync } from 'node:child_process';
import process from 'node:process';

const TAG_PREFIX = 'browserslist-v';
const run = (cmd, opts = {}) => execSync(cmd, { stdio: 'inherit', ...opts });
const out = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim();

function publish() {
  run(`npm version patch --tag-version-prefix=${TAG_PREFIX}`, {
    cwd: 'browserslist',
  });
  run('npm publish', { cwd: 'browserslist' });
  run('git push --follow-tags');
}

let lastTag;

try {
  lastTag = out(`git describe --tags --match '${TAG_PREFIX}*' --abbrev=0`);
} catch {
  process.stderr.write(
    `No prior ${TAG_PREFIX}* tag found; proceeding with publish.\n`,
  );
}

try {
  if (lastTag) {
    try {
      execSync(`git diff --quiet ${lastTag} -- browserslist`);
      process.stdout.write(
        `No changes in browserslist/ since ${lastTag}; skipping publish.\n`,
      );
    } catch {
      process.stderr.write(`Changes detected since ${lastTag}; publishing.\n`);
      publish();
    }
  } else {
    publish();
  }
} catch (error) {
  process.stderr.write(`Publish failed: ${error.message}\n`);
  process.exitCode = 1;
}
