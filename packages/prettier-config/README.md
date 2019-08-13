# Prettier Config Bloom

Bloom's Base Prettier Configuration

## Installation

```
npm install --save-dev @bloomprotocol/prettier-config
```

For greater flexibility prettier is a peer dependency so you must install it yourself

```
npm install --save-dev prettier
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
