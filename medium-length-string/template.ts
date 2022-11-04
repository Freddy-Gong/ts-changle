type stringToArray<S extends String> = S extends `${infer First}${infer Rest}` ? [First, ...stringToArray<Rest>]:[]

type LengthOfString<S extends string> = stringToArray<S>["length"]