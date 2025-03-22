export function match(value, cases) {
  if (cases.hasOwnProperty(value)) {
    const result = cases[value];
    return typeof result === "function" ? result() : result;
  } else if (cases.hasOwnProperty("default")) {
    const fallback = cases.default;
    return typeof fallback === "function" ? fallback() : fallback;
  } else {
    throw new Error(
      `Match error: no match found for "${value}" and no default case.`
    );
  }
}
