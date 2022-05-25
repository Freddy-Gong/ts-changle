//type First<T extends any[]> = T extends [] ? never : T[0]
//第一种解法是判断 T是否是空数组 如果是空数组就返回never 不是空数组就直接返回T[0]
//type First<T extends any[]> = T["length"] extends 0 ? never : T[0]
//第二种解法是判断数组的长度，如果长度等于0返回never，不为零则返回T的第一个元素
//type First<T extends any[]> = T[0] extends T[number] ? T[0] : never
//第三种解法判断T[0]的类型和T[number]是否相同，T[number]返回元素组成的联合类型
//空数组会返回never
type First<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never
//类似于js的结构吧第一个元素解构出来，判断是不是undefined


//T extends [] 判断T是不是一个空数组
//知识点
//1. extends 类型条件判断
//2. 获取tuple 的 length 属性
//3. extends union 判断的规则
//4. infer 的使用 推断

//如果是一个空数组的话T[0] === undefined