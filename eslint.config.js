import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import stylistic from "@stylistic/eslint-plugin";

export default defineConfig([
  stylistic.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: { globals: globals.node },
    rules: {
      // Переопределяем: разрешаем и требуем точки с запятой
      // '@stylistic/semi': ['error', 'always'],
      "@stylistic/brace-style": ["error", "1tbs", { allowSingleLine: true }],
      "@stylistic/arrow-parens": ["error", "as-needed"],
      "no-unused-vars": "warn",
    },
  },
]);
