function curry(func) {
    const minArgs = func.length
    let currentArgs = []

    function returnFunction(...args) {
        console.log('this line 7', this)
        if (args !== undefined && args.length > 0) currentArgs.push(...args)

        const boundFunc = func.bind(this)
        if (currentArgs.length === minArgs) {
            const allArgs = [...currentArgs]
            currentArgs = []
            return boundFunc(...allArgs)
        } else {
            const boundReturnFunc = returnFunction.bind(this)
            return boundReturnFunc
        }
    }

    return returnFunction
}
function multiplyThree(a, b, c) {
    return a * b * c;
  }
const curriedMultiplyThree = curry(multiplyThree);
console.log(curriedMultiplyThree(4)(5)(6)); // 120
console.log(curriedMultiplyThree(4)(5, 6)); // 120
console.log(curriedMultiplyThree(4, 5)(6)); // 120
console.log(curriedMultiplyThree(4, 5, 6)); // 120
