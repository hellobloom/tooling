module.exports = {
  extends: ['prettier', 'prettier/prettier'],
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    // Turn off rules

    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'no-underscore-dangle': 'off',
    'class-methods-use-this': 'off',

    // Configure rules

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

    'prettier/prettier': 'error',
  },
}
