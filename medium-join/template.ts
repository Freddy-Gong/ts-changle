type Join<T extends unknown[], U extends string|number, Result extends string = ''> = T extends [infer First extends string,...infer Rest]
    ? Result extends '' 
        ? Join<Rest,U,First>
        : Join<Rest,U,`${Result}${U}${First}`>
    : Result
