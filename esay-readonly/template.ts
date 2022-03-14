type MyReadonly<T> = {
    readonly [P in keyof T]: T[P]
    //不能直接便利接口，要便利接口里面的key
}

//case
type User = {
    name: string
    //readonly name:string 加入readonly后就不能对起进行更改
}
const People: User = {
    name: "asdqwd"
}
People.name = 'xasd'