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

Array.prototype.myReduce = function (callbackFn, initialValue) {
    if (typeof initialValue === 'undefined' && this.length === 0)
        throw new Error('Invalid')
    if (!this.length) return initialValue
    let start = 0
    if (initialValue === undefined) {
        initialValue = this[0]
        start = 1
    }
    let accumulator = initialValue

    for (let index = start; index < this.length; index++) {
        if (this.hasOwnProperty(index)) {
            // const boundFunc = callbackFn.bind(thisArg)
            accumulator = callbackFn(accumulator, this[index], index, this)
        }
    }

    return accumulator
}
Array.prototype.myConcat = function (...items) {
    const returnArr = [...this]
    for (let index = 0; index < items.length; index++) {
        const element = items[index]
        if (returnArr.hasOwnProperty(index) && element !== undefined) {
            if (Array.isArray(element)) {
                returnArr.push(...element)
            } else {
                returnArr.push(element)
            }
        }
    }
    console.log('returnArr', returnArr)
    return returnArr
}

const arr = [1, undefined, 2]
arr.myConcat(3, 4)
