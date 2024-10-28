const arr = [12, 16, 14, 1, 2, 3]
console.log(recursiveMergeSort(arr))
function recursiveMergeSort(arr) {
    if (arr.length <= 1) return arr
    const middle = Math.floor(arr.length / 2)
    const left = recursiveMergeSort(arr.slice(0, middle))
    const right = recursiveMergeSort(arr.slice(middle, arr.length))
    // console.log(arr.slice(0, middle));
    // console.log(arr.slice(middle, arr.length));
    return merge(left, right)
}

function merge(left, right) {
    let leftCounter = 0
    let rightCounter = 0
    // const counter = 0;
    const returnArray = []
    while (leftCounter < left.length && rightCounter < right.length) {
        if (left[leftCounter] < right[rightCounter]) {
            returnArray.push(left[leftCounter])
            leftCounter++
        } else {
            returnArray.push(right[rightCounter])
            rightCounter++
        }
        // counter++;
    }

    while (leftCounter < left.length) {
        returnArray.push(left[leftCounter])
        leftCounter++
    }

    while (rightCounter < right.length) {
        returnArray.push(right[rightCounter])
        rightCounter++
    }

    return returnArray
}
