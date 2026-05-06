# Contributing

## Setup

**Requirements:** Node.js (see `.node-version`) and pnpm (see `packageManager` in `package.json`).

```shell
pnpm install
```

## Development

Run linting and tests:

```shell
pnpm lint
pnpm test
```

Auto-fix formatting:

```shell
pnpm format
```

## Publishing

Bump the version in `package.json`, then:

```shell
npm publish --access public
```

The `postpublish` script runs `git push --follow-tags` automatically.

### Publishing the browserslist sub-package

```shell
pnpm publish-browserslist-config
```

This bumps a patch version and publishes `@alexilyaev/browserslist-config` from the `browserslist/` directory.
