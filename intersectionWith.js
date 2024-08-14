function intersectionWith(comparator, ...arrays) {
    for (let index = 0; index < arrays.length; index++) {
        const array = arrays[index]
        for (let j = 0; j < array.length; j++) {
            const array2 = array[j]
            matchExists(array, array2, comparator)
        }
    }
}

function matchExists(array1, array2, comparator) {
    let exists = false
    for (let index = 0; index < array1.length; index++) {
        for (let j = 0; j < array2.length; j++) {
            if (comparator(array1[index], array2[j])) exists = true
        }
    }
    return exists
}

const arr1 = [
    { x: 1, y: 2 },
    { x: 2, y: 3 },
]
const arr2 = [
    { y: 2, x: 1 },
    { x: 3, y: 4 },
]

const result = intersectionWith(
    (a, b) => a.x === b.x && a.y === b.y,
    arr1,
    arr2,
) // => [{ x: 1, y: 2 }]
