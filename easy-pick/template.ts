//type a = 'title' | 'completed'
//上面的a类型叫做联合类型，在ts中我们可以直接用in关键字便利联合类型
//[P in K] P是一个新声明的 类似 for item in object

//因为我们要把K里面的元素从T中取出来，所以要判断一下T中是不是有K
//js中就是 if K in T 
//ts中就是extends关键字，既可以是一个字符串也可以是联合类型进行判断
//而keyof T能返回T中所有的属性，所以两者整合就这样写

// type MyPick<T, K extends keyof T> = {
//     [P in K]: T[P]
// }
//整个这个是一个对象
//：左右两边分别是属性和类型
// 问题 我考虑的 K并不属于T中的情况，我想着是在函数内部结果解决，但是这是TS我们可以在一开始的参数就可以解决这个问题
// 只要我们的参数 约定好 K一定是在T中的 这种情况就不会发生 所以 K extends keyof T
type MyPick<T,K extends keyof T> = {
    [P in K]: T[P]
}
type a  = {
    a:string,
    b:number
}

type P<T> = T extends 'x' ? string : number;
type A3 = P<'x' | 'y'> // ?

const x:A3 = 1
const y:A3 = ''