# nextjs-vanilla-extract-example

This is an example [Next.js](https://nextjs.org) project using [🧁 vanilla-extract.](https://vanilla-extract.style) via the official [Next.js plugin.](https://vanilla-extract.style/documentation/setup/#nextjs)

---

**Setup:** `yarn`

**Local development:** `yarn dev`

**Production preview:** `yarn build && yarn start`

---

Notable changes I made to the basic [Next.js example](https://nextjs.org/learn):

- Switched to Yarn.
- Switched to TypeScript.
- Installed deps with `yarn add --dev @vanilla-extract/next-plugin @vanilla-extract/babel-plugin @vanilla-extract/css`.
- Added a `next.config.js` using `@vanilla-extract/next-plugin`.
- Added a `.babelrc` using `@vanilla-extract/babel-plugin`.
- Introduced a `components` folder and added a `HelloWorld` component with a matching `HelloWorld.css.ts` file, then rendered it on the index page.
- Added a `browserslist` field to `package.json`.

---

This repo was originally based on work found in the vanilla-extract GitHub discussion ["Usage with Nextjs"](https://github.com/seek-oss/vanilla-extract/discussions/89), which then turned into the official Next.js plugin. Thanks to the community for helping out on this 🙏

## Demo 1

`style()`
Think of it as css modules

```ts
import { style } from '@vanilla-extract/css';

export const root = style({
  background: 'pink',
  color: 'blue',
  padding: '16px',
  transition: 'opacity .1s ease', // Testing autoprefixer
  ':hover': {
    opacity: 0.8,
  },
});
```

This file will create the style at build time
Nothing in JS

Demo 2

CSS Variables

Global means the Variables are not attached to a class

Demo createGlobalTheme
// create css variables in theme.css.ts

```typescript
import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    pink: 'pink',
    blue: 'blue',
    navy: 'navy',
    red: 'red',
  },
  space: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
  font: {
    body: 'arial',
  },
});
```

replace styles in Header.css.ts

You can that css variables have been hashed, show the css built file

## createGlobalTheme defines a

# Demo 3

Namespacing
have the option to have variants

Demo component type definition

Demo theme color Map

```typescript
export const background = styleVariants(vars.color, (background) => ({
  background,
}));
```

Demo type alias

# Demo 4

Sprinkles = makes it easier to share code
