// type ArrayLength<N extends number, A extends 1[]=[]> = N extends A["length"] ? A : ArrayLength<N, [1, ...A]>
// type MinusOne<N extends number> = ArrayLength<N> extends [1, ...infer R] ? R["length"] : 0
// type FlattenOneTime<T extends unknown[]> = T extends [infer First, ...infer Rest] ? First extends any[] ? [...First, ...FlattenOneTime<Rest>] : [First,...FlattenOneTime<Rest>] :[]
// type FlattenDepth<T extends unknown[],N extends number = 1> = N extends 0 ? T : T extends FlattenOneTime<T> ? T : FlattenDepth<FlattenOneTime<T>,MinusOne<N>>

type FlattenDepth<
  T,
  Depth extends number = 1,
  U extends any[] = []
> = T extends [infer F, ...infer R]
  ? F extends any[]
    ? U["length"] extends Depth
      ? [F, ...FlattenDepth<R, Depth, U>]
      : [...FlattenDepth<F, Depth, [any, ...U]>, ...FlattenDepth<R, Depth, U>]
    : [F, ...FlattenDepth<R, Depth, U>]
  : [];