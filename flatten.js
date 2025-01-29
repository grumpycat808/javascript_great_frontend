function flatten(value) {
    const returnArr = []

    function recursiveFlatten(arr, returnArr) {
        arr.forEach((element) => {
            if (Array.isArray(element)) {
                returnArr.push(...recursiveFlatten(element, []))
            } else {
                returnArr.push(element)
            }
        })
        return returnArr
    }
    return recursiveFlatten(value, returnArr)
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
