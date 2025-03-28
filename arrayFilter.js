Array.prototype.myFilter = function (callbackFn, thisArg) {
    const boundFunc = thisArg ? callbackFn.bind(thisArg) : callbackFn
    const returnArr = []

    this.forEach((item, index) => {
        if (boundFunc(item, index)) returnArr.push(i)
    })

    return returnArr
}

function greaterThan3(num) {
    return num > 3
}

const arr = [1, 2, 3, 4, 5].myFilter(greaterThan3)
console.log(arr)
