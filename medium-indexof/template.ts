
type IsEqual<A, B> = (<T>() => T extends A ? 1 : 0) extends <T>() => T extends B ? 1 : 0 ? true : false

type IndexOf<T extends unknown[], U,Result extends unknown[]=[]> = T extends [infer Head, ...infer Rest] 
    ? IsEqual<Head,U> extends true 
        ? Result["length"]
        : IndexOf<Rest,U,[...Result,Head]>
    : -1