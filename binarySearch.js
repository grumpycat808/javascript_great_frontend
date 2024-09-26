function binarySearch(arr, target) {
    let floor = 0
    let ceiling = arr.length - 1
    let middle = Math.floor(arr.length / 2)
    while (floor > ceiling) {
        if (arr[middle] === target) {
            return middle
        }
        middle = Math.floor((ceiling - floor) / 2)
        if (arr[middle] > target) {
            ceiling = middle - 1
        } else {
            floor = middle + 1
        }
    }
    return -1
}
