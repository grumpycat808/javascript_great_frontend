function curry(func) {
    const numArgs = func.length

    let argsArray = []
    //Make this recursive

    function recursiveFunc(...args) {
        return () => {
            argsArray.push(...args)

            if (argsArray.length === numArgs) {
                return func(...argsArray)
            } else {
                return recursiveFunc(...args)
            }
        }
    }
    return recursiveFunc
}
const square = (a) => a * a
// const curried = curry(square);
function multiplyThreeNumbers(a, b, c) {
    return a * b * c
}

const curriedMultiplyThreeNumbers = curry(multiplyThreeNumbers)
console.log('curriedMultiplyThreeNumbers', curriedMultiplyThreeNumbers)
const result = curriedMultiplyThreeNumbers(4)(5)(6) // 120
console.log('result', result)
// const containsFour = curriedMultiplyThreeNumbers(4)
// const containsFourMulFive = containsFour(5)
// containsFourMulFive(6) // 120

// const curried = curry(function (val) {
//     console.log(this)
//     return this.multiplier * val
// })

// const Person = {
//     multiplier: 5,
//     multiplyAge: curried,
// }

// console.log(Person.multiplyAge(2))
// console.log(curried(2))//calling returnFunc

// console.log(curried(3))//calling returnFunc
