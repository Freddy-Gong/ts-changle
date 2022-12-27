// type AllCombinations<S extends string> = S extends '' 
//     ? '' 
//     : S extends `${infer First}${infer Rest}` 
//     // 缺少了 First在他们中间的情况
//         ? First| `${AllCombinations<Rest>}${First}`| `${First}${AllCombinations<Rest>}`|''|AllCombinations<Rest> 
//         : ''


// type cc = AllCombinations<'ABC'>

type StringToUnion<S> = S extends `${infer F}${infer R}` ? F | StringToUnion<R> : S

type ttt = "A"|"B" extends string ? true : false //true
// Union 在extends的时候 会把每Union中每一个元素都拿出来做一次extends 
type Combination<T extends string, U = T> = U extends T 
    ? U | `${U}${Combination<Exclude<T,U>>}`
    : never
type AllCombinations<S extends string> = Combination<StringToUnion<S>>