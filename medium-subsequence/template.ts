// your answers
type Subsequence<T extends any[]> = T extends [infer Left, ...infer Rest] 
    ? [Left] | [Left, ...Subsequence<Rest>] | Subsequence<Rest> 
    : T