type Last<T extends any[]> = T extends [...infer All, infer last]? last : never