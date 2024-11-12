function deepMerge(valA, valB) {
    // const returnObj = Array.isArray(valB) ? [...valB] : {...valB};

    function recursiveMerge(input, output) {
        if (Array.isArray(input)) {
            output = [...input, ...output]
        } else {
            for (const key in input) {
                const element = input[key]

                if (Array.isArray(element)) {
                    let outputArr = []
                    if (output.hasOwnProperty(key)) {
                        if (Array.isArray(output[key])) {
                            outputArr = [...output[key]]
                            output[key] = recursiveMerge(element, outputArr)
                        }
                    } else {
                        output[key] = recursiveMerge(element, outputArr)
                    }
                } else if (typeof element === 'object') {
                    let outputObj = {}
                    if (output.hasOwnProperty(key)) {
                        if (Array.isArray(output[key])) {
                            outputObj = [...output[key]]
                        } else if (typeof output[key] === 'object') {
                            outputObj =
                                output[key] == null ? null : { ...output[key] }
                        }
                        // outputObj = Array.isArray(output[key]) ?  : {...output[key]};
                    }

                    output[key] =
                        element == null
                            ? element
                            : recursiveMerge(element, outputObj)
                } else {
                    if (!output.hasOwnProperty(key)) {
                        output[key] = element
                    }
                }
            }
        }

        return output
    }
    const copyA = Array.isArray(valA) ? [...valA] : { ...valA }
    const copyB = Array.isArray(valB) ? [...valB] : { ...valB }
    return recursiveMerge(copyA, copyB)
}
const test = deepMerge({ foo: null }, { foo: {} })
console.log(test)

const test1 = null
const test2 = { ...test1 }
console.log('test2', test2)
