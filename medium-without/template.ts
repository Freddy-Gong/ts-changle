type Without<T extends unknown[], U,Result extends unknown[] = []> = T extends [infer First, ...infer Rest]
    ? First extends (U extends unknown[] ? U[number] : U)
        ? Without<Rest,U,Result>
        : Without<Rest,U,[...Result,First]>
    : Result
