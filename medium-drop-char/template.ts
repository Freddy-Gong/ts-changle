type DropChar<S extends string, C extends string> = S extends `${infer Head}${C}${infer Tail}`
  ? DropChar<`${Head}${Tail}`, C>
  : S