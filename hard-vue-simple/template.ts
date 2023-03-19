// 在 TypeScript 中交叉类型是将多个类型合并为⼀个类型。通过 & 运算符可以将现有的多种类型叠加到⼀起成为⼀种类型，它包含了所需的所有类型的特性
declare function SimpleVue<
  T extends { [x: PropertyKey]: any },
  U extends { [x: string]: () => unknown },
  V extends { [x: string]: () => unknown }>(options: {
    // 在data中是找不到this中的其他属性的 所以不在这里使用ThisType进行关联
    // 并且在参数开始使用ThisType<never> 让 data中的this为never
    data: () => T,
    // 在computed中可以调用 this上的属性即data的返回值 所以要加上 ThisType<T>
    computed: U & ThisType<T>,
    //methods: V & ThisType<V & T & { [P in keyof U]: U[P] extends () => infer R ? R : never }>
    // 在methods中既可以调用this上的属性，也可以调用method中已有的函数，还有computed中的函数 所以要加 ThisType<T & V & U>
    // 但是computed的属性在methods中是当作一个属性来调用的，所以要直接把函数的返回值负值给computed的key 所以 {[P in keyof U]:U[P] extends ()=> infer R ? R : never}
    methods: V & ThisType<V & T & {[P in keyof U]:U[P] extends ()=> infer R ? R : never}>
  } & ThisType<never>): any
// 在最外部 把this 设置为never 随后在那些需要this的函数中单独进行负值
