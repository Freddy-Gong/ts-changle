//js
function pick(type, argument) {
    const result = JSON.parse(JSON.stringify(type))
    const kyes = Object.keys(type)
    if (typeof argument === "string") {
        kyes.forEach((key) => {
            if (key === argument) {
                delete result[key]
            }
        })
    } else if (Array.isArray(argument)) {
        argument.forEach((arg) => {
            kyes.forEach((key) => {
                if (key === arg) {
                    delete result[key]
                }
            })
        })
    } else {
        return
    }
    return result
}

const a = {
    name: "11",
    stage: "asd",
    age: "12df1",
    fast: "asd",
}
console.log(pick(a, ["name", "fast"]))
for (item in a) {
    console.log(item)
}
const b = [1.235, 34, 23]
for (item of b) {
    console.log(item)
}