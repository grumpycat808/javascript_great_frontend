function curry(func) {
    const minArgs = func.length
    let currentArgs = []

    const returnFunction = (...args) => {
        currentArgs.push(...args)
        console.log(...currentArgs)
        if (currentArgs.length === minArgs) {
            const allArgs = [...currentArgs];
            currentArgs = []
            return func(...allArgs)
        } else {
            return returnFunction
        }
    }

    return returnFunction
}
function multiplyThreeNumbers(a, b, c) {
    return a * b * c
}

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers)
console.log("result", curriedMultiplyThreeNumbers(4)(5)(6)) // 120

const containsFour = curriedMultiplyThreeNumbers(4)
const containsFourMulFive = containsFour(5)
console.log("result", containsFourMulFive(1)) // 120
