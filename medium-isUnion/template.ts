type IsUnion<T, U = T> = [T] extends [never] // 判断是不是never
  ? false
  : T extends U // 通过extends 来判断 T是不是 联合类型或者单独的一个类型
    ? [Exclude<U, T>] extends [never] // 如果可以进行 extends 再判断 non-union type.
        ? false
        : true
    : false;