const obj = {}

const isEvenIndex = (_, index) => index % 2 === 0
const isThisProductEvenThis = function (element) {
    console.log(this)
    return (element * this) % 2 === 0
}
const isThisProductEven = function (element) {
    return element % 2 === 0
}
Array.prototype.myFilter = function (callbackFn, thisArg) {
    const returnArr = []
    const bounbFunc = callbackFn.bind(thisArg)

    this.forEach((item, index, arr) => {
        if (bounbFunc(item, index, arr)) {
            returnArr.push(item)
        }
    })

    return returnArr
}
const thisArg = 3
console.log('filtered: ', [1, 2, 3, 4].myFilter(isThisProductEvenThis, thisArg))
