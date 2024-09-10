function flatten(value) {
    console.log('value', value)

    if (!Array.isArray(value) || value.length === 0) return
    if (value.length > 1) {
        const first = value.shift()
        const returnArr = [first]
        returnArr.push(flatten(value))
        return returnArr
    } else {
        if (value.length === 1) {
            return value[0]
        }
    }
}
console.log('flatten', flatten([1, [2, [3]]]))

function factorial(num) {
    if (num === 1) return 1
    return num * factorial(num - 1)
}

function fibonacci(num) {
    if (num <= 1) return num
    return fibonacci(num - 1) + fibonacci(num - 2)
}

console.log(fibonacci(9))
