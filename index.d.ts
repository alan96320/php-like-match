declare function match<T extends string | number | symbol, R>(
  value: T,
  cases: {
    [key in T]?: R | (() => R);
  } & {
    default?: R | (() => R);
  }
): R;

export = match;
