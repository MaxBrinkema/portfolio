import eslintComments from '@eslint-community/eslint-plugin-eslint-comments/configs';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier/flat';
import jsdoc from 'eslint-plugin-jsdoc';
import vue from 'eslint-plugin-vue';
import vueAccessibility from 'eslint-plugin-vuejs-accessibility';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

/** Limits from the clean-code rules in docs/plan.md, enforced instead of reviewed. */
const MAX_COMPLEXITY = 10;
const MAX_FUNCTION_LINES = 50;
const MAX_NESTING_DEPTH = 3;
const MAX_PARAMS = 4;

const TEST_FILES = ['**/*.test.ts', '**/*.spec.ts', '**/e2e/**'];
const PACKAGE_SOURCES = ['packages/*/src/**/*.ts', 'tools/*/src/**/*.ts'];

export default defineConfig(
  globalIgnores([
    '**/node_modules/',
    '**/dist/',
    '**/coverage/',
    '**/.astro/',
    'docs/design-system/',
  ]),

  js.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  vue.configs['flat/recommended'],
  vueAccessibility.configs['flat/recommended'],
  eslintComments.recommended,

  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        extraFileExtensions: ['.vue'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    linterOptions: {
      reportUnusedDisableDirectives: 'error',
    },
    rules: {
      complexity: ['error', MAX_COMPLEXITY],
      'max-depth': ['error', MAX_NESTING_DEPTH],
      'max-params': ['error', MAX_PARAMS],
      'max-lines-per-function': [
        'error',
        { max: MAX_FUNCTION_LINES, skipBlankLines: true, skipComments: true },
      ],
      '@typescript-eslint/no-magic-numbers': [
        'error',
        {
          ignore: [-1, 0, 1],
          ignoreEnums: true,
          ignoreNumericLiteralTypes: true,
          ignoreReadonlyClassProperties: true,
          ignoreTypeIndexes: true,
        },
      ],
      // Every eslint-disable needs a written reason (working rule 8).
      '@eslint-community/eslint-comments/require-description': 'error',
      '@eslint-community/eslint-comments/no-unlimited-disable': 'error',
    },
  },

  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: { parser: tseslint.parser },
    },
  },

  {
    files: PACKAGE_SOURCES,
    ...jsdoc.configs['flat/recommended-typescript-error'],
  },
  {
    files: PACKAGE_SOURCES,
    rules: {
      'jsdoc/require-jsdoc': [
        'error',
        {
          publicOnly: true,
          require: {
            FunctionDeclaration: true,
            ClassDeclaration: true,
            ArrowFunctionExpression: true,
          },
          contexts: ['TSInterfaceDeclaration', 'TSTypeAliasDeclaration', 'TSEnumDeclaration'],
        },
      ],
    },
  },

  {
    files: TEST_FILES,
    rules: {
      '@typescript-eslint/no-magic-numbers': 'off',
      'max-lines-per-function': 'off',
    },
  },

  // Must stay last: turns off stylistic rules that Prettier owns.
  prettier,
);
