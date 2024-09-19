function flatten(value) {
    if (!value) return
    console.log('HERE')
    // if (!Array.isArray(value)) return [value]
    const returnArr = []
    for (let index = 0; index < value.length; index++) {
        let element = value[index]
        let counter = 0
        while (Array.isArray(element) && counter < 50) {
            // debugger
            //INDEX NEEDS TO INCREMENT I THINK?@
            //SPLICE? DO NOT RUN!! INFINITE LOOPS
            value.splice(index, 1, ...element)
            element = value[index]
            console.log('counter', counter)
        }
        returnArr.push(element)
    }

    return returnArr
}
console.log('flatten', JSON.stringify(flatten([[]])))
function returnArr(inputArr) {
    console.log('inputArr', inputArr)
    // debugger
    if (inputArr.length === 0) {
        return inputArr
    }
    const first = inputArr.pop()
    const newArr = returnArr(inputArr)
    // console.log("newArr", newArr);
    newArr.push(first * 2)
    return newArr
}

// console.log(returnArr([4, 5, 6]))

function array11(nums) {
    let copy = [...nums]
    if (copy.length === 0) return 0

    if (copy[nums.length - 1] === 11) {
        copy.pop()
        console.log('copy', copy)
        return 1 + array11(copy)
    } else {
        copy.pop()
        return array11(copy)
    }
}

// console.log(array11([11, 11, 2, 3, 4, 11, 11]))
/**
 *
 *
 */
