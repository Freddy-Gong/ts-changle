
type IsIn<T extends unknown[], U> = T extends [infer Head, ...infer Rest]
    ? IsEqual<Head,U> extends true  
        ? true
        : IsIn<Rest,U>
    : false

type Unique<T extends unknown[],Result extends unknown[]=[]> = T extends [infer Head,...infer Rest]
    ? IsIn<Result,Head> extends true 
        ? Unique<Rest,Result>
        : Unique<Rest,[...Result,Head]>
    : Result