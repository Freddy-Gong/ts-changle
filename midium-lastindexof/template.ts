
type LastIndexOf<T extends unknown[], U> = T extends [...infer Front, infer Last]
    ? IsEqual<Last,U> extends true
        ? Front["length"]
        : LastIndexOf<Front,U>
    : -1