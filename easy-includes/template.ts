import { Equal } from '@type-challenges/utils'
//type MyIncludes<T extends readonly any[], U> = U extends T[number] ? true : false
export type Includes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? Equal<U, First> extends true ? true : Includes<Rest, U> : false


// type MyIncludes<T extends readonly any[], U> = U extends T[number] ? true : false 
type MyIncludes<T extends readonly any[], U> = T extends [infer First, ...infer Rest] ? Equal<First,U> extends true ? true  :  MyIncludes<Rest, U> :false
