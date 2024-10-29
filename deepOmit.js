function deepOmit(val, keys) {
    const returnObj = Array.isArray(val) ? [] : {}
    function recursiveOmit(input, output) {
        if (Array.isArray(val)) {
            for (let index = 0; index < input.length; index++) {
                const element = input[index]
                if (Array.isArray(element)) {
                    output.push(recursiveOmit(element), [])
                } else if (typeof element === 'object') {
                    output.push(recursiveOmit(element), {})
                } else {
                    output.push(element)
                }
            }
        } else {
            for (const key in input) {
                if (!keys.includes(key)) {
                    const element = input[key]
                    if (Array.isArray(element)) {
                        output[key] = recursiveOmit(element, [])
                    } else if (typeof element === 'object') {
                        output[key] = recursiveOmit(element, {})
                    } else {
                        output[key] = element
                    }
                }
            }
        }
        return output
    }
    return recursiveOmit(val, returnObj)
}
const obj = {
    a: 1,
    b: 2,
    c: {
        d: 3,
        e: 4,
    },
    f: [5, 6],
}

const test = deepOmit(obj, ['b', 'c', 'e'])
console.log('test', test);