function curry(func) {
    let numArgs
    let called = 0
    let orginalArgs = []
    return function returnFunc(...args) {
        numArgs = func.length
        called++
        orginalArgs.push(...args)
        if (called === numArgs) {
            console.log(orginalArgs)
            return func(...orginalArgs)
        }
        return returnFunc
    }
}

const empty = () => 0
const square = (a) => a * a
const mul = (a, b) => a * b
const curried = curry(mul)
console.log(curried())
