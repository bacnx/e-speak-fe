import react from "eslint-plugin-react";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import prettier from "eslint-plugin-prettier";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  {
    ignores: ["eslint.config.mjs"],
  },
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "airbnb",
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "plugin:@next/next/recommended",
  ),
  {
    plugins: {
      react,
      "@typescript-eslint": typescriptEslint,
      prettier,
      "simple-import-sort": simpleImportSort,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },

      parser: tsParser,
      ecmaVersion: "latest",
      sourceType: "module",

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },

        project: "./tsconfig.json",
      },
    },

    rules: {
      // these configs are temporary solution for issue in eslint new version: https://github.com/eslint/eslint/discussions/18858
      "@typescript-eslint/lines-between-class-members": "off",
      "@typescript-eslint/no-throw-literal": "off",

      "@typescript-eslint/no-use-before-define": "off",
      "import/extensions": 0,
      "import/no-unresolved": 0,

      "prettier/prettier": [
        "error",
        {
          arrowParens: "always",
          bracketSameLine: false,
          bracketSpacing: true,
          semi: false,
          experimentalTernaries: false,
          singleQuote: true,
          jsxSingleQuote: false,
          quoteProps: "as-needed",
          trailingComma: "all",
          singleAttributePerLine: false,
          htmlWhitespaceSensitivity: "css",
          vueIndentScriptAndStyle: false,
          proseWrap: "preserve",
          insertPragma: false,
          printWidth: 100,
          requirePragma: false,
          tabWidth: 2,
          useTabs: false,
          embeddedLanguageFormatting: "auto",
        },
      ],

      "simple-import-sort/imports": [
        "error",
        {
          groups: [
            ["^react", "^@?\\w"],
            ["^\\u0000"],
            ["^(@/components/layouts)(/.*|$)"],
            [
              "^(@/components/features)(/.*|$)",
              "^(@/components/common)(/.*|$)",
              "^(@/components/ui)(/.*|$)",
            ],
            ["^(@)(/.*|$)"],
            ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
            ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
            ["^.+\\.(css)$", "^.+\\.(scss)$"],
          ],
        },
      ],

      "import/prefer-default-export": 0,
      "import/no-extraneous-dependencies": 0,
      "react/require-default-props": 0,
      "react/react-in-jsx-scope": 0,
      "react/jsx-props-no-spreading": 0,
    },
  },
  {
    files: ["./src/components/ui/**/*.{js,jsx,ts,tsx}"],

    rules: {
      "react/jsx-props-no-spreading": 0,
      "react/prop-types": 0,
      "no-use-before-define": 0,
      "jsx-a11y/heading-has-content": 0,
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/no-shadow": 0,
      "@typescript-eslint/no-unused-vars": 0,
      "react/jsx-no-constructed-context-values": 0,
    },
  },
  {
    files: [
      "./src/components/common/**/*.{js,jsx,ts,tsx}",
      "./src/components/form/**/*.{js,jsx,ts,tsx}",
    ],

    rules: {
      "react/jsx-props-no-spreading": 0,
    },
  },
];
