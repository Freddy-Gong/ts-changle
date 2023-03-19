type ValueOf<T> = T[keyof T];

// 因为R可能是联合类型 所以用Extract把R中和目标对于的某个类型提取出来
type MapTypes<T, R extends { readonly mapFrom: unknown; readonly mapTo: unknown }> = {
    [K in keyof T]: T[K] extends R['mapFrom'] ? Extract<R, { mapFrom: T[K] }>['mapTo'] : T[K]
  }
