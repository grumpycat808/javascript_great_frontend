function flatten(value) {
    const returnArr = []
    function recursiveFlat(newArray) {
        for (let index = 0; index < newArray.length; index++) {
            const element = newArray[index]
            if (Array.isArray(element)) {
                recursiveFlat(element)
            } else {
                returnArr.push(element)
            }
        }
    }

    recursiveFlat(value)
    console.log('returnArr', returnArr)
    return returnArr
}
flatten([[], [[]], [[], [[[]]]]])
