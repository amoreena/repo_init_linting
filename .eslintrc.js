module.exports = {
  plugins: ['import', 'react', 'jsx-a11y'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-perf/recommended',
    'plugin:prettier/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 6,
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      'eslint-import-resolver-custom-alias': {
        alias: {
          styles: './src/lib/styles',
          utils: './src/lib/utils',
          components: './src/lib/components',
          types: './src/lib/types',
          test: './test',
        },
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },
  env: {
    node: true,
    es6: true,
    jest: true,
  },
  overrides: [
    {
      files: ['*.e2e.spec.js', '*.spec.tsx'],
      rules: {
        'jest/expect-expect': 'off',
      },
    },
    {
      files: ['*.tsx'],
      rules: {
        'react/prop-types': 'off',
      },
    },
    {
      files: ['**.js', '**.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['*.{test,spec}.{ts,js,jsx,tsx}', 'spec/utils/**/*.{ts,tsx}'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'import/first': 'off',
        'react/jsx-props-no-spreading': 'off',
      },
    },
  ],
  rules: {
    'import/order': ['error', { 'newlines-between': 'always' }],
    'prefer-destructuring': 'error',
    'react/prefer-stateless-function': 'error',
    'react/jsx-no-bind': [
      2,
      {
        ignoreDOMComponents: true,
        ignoreRefs: true,
        allowArrowFunctions: false,
        allowFunctions: true,
        allowBind: false,
      },
    ],
    'space-before-function-paren': 0,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/no-empty-function': 'warn',
    '@typescript-eslint/no-var-requires': 'off',
    /**
     * There's a strange error when using enums in typescript,
     * you have to turn off the no-unused-vars rule and set the
     * one from typescript to the desired setting.
     */
    '@typescript-eslint/no-unused-vars': 'error',
    'no-unused-vars': 'off',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-autofocus': 'warn',
    'jsx-a11y/no-onchange': 'warn',
    'jsx-a11y/no-static-element-interactions': 'warn',
    'no-use-before-define': 'off',
    'react/display-name': 'off',
    'react/jsx-key': 'warn',
    'react/prop-types': 'warn',
    'no-alert': 'error',
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'debug', 'error', 'assert'],
      },
    ],
    'prefer-const': 'error',
    'react-perf/jsx-no-new-array-as-prop': 'off',
    'react-perf/jsx-no-new-function-as-prop': 'off',
    'react-perf/jsx-no-new-object-as-prop': 'off',
    'sort-imports': 'off',
    'no-useless-constructor': 'off',
    'promise/param-names': 'off',
    camelcase: 'off',
    'jest/no-focused-tests': 'error',
  },
};
