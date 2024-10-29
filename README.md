# vite-plugin-tailwind-scope

> Encapsulate and scope your TailwindCSS styles to your library and prevent them affecting styles outside.

Love using TailwindCSS? Other people also love using TailwindCSS? Trying to mix them together? Usually this leads to problems as the tailwind classes such as `flex`, `bg-red-500` will clash and change specificity.

**Potential solutions**:

- A solution would be to [prefix your `TailwindCSS` styles in your libraries](https://stackoverflow.com/a/63770585), for example `my-lib-flex`, `my-lib-bg-red-500`, but this simply isn't good enough. The solution breaks down when there are multiple libraries using `TailwindCSS`. You would need a `prefix-` for each library. Unnecessary mental load.

- Another solution would be to [make the parent app important](https://stackoverflow.com/a/65907678). But this is an anti-pattern, and is a leaky abstraction. It is not feasible to tell all the consumers of your library to do this as a pre-requisite.

## Installation

```bash
npm i vite-plugin-tailwind-scope -D
```

## Usage

This plugin use tailwindcss and postcss process

Add the `scope` plugin into the `plugins` list in your `vite.config.ts`:

```ts
import { scope } from "vite-plugin-tailwind-scope";
export default defineConfig({
  ...
  plugins: [
    ...
    scope()
    ...
  ],
  ...
});
```

Add the `css` function in your Component file, for example `Button.tsx`

```tsx
import { css } from "vite-plugin-tailwind-scope/css";
import styles from "./styles/Button.module.css";

const Button = () => {
  return <button className={css(styles)`text-white bg-red-500`}>click</button>;
};
```

Inspect element from browser, you will see `text-white` will transform to `_text-white_14u4s_26`,
and `bg-red-500` will also transform to `_bg-red-500_14u4s_14`, that is the css module works.

### Options

```ts
{
  dest: string; // generate module.css to where, default is relative to Component file
}
```

### How does it work?

Base on `Vite` plugin's hook `handleHotUpdate`.
Everytime file changes, trigger handleHotUpdate,
get the file contents from this hook function.

As we know, tailwindcss is a postcss plugin.
use postcss with tailwindcss, generate css code, then write to \*.module.css file.

```js
postcss([
  tailwindcss({
    content: [
      {
        raw: content,
        extension: "jsx",
      },
    ],
  }),
])
  .process("@tailwind utilities;")
  .then(({ css }) => {
    const { filePath, content } = generateCssModule(file, css, options);
  });
```

On the component file side.
import the generated .module.css file.
use the `css` function from this plugin.
Inside this function, will use css module className as result.

So we can using tailwindcss utility name benefiting from tailwindcss and also scope styles with css module while writing a react component.
