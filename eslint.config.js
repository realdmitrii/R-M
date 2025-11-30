import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },

  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'no-console': 'warn',
      'simple-import-sort/imports': [
        'error',
        {
          groups: [
            // React
            ['^react$', '^react-dom'],
            // React-библиотеки
            ['^react-'],
            // Другие библиотеки (node_modules)
            ['^@?\\w'],
            // Импорты из проекта (начинаются с @ или ./)
            ['^@/', '^\\.'],
            // Стилевые импорты
            ['\\.(css|scss|sass|less)$'],
          ],
        },
      ],
      'simple-import-sort/exports': 'error',
    },
  },
]);
