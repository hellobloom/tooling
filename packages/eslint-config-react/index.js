module.exports = {
  plugins: ['react-hooks'],
  extends: ['@bloomprotocol/eslint-config', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    // Turn off certain react rules
    'react/prop-types': 0,
    'react/no-unescaped-entities': [2, {forbid: ['>', '}']}],

    // Turn on the react-hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
