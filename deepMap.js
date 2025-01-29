function deepMap(value, fn) {
    if (value === null) return fn(value)
    if (
        value === null ||
        (!Array.isArray(value) && value?.constructor != Object)
    )
        return fn(value)

    const returnVal = Array.isArray(value) ? [] : {}
    const boundFn = fn.bind(value)
    function recursiveMap(value, container) {
        if (Array.isArray(value)) {
            for (let index = 0; index < value.length; index++) {
                const element = value[index]
                if (Array.isArray(element)) {
                    container.push(recursiveMap(element, []))
                } else if (typeof element == 'object') {
                    container.push(recursiveMap(element, {}))
                } else {
                    container.push(boundFn(element))
                }
            }
        } else if (typeof value == 'object') {
            for (const key in value) {
                const element = value[key]
                if (Array.isArray(element)) {
                    container[key] = recursiveMap(element, [])
                } else if (typeof element == 'object') {
                    container[key] = recursiveMap(element, {})
                } else {
                    container[key] = boundFn(element)
                }
            }
        }

        return container
    }

    return recursiveMap(value, returnVal)
}
const double = (x) => x * 2
const test = deepMap(
    {
        foo: 1,
        bar: [2, 3, 4],
        qux: { a: 5, b: 6 },
    },
    double,
)
const dummy = () => 'dummy'
const identity = (x) => x
// console.log(test)

// console.log( deepMap({ bar: 3, foo: 2 }, function (this, x) {
//           return this.foo * x;
// }))
