import { Equal, Expect } from '@type-challenges/utils'
//这个语法是为了让数组里面的值也变成不可变的
//因为如果不在末尾加上 as const 可以通过tuple[1] ="asd" 拉进行修改
//但是类型是不能被修改的，所以如果要对数据进行类型化就需要在末尾加上 as const
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

//1. 如果将js转化为ts typeof，
let string = "12e"
type s = typeof string
const string1 = "12e"
type sc = typeof string1
//因为const是不能修改的所以类型化之后和字面量是一致的


type cases = [
    Expect<Equal<TupleToObject<typeof tuple>, { tesla: 'tesla'; 'model 3': 'model 3'; 'model X': 'model X'; 'model Y': 'model Y' }>>,
]

// @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>
//如果遇到数组中的值不能做对象的键，期望报错

//const let js世界
//interface type ts世界