// function clamp(value, lower, upper) {
//     if (value <= upper && value >= lower) return value

//     if (value > upper) return upper
//     if (value < lower) return lower
// }

// function mean(array) {
//     const total = array.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue
//     }, 0)

//     return total / array.length
// }

// function chunk(array, size = 1) {
//     const numOfChunks = Math.floor(array.length / size)
//     const returnArr = []
//     let i = 0

//     for (let index = 0; index < numOfChunks; index++) {
//         const tempArr = []
//         for (let j = 0; j < size; j++) {
//             tempArr.push(array[i])
//             i++
//         }
//         returnArr.push(tempArr)
//     }

//     // const numLeftover = array.length - (numOfChunks * size);
//     const tempArr = array.slice(numOfChunks * size)

//     if (tempArr.length) returnArr.push(tempArr)

//     return returnArr
// }

// function findIndex(array, predicate, fromIndex = 0) {
//     for (let index = fromIndex; index < array.length; index++) {
//         const element = array[index]
//         if (predicate(element)) return index
//     }

//     return -1
// }
// const arr = [1, 2, 3, 4, 5]
// // console.log(findIndex(arr, (num) => num > 3, 3));

// function makeCounter(initialValue = 0) {
//     let initial = initialValue

//     const returnFunc = () => {
//         const num = initial
//         initial++
//         return num
//     }

//     return returnFunc
// }

// const counter = makeCounter()

// function compact(array) {
//     const falseyValues = [false, null, undefined, 0, '', NaN]
//     return array.filter((item) => !falseyValues.includes(item))
// }

// function difference(array, values) {
//     return array.filter((item) => !values.includes(item))
// }

function minBy(array, iteratee) {
    const sorted = array.sort((b, a) => {
        if (typeof iteratee(b) === 'string' || iteratee(b) instanceof String) {
            return iteratee(b).localeCompare(iteratee(a))
        } else {
            return iteratee(b) - iteratee(a)
        }
    })
    if (sorted && sorted.length) {
        return sorted.filter((item) => {
            return (
                iteratee(item) !== null && typeof iteratee(item) !== 'undefined'
            )
        })[0]
    }
}

console.log(
    minBy(
        [
            { name: 'Alice' },
            { name: 'Bob' },
            { name: 'Dennis' },
            { name: 'Zack' },
            { name: 'Charlie' },
        ],
        (o) => o.name,
    ),
)

console.log(
    minBy([{ n: 1 }, { n: 2 }, { n: 3 }], function (o) {
        return o.n
    }),
)
// function groupBy(array, iteratee) {
//     return array.reduce((accumulator, currentValue) => {
//         const result = iteratee(currentValue)
//         if (accumulator.hasOwnProperty(result)) {
//             accumulator[result] = [...accumulator[result], currentValue]
//         } else {
//             accumulator[result] = [currentValue]
//         }
//         return accumulator
//     }, {})
// }

// function countBy(array, iteratee) {
//     return array.reduce((accumulator, currentValue) => {
//         const result = iteratee(currentValue)
//         if (accumulator.hasOwnProperty(result)) {
//             accumulator[result] = accumulator[result] + 1
//         } else {
//             accumulator[result] = 1
//         }
//         return accumulator
//     }, {})
// }

// function inRange(value, start, end) {
//     if (!end) {
//         end = start
//         start = 0
//     }

//     if (start > end) {
//         let tempStart = start
//         start = end
//         end = tempStart
//     }
//     const inRange = value >= start && value < end

//     return inRange
// }

// function fromPairs(pairs) {
//     return pairs.reduce((accumulator, currentValue) => {
//         accumulator[currentValue[0]] = currentValue[1]
//         return accumulator
//     }, {})
// }
// const pairs = [
//     ['a', 1],
//     ['b', 2],
//     ['c', 3],
// ]

// function makeCounter(initialValue = 0) {
//     const initial = initialValue
//     let currentValue = initial
//     const get = () => currentValue

//     const increment = () => (currentValue = currentValue + 1)

//     const decrement = () => (currentValue = currentValue - 1)

//     const reset = () => (currentValue = initial)

//     return {
//         get,
//         increment,
//         decrement,
//         reset,
//     }
// }

// const counter2 = makeCounter(5)
// // console.log(counter2.get()) // 5
// // console.log(counter2.increment()) // 4
// // console.log(counter2.decrement()) // 3

// Array.prototype.square = function () {
//     const newArr = []
//     this.forEach((item) => newArr.push(item * item))

//     return newArr
// }

// async function sleep(duration) {
//     return new Promise((res) => {
//         setTimeout(() => {
//             res()
//         }, duration)
//     })
// }

// async function greeting() {
//     console.log('Hello!')
//     await sleep(2000)
//     console.log('Bye.') // Only logs after 2000 milliseconds (2 seconds)
// }

// function dropWhile(array, predicate) {
//     if (!array || array.length === 0) return []
//     let i = -1
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index]
//         if (!predicate(element, index, array)) {
//             i = index
//             break
//         }
//     }

//     if (i === -1) {
//         return []
//     } else {
//         const newArr = array.slice(i)
//         return newArr
//     }
// }
// const array = [20, 30, 40, 5, 6]
// // console.log(dropWhile(array, (value, _, arr) => value > arr.length))

// function uniqueArray(array) {
//     const set1 = new Set(array)
//     const returnArr = []

//     set1.forEach((item) => returnArr.push(item))
//     return returnArr
// }

// function intersection(...arrays) {
//     let tempArr = [];
//     arrays.forEach((array) => {
//         tempArr = [...tempArr, ...array];
//     })

//     const set = new Set(tempArr);
//     const returnArr = []
//     set.forEach((item) => returnArr.push(item))
//     console.log("returnArr", returnArr)

//     const test = returnArr.filter((item) => {
//         let includedInAll = true;
//         arrays.forEach((arr) => {
//             if(!arr.includes(item)) includedInAll = false;
//         })
//         return includedInAll;
//     })

//     return test;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4];
// const arr3 = [3, 4, 5];

function dropRightWhile(array, predicate) {
    let returnIndex = -1
    for (let index = array.length - 1; index >= 0; index--) {
        const element = array[index]

        if (!predicate(element, index, array)) {
            returnIndex = index
            break
        }
    }

    if (returnIndex === -1) {
        return []
    } else {
        return array.slice(0, returnIndex + 1)
    }
}
const array = [20, 30, 40, 5, 4]
// console.log(dropRightWhile(array, (value, _, arr) => value <= arr.length));
