type ArrayLength<N extends number, A extends 1[]=[]> = N extends A["length"] ? A : ArrayLength<N, [1, ...A]>
type Add<A extends number,B extends number> = [...ArrayLength<A>, ...ArrayLength<B>]["length"]
type Minus<N extends number, C extends number> = ArrayLength<N> extends [...ArrayLength<C>,...infer R] ? R["length"]:0
type Fibonacci<T extends number> = T extends 1 
    ? 1 
    : T extends 0 ? 0 : Add<Fibonacci<Minus<T,1>>,Fibonacci<Minus<T,2>>>
