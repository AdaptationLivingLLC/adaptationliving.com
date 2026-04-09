import baseConfig from "./base.js";
import nextPlugin from "eslint-config-next";

/** @type {import("eslint").Linter.Config[]} */
export default [
  ...baseConfig,
  ...nextPlugin,
  {
    rules: {
      "@next/next/no-html-link-for-pages": "error",
    },
  },
];
