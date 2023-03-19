type IsTuple<T> = [T] extends [never]
    ? false
    : T extends readonly [...unknown[]]
        ? any[] extends T 
            ? false
            : true
        : false