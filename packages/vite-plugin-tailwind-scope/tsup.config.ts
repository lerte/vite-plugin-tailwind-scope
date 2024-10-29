import { defineConfig } from "tsup";

export default defineConfig([
  {
    format: ["esm"],
    dts: true,
    clean: true,
    sourcemap: true,
    entry: ["src/plugin/css.ts"],
  },
  {
    format: ["esm"],
    dts: true,
    clean: true,
    sourcemap: true,
    entry: ["src/plugin/index.ts"],
  },
]);
