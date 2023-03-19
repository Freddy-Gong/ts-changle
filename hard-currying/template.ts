
type Currying<T> = T extends (...arg:[infer First, ...infer Rest]) => infer ReturnV
    // 一个参数和没有参数的情况是一样的
    ? Rest extends []
        ? T
        : (arg: First) => Currying<(...args: Rest) => ReturnV>
    : never
declare function Currying<T>(fn: T): Currying<T>
