function rangeRight(start = 0, end, step = 1) {
    const returnArr = []
    if (end === undefined) end = 0
    if (start === end) return []
    if (step === 0) {
        return returnArr
    }
    let counter = start
    let failsafe = 0
    if (start < 0 && end === 0) {
        console.log('HERE')
        while (counter < 0 && failsafe < 100) {
            counter++
            returnArr.push(counter)
            failsafe++
        }
    } else {
        while (counter < end && failsafe < 100) {
            returnArr.unshift(counter)
            counter += step
            failsafe++
        }
    }

    return returnArr
}

console.log(rangeRight(-4))
