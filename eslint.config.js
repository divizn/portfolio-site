import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import solid from "eslint-plugin-solid/configs/typescript";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["**/*.{ts,tsx}"],
    ...solid,
    languageOptions: {
      ...solid.languageOptions,
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  },
  {
    ignores: ["dist/", ".astro/", "node_modules/", ".wrangler/"],
  },
);
