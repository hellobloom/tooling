# Prettier Config

Bloom's Base Prettier Configuration

## Installation

```
npm install --save-dev @bloomprotocol/prettier-config
```

## Usage

```js
// .prettierrc.js

module.exports = require('@bloomprotocol/prettier-config')
```

You can also extend from the config like this

```js
// .prettierrc.js

module.exports = {
  ...require('@bloomprotocol/prettier-config'),
  bracketSpacing: true,
}
```
