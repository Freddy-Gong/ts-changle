//type MyExclude<T, U> = T extends U ? never : T


type MyExclude<T,U> = T extends U ? never : T

// 例子 T = 'a' | 'b' | 'c' 当extends前为范型兵器还是一个联合类型的时候
// extends就会将联合类型的每一项都单独进行extends的比较，并且把最后的结果进行联合