module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'airbnb',
    'airbnb-typescript',
    'prettier',
  ],
  parserOptions: { project: './tsconfig.eslint.json', tsconfigRootDir: __dirname },
  rules: {
    'max-len': ['error', { code: 120 }],

    'react/function-component-definition': [2, { namedComponents: 'arrow-function' }],
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',

    'sort-imports': ['error', { ignoreDeclarationSort: true }],
    'import/order': [
      'error',
      {
        // groups: default value is ["builtin", "external", "parent", "sibling", "index"]
        pathGroups: [
          { pattern: 'react', group: 'builtin' },
          { pattern: 'react-dom', group: 'builtin' },
        ],
        pathGroupsExcludedImportTypes: ['react', 'react-dom'],
        'newlines-between': 'always',
        alphabetize: { order: 'asc' },
      },
    ],
  },
};
