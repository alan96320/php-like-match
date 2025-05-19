# php-like-match

A PHP-like `match` expression for JavaScript and TypeScript using fluent class pattern.

## Features

- Simple and expressive syntax
- Works with string, number, or symbol
- Supports default fallback
- Supports function-based return values
- Fully typed for TypeScript

## Installation

```bash
npm install php-like-match
```

## Usage

```js
const Match = require("php-like-match");

const result = Match(2)
  .when(1, 'satu')
  .when(2, 3, 'dua atau tiga')
  .default('tidak diketahui')
  .run();

console.log(result); // dua atau tiga
```

## TypeScript Support

Built-in `.d.ts` file included.
