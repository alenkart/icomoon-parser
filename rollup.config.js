import dts from "rollup-plugin-dts";
import esbuild from "rollup-plugin-esbuild";
import resolve from "@rollup/plugin-node-resolve";

const resolvePlugin = resolve();
const esbuildPlugin = esbuild();

export default [
  {
    input: "src/cli.ts",
    output: {
      file: "lib/cli.js",
      format: "cjs",
    },
    plugins: [resolvePlugin, esbuildPlugin],
  },
  {
    input: "src/index.ts",
    output: {
      file: "lib/index.js",
      format: "cjs",
    },
    plugins: [resolvePlugin, esbuildPlugin],
  },
  {
    input: "src/index.ts",
    output: {
      file: "lib/index.d.ts",
      format: "cjs",
    },
    plugins: [dts()],
  },
];
