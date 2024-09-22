function selectionSort(arr) {
    for (let index = 0; index < arr.length; index++) {
        let current = arr[index]
        let min = index
        for (let j = index; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j
        }

        arr[index] = arr[min]
        arr[min] = current
    }

    return arr
}

selectionSort([12, 16, 14, 1, 2, 3])
