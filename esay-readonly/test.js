function readlony(obj) {
    const result = {}
    for (key in obj) {
        result["readonly" + key] = obj[key]
    }
    return result
}
//1.返回一个对象
//2.便利 obj (js 对象 ts借口)
//3.加上readonly关键字
//4.通过key来获取obj(接口)里面的值