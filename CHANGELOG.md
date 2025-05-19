# Changelog

## 1.1.0 - Initial Release

- Introduced `MatchBuilder` class with fluent API
- Supports:
  - Single or multiple conditions per case
  - Functions or expressions as condition/return values
  - Default fallback (`default()`)
- Output value resolved immediately like PHP's match expression
- TypeScript declaration included
- Dual support for CommonJS (`require`) and ESM (`import`)
