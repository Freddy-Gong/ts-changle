// 默认值就是一个对象
type Chainable<T={}> = {
    // 对象的key一定要是string
    // 但是重复的key不可以有重复的value
    // 链式调用 返回的肯定还是链式的类型
    option<K extends string,V>(key: K extends keyof T ? V extends T[K]?never:K :K, value: V): Chainable<{[P in K]:V}&Omit<T,K>>
    get(): T
  }