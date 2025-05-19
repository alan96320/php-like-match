class MatchBuilder {
    constructor(subject) {
        this.subject = subject;
        this.cases = [];
        this.defaultCase = null;
    }

    when(...conditionsAndResult) {
        const result = conditionsAndResult.pop();
        const conditions = conditionsAndResult;
        this.cases.push({ conditions, result });
        return this;
    }

    default(result) {
        this.defaultCase = result;
        return this;
    }

    run() {
        for (const { conditions, result } of this.cases) {
            for (const cond of conditions) {
                const condVal = typeof cond === "function" ? cond() : cond;
                if (condVal === this.subject) {
                    return typeof result === "function" ? result() : result;
                }
            }
        }

        if (this.defaultCase !== null) {
            return typeof this.defaultCase === "function" ? this.defaultCase() : this.defaultCase;
        }

        throw new Error( `Match error: no match found for "${this.subject}" and no default case.`);
    }
}

function Match(subject) {
    return new MatchBuilder(subject);
}

// CommonJS export
module.exports = { Match, MatchBuilder };
// ESM support
module.exports.default = Match;
