module.exports = {
  extends: ['prettier', 'prettier/prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // Turn off rules

    'prefer-destructuring': 'off',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'no-restricted-syntax': 'off',
    'class-methods-use-this': 'off',
    '@typescript-eslint/no-shadow': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/no-use-before-define': 'off',

    // Configure rules

    'no-void': ['error', { allowAsStatement: true }],

    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'variable',
        format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'function',
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        leadingUnderscore: 'allow',
      },
    ],
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/semi': ['error', 'never'],

    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.test.js',
          '**/*.test.jsx',
          '**/*.spec.js',
          '**/*.spec.jsx',
          '**/*.test.ts',
          '**/*.test.tsx',
          '**/*.spec.ts',
          '**/*.spec.tsx',
          '**/__tests__/**/*',
          '**/stories/**/*',
        ],
      },
    ],

    'prettier/prettier': 'error',
  },
}
