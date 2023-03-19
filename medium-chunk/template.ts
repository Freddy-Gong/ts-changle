// Result 最后的返回值，Item 每一个Chunk
type Chunk<T extends any[], U extends number, Result extends any[] = [], Item extends any[] = []> = T extends 
  [infer S, ...infer R] // 提取Head元素，如果提取不出来 代表T已经是[]
  ? Item['length'] extends U // 如果chunk的长度满足了条件则将其放到result
    ? Chunk<R, U, [...Result, Item], [S]> // 长度够了 把结构出来的Head放到 新的Item中
    : Chunk<R, U, Result, [...Item, S]> // 如果还不够则把结构出来的Head放到Item中
  : Item extends [] // 当T是[]的时候需要返回最后的结果，这个时候如果Item还有元素则需要和到结果里
    ? Result
    : [...Result, Item]