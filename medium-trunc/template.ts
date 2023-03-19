type Trunc<T extends number|string> = `${T}` extends `${infer Front}.${infer After}` 
    ? Front
    : `${T}`