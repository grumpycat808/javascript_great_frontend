function curry(func) {
    // console.log(func.args)
    // console.log(func.arguments)
    // let called = 0
    let allArguments = []
    function innerFunc(...args) {
        allArguments = [...allArguments, ...args]
        if (allArguments.length == func.length) {
            const argsCopy = [...allArguments]
            allArguments = []
            return func(...argsCopy)
        } else {
            return innerFunc
        }
    }

    return innerFunc
}
function multiplyThreeNumbers(a, b, c) {
    return a * b * c
}

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers)
console.log(curriedMultiplyThreeNumbers(4)(5)(6)) // 120

const containsFour = curriedMultiplyThreeNumbers(4)
const containsFourMulFive = containsFour(5)
console.log(containsFourMulFive(6)) // 120
