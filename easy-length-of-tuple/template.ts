type Length<T extends readonly any[]> = T["length"]
//取类型的范型的长度
//因为tuple的length是只读的 所以需要在前面添加readonly