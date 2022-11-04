type merge<T extends object> = {
    [K in keyof T]: T[K];
  };
  // 进行partial的转变
  type CheckOptions<T, K extends keyof T | "unknown" = keyof T> = {
    [p in K]?: p extends keyof T ? T[p] : never;
  };
  // 合并即可，还要排除一下unknown
  type PartialByKeys<T, K extends keyof T | "unknown" = keyof T> =  merge<CheckOptions<T, K> & Omit<T, K>>