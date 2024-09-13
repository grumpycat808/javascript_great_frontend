function curry(func) {
    let numArgs = func.length
    let called = 0
    let orginalArgs = []

    return function returnFunc(...args) {
        called++
        orginalArgs.push(...args)
        // console.log("called", called)
        if (orginalArgs.length === numArgs) {
            console.log('max calls reached', orginalArgs)
            return func(...orginalArgs)
        }
        return returnFunc
    }
}
const mul = (a, b) => a * b;
const curried = curry(mul);
curried()
console.log(curried(7)(3))