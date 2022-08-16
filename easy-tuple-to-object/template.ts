// //因为对象中的key只能是string number symbol类型，所以要对数组内容的类型进行约束
// //(string | number | symbol)[]
// type TupleToObject<T extends readonly (string | number | symbol)[]> = {
//     //便利数组的方式
//     [P in T[number]]: P
// }


// //[P in keyof T]
// //在ts中 keyof array可以得到数组的索引

type TupleToObject<T extends readonly (string | number | symbol)[]> = {
    [P in T[number]]:P
}