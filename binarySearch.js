function binarySearch(arr, target) {
    let floor = 0
    let ceiling = arr.length - 1
    let middle = Math.floor(arr.length / 2)

    while (floor <= ceiling) {
        if (arr[middle] === target) {
            return middle
        }
        if (arr[middle] > target) {
            ceiling = middle - 1
            middle = Math.floor((ceiling - floor) / 2)
        } else if (arr[middle] < target) {
            floor = middle + 1
            middle = Math.floor((ceiling + floor) / 2)
        }
    }
    return -1
}

console.log('binarySearch', binarySearch([1, 2, 3, 10, 11, 20], 20))
