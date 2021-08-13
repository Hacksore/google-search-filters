import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "rollup-plugin-typescript2";
import copy from "rollup-plugin-copy";
import replace from "@rollup/plugin-replace";
import { babel } from "@rollup/plugin-babel";
import packageJson from "./package.json";

export default {
  input: "./src/index.tsx",
  output: [
    {
      file: packageJson.main,
      format: "iife",
      sourcemap: true,
    },
  ],
  plugins: [
    copy({
      targets: [{ src: "src/manifest.json", dest: "../build/manifest.json" }],
    }),
    replace({
      "process.env.NODE_ENV": JSON.stringify("development"),
      preventAssignment: true,
    }),
    babel({ babelHelpers: "bundled" }),
    resolve(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
  ],
};
