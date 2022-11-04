type Flatten<T extends unknown[]> = T extends [infer Fist, ...infer Rest] 
? Fist extends unknown[] 
    ? [...Flatten<Fist>, ...Flatten<Rest>] 
    : [Fist, ...Flatten<Rest>] 
: T