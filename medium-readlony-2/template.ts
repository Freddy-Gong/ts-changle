type MyReadonly2<T,U extends keyof T = keyof T> = {
    [P in Exclude<keyof T,U>]:T[P]
} & {
    readonly [P in U]: T[P]
}

type testInclude<T,U> = U extends T ? U : never
type testExclude2<T,U> = T extends U ? never : T

