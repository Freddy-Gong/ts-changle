// type ObjectEntries<T extends object> = {
//     [K in keyof Required<T>]:[K,T[K]]
// }[keyof Required<T>]

// type ObjectEntries<T extends object, K = keyof T> = K extends keyof T
//   ? [K, T[K] extends undefined ? undefined : Required<T>[K]]
//   : never;

type RemoveUndefined<T> = T extends undefined ? never : T
type RemovePartial<T> = RemoveUndefined<T> extends never ? undefined : RemoveUndefined<T>
type ObjectEntries<T, K = keyof T> = K extends keyof T ? [K, RemovePartial<T[K]>] : never