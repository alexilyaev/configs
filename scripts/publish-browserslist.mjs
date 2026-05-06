import { execSync } from 'node:child_process';

const TAG_PREFIX = 'browserslist-v';
const run = (cmd, opts = {}) => execSync(cmd, { stdio: 'inherit', ...opts });
const out = (cmd) => execSync(cmd, { encoding: 'utf8' }).trim();

let lastTag = null;

try {
  lastTag = out(`git describe --tags --match '${TAG_PREFIX}*' --abbrev=0`);
} catch {
  console.log(`No prior ${TAG_PREFIX}* tag found; proceeding with publish.`);
}

if (lastTag) {
  try {
    execSync(`git diff --quiet ${lastTag} -- browserslist`);
    console.log(`No changes in browserslist/ since ${lastTag}; skipping publish.`);
    process.exit(0);
  } catch {
    console.log(`Changes detected since ${lastTag}; publishing.`);
  }
}

run(`npm version patch --tag-version-prefix=${TAG_PREFIX}`, { cwd: 'browserslist' });
run('npm publish', { cwd: 'browserslist' });
run('git push --follow-tags');
