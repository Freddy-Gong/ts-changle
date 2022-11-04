type Merge<F extends Record<string | number | symbol,unknown>, S extends Record<string | number | symbol,unknown>> = {
    [P in keyof S | keyof Omit<F, keyof S>]: P extends keyof S ? S[P]: F[P]
}