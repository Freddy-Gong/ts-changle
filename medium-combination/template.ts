type Combinations<T extends string[], U = T[number], K = U > = K extends string
    ? K | `${K} ${Combinations<[], Exclude<U,K>>}`
    : never