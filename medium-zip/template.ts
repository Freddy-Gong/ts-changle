type Zip<T extends Array<any>, U extends Array<any>> = T extends [] 
    ? [] 
    : T extends [infer First,...infer Other] 
        ? U extends [infer UFirst, ...infer UOther] 
            ? [[First, UFirst], ...Zip<Other, UOther>]
            : []
        : []

type xx = Zip<[1, 2, 3], ['1', '2']>
type xxx = Zip<['1'], [1, 2, 3]>