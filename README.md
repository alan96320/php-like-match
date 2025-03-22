# php-like-match

A utility that mimics PHP's `match` expression in JavaScript and TypeScript.

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
const match = require("php-like-match");

const role = "admin";

const result = match(role, {
  admin: "Full Access",
  user: () => "Limited Access",
  guest: "Read Only",
  default: () => "No Access"
});

console.log(result); // "Full Access"
```

## TypeScript Support

Built-in `.d.ts` file included.
