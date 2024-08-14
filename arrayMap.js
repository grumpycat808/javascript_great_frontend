Array.prototype.myMap = function (callbackFn, thisArg) {
    const returnArr = []
    for (let index = 0; index < this.length; index++) {
        const element = this[index]
        const result = callbackFn(thisArg, element, index)

        returnArr[index] = result
    }

    console.log(returnArr)
    return returnArr
}[(1, 2, 3, 4)].myMap((i) => i * i)
