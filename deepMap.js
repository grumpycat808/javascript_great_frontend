function deepMap(value, fn) {
    if (!Array.isArray(value) && value?.constructor !== Object) {
        return fn(value)
    }
    const returnObj = Array.isArray(value) ? [] : {}

    function recursiveMap(input, output) {
        // debugger
        if (Array.isArray(input)) {
            // debugger
            for (let index = 0; index < input.length; index++) {
                const element = input[index]
                if (Array.isArray(element)) {
                    output.push(recursiveMap(element, []))
                } else if (element?.constructor === Object) {
                    output.push(recursiveMap(element, {}))
                } else {
                    output.push(fn(element))
                }
            }
        } else {
            const boundFn = fn.bind(input)
            for (const key in input) {
                const element = input[key]
                if (Array.isArray(element)) {
                    output[key] = recursiveMap(element, [])
                } else if (element?.constructor === Object) {
                    output[key] = recursiveMap(element, {})
                } else {
                    output[key] = boundFn(element)
                }
            }
        }
        return output
    }

    return recursiveMap(value, returnObj)
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
console.log('test', test)
