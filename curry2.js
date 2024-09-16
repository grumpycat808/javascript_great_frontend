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
            return returnFunction
        }
    }

    return returnFunction
}
function multiplyThreeNumbers(a, b, c) {
    return a * b * c
}

// function add(a, b) {
//     console.log('this in add', this)
//     return this.age + a + b
// }

const curried = curry(function (val1, val2) {
    console.log('this in curried', this)
    console.log('val1', val1);
    console.log("val2", val2)
    return this.multiplier * (val1 + val2)
})
 const curriedOne = curry(function (val1) {
    
    return this.multiplier * (val1)
})
const Person = {
    multiplier: 5,
    mul: curriedOne,
}
console.log(Person.mul(3))
