Array.prototype.myMap = function (callbackFn, thisArg) {
    const returnArr = []
    for (let index = 0; index < this.length; index++) {
        if (this.hasOwnProperty(index)) {
            const boundFunc = callbackFn.bind(thisArg)
            const result = boundFunc(this[index], index, this)

            returnArr[index] = result
        }
    }

    console.log(returnArr)
    return returnArr
}

Array.prototype.myFilter = function (callbackFn, thisArg) {
    const returnArr = []
    for (let index = 0; index < this.length; index++) {
        if (this.hasOwnProperty(index)) {
            const boundFunc = callbackFn.bind(thisArg)
            const result = boundFunc(this[index], index, this)

            if (result) returnArr.push(this[index])
        }
    }

    console.log(returnArr)
    return returnArr
}


const myArr = [1, 2, 3, 4];
console.log(myArr)
myArr.myFilter((value) => value < 3);