# @alexilyaev/configs

Common composable configs by Alex Ilyaev

## tsconfig.json

All TypeScript projects, including Node.js projects

```jsonc
{
  "extends": ["@alexilyaev/configs/tsconfig/base"],
}
```

Next.js projects

```jsonc
{
  "extends": ["@alexilyaev/configs/tsconfig/next"],
}
```

Remix projects

```jsonc
{
  "extends": ["@alexilyaev/configs/tsconfig/remix"],
}
```

Plain React projects

```jsonc
{
  "extends": ["@alexilyaev/configs/tsconfig/react"],
}
```

## `prettier.config.js`

All projects

```js
export { default } from '@alexilyaev/configs/prettier/base.js';
```

Including Tailwind CSS

```js
export { default } from '@alexilyaev/configs/prettier/tailwindcss.js';
```

## `lint-staged.config.js`

All projects

```js
export { default } from '@alexilyaev/configs/lint-staged/base.js';
```

## `.browserslistrc`

All projects

```
extends @alexilyaev/configs/browserslist/web.cjs
```
