function objectMap(obj, fn) {
    const returnObj = {}
    const bound = fn.bind(obj)
    for (const key in obj) {
        returnObj[key] = bound(obj[key])
    }
    return returnObj
}
function foo(x) {
    return this.foo * x
}
console.log(objectMap({ bar: 3, foo: 2 }, foo))
