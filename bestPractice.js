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
// console.log(curriedMultiplyThreeNumbers(4)(5)(6)) // 120

const containsFour = curriedMultiplyThreeNumbers(4)
const containsFourMulFive = containsFour(5)
// console.log(containsFourMulFive(6)) // 120

/** ARRAY FILTER */

Array.prototype.myFilter = function (callbackFn, thisArg) {
    const boundFunc = thisArg ? callbackFn.bind(thisArg) : callbackFn
    const returnArr = []

    this.forEach((item, index) => {
        if (boundFunc(item, index)) returnArr.push(index)
    })

    return returnArr
}

function greaterThan3(num) {
    return num > 3
}

const arr = [1, 2, 3, 4, 5].myFilter(greaterThan3)
// console.log(arr)

/** FLATTEN */

function flatten(value) {
    const returnArr = []

    function recursiveFlat(array, container) {
        for (let index = 0; index < array.length; index++) {
            const element = array[index]

            if (Array.isArray(element)) {
                recursiveFlat(element, container)
            } else {
                container.push(element)
            }
        }
        return container
    }

    return recursiveFlat(value, returnArr)
}
console.log(flatten([1, [2, [3, [4, [5]]]]]))
