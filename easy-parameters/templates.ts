//type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer P) => any ? P : never

type  MyParameters<T extends (...arg : any[])=>any > = T extends (...args: infer P) => any ? P : never