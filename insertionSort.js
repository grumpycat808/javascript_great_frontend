function insertionSort(arr) {
    if (arr.length <= 1) return arr

    for (let index = 1; index < arr.length; index++) {
        const element = arr[index]
        let j = index - 1
        while (element < arr[j] && j >= 0) {
            // debugger
            arr[j + 1] = arr[j]
            j--
        }
        arr[j + 1] = element
    }
    return arr
}

console.log(insertionSort([2, 8, 5, 3, 9, 4]))
