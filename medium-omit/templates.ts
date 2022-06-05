type MyOmit<T, K> = {
    [P in testExclude<keyof T, K>]: T[P]
}
//因为题目中我们需要的是keyof T，所以不能之间使用extends，需要用一个类型
//来进行约束，才能得到正确的结果
type testExclude<T, U> = T extends U ? never : T