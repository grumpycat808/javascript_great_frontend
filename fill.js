function fill(array, value, start = 0, end = array.length) {
    if (start < 0) start = array.length + start
    if (end < 0) end = array.length + end
    if (start >= array.length) return array

    for (let index = start; index < end; index++) {
        array[index] = value
    }
    console.log(array)
    return array
}

fill([1], '*', 2, 3)
