// import svelte from 'rollup-plugin-svelte';
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
// import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import multi from "@rollup/plugin-multi-entry";
import wasm from "@rollup/plugin-wasm";

export default {
  input: [`typescript/src/index.ts`],
  output: {
    sourcemap: false,
    format: "cjs",
    name: "ed25519",
    file: `typescript/dist/bundle.cjs.js`,
    globals: { crypto: "crypto" }
  },
  external: ["crypto"],
  plugins: [
    multi(),
    // https://github.com/rollup/plugins/tree/master/packages/commonjs
    commonjs({
      include: [
        `typescript/src/**/*.js`,
        `typescript/src/**/*.ts`,
        "node_modules/**"
      ]
    }),
    resolve({
      browser: true,
      extensions: [".js", ".ts", ".wasm"]
    }),
    wasm(),
    typescript()

    // If we're building for prod (npm run build
    // instead of npm run dev), minify
    // terser()
  ],
  watch: {
    clearScreen: false
  }
};
