type Flip<T extends Record<string,string|number|boolean>> = {
    [P in keyof T as P extends keyof T ? `${T[P]}` : never] : P
}
