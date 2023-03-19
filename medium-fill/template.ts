type Fill<
  T extends unknown[],
  N,
  Start extends number = 0,
  End extends number = T['length'],
  Result extends unknown[] = []
> = T extends [infer First, ...infer Rest]
// 当便利的长度没有遇到Start之前 Result["length"] extends Start 都为false向Result中添加First
// 当便利到Start之后 我们吧Start编程number 让这个条件一直为true 向Result中添加N
// 而由于是先判断的end所以当Result的长度到达End后直接放回
    ? Result["length"] extends End 
        ? [...Result, ...T] 
        : Result["length"] extends Start 
            ? Fill<Rest,N,number,End,[...Result, N]> 
            : Fill<Rest,N,Start,End,[...Result, First]> 
    : Result

