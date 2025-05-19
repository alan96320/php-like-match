type Condition<T> = T | (() => T);
type Result<R> = R | (() => R);

export declare class MatchBuilder<T, R> {
    constructor(subject: T);
    when(...conditionsAndResult: [...Array<Condition<T>>, Result<R>]): MatchBuilder<T, R>;
    default(result: Result<R>): MatchBuilder<T, R>;
    run(): R;
}

export declare function Match<T, R>(subject: T): MatchBuilder<T, R>;
