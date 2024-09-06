const isThisProductEven = function (element) {
    return (element * this) % 2 === 0
}

Array.prototype.myFilter = function (callbackFn, thisArg) {
    const returnArr = []

    this.forEach((item, index, array) => {
        if (callbackFn(item, index, array)) returnArr.push(item)
    })

    return returnArr
}

console.log('filtered: ', [1, 2, 3, 4].myFilter(isThisProductEven, 10))
