# React ESLint Config

Bloom's Base React ESLint Configuration

## Installation

```
npm install --save-dev @bloomprotocol/eslint-config-react
```

For greater flexibility eslint dependencies are peer dependencies so you must install them yourself

```
npm install --save-dev @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-prettier eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks prettier
```

## Usage

```js
// .eslintrc.js

module.exports = {
  extends: ["@bloomprotocol/eslint-config-react"]
};
```
