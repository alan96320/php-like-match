function match(value, cases) {
  if (Object.prototype.hasOwnProperty.call(cases, value)) {
    const result = cases[value];
    return typeof result === 'function' ? result() : result;
  } else if (Object.prototype.hasOwnProperty.call(cases, 'default')) {
    const fallback = cases.default;
    return typeof fallback === 'function' ? fallback() : fallback;
  } else {
    throw new Error(`Match error: no match found for "${value}" and no default case.`);
  }
}

// CommonJS export
module.exports = match;
// ESM compatibility:
module.exports.default = match;
