import baseConfig from "./base.js";
import astroPlugin from "eslint-plugin-astro";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  ...astroPlugin.configs.recommended,
];
