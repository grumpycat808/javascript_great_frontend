function range(start = 0, end, step = 1) {
    if (!end && start < 0) {
        step = -1
    }
    if (!end) {
        end = start
        start = 0
    }

    const returnArr = []
    // console.log("Start", start);
    // console
    if (step === 0) {
        for (let index = start; index < end; index++) {
            returnArr.push(start)
        }
    } else if (step < 0) {
        for (let index = start; index > end; index = index + step) {
            returnArr.push(index)
        }
    } else {
        console.log(start, end, step)
        for (let index = start; index < end; index = index + step) {
            returnArr.push(index)
        }
    }
    console.log(returnArr)
    return returnArr
}

range(8, -2, -3)
