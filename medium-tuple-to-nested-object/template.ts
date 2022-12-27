type TupleToNestedObject<T, U> = T extends [] ? U : T extends [`${infer First}`, ...infer Rest] ? {
    [key in First]:TupleToNestedObject<Rest,U>
} : U