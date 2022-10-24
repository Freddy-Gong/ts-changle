type Pop<T extends any[]> = T extends [] ? [] : T extends [...infer Rest, infer last] ? Rest : never

