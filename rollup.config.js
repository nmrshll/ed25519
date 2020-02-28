import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import multi from "@rollup/plugin-multi-entry";
import wasm from "@rollup/plugin-wasm";

const EXP_FORMAT = "iife";

export default {
  input: [
    "typescript/deps/ed25519xp/ed25519xp_bg.wasm",
    `typescript/src/index.ts`
  ],
  output: {
    sourcemap: true,
    format: EXP_FORMAT,
    name: "ed25519",
    file: `typescript/dist/bundle.js`
  },
  plugins: [
    multi(),
    resolve({
      browser: true,
      extensions: [".js", ".ts", ".wasm"]
    }),
    commonjs({
      include: [
        `typescript/**/*.js`,
        `typescript/**/*.ts`,
        `typescript/**/*.wasm`,
        "node_modules/**"
      ]
    }),
    typescript(),
    wasm()

    // If we're building for prod (npm run build
    // instead of npm run dev), minify
    // terser()
  ]
};
