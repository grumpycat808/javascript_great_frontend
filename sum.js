function sum(value) {
    let sumArr = [value]

    const returnFn = (newValue) => {
        if (typeof newValue === 'undefined') {
            const total = sumArr.reduce(
                (accumulator, currentVal) => accumulator + currentVal,
                0,
            )
            sumArr = [value]
            return total
        } else {
            sumArr.push(newValue)
            return returnFn
        }
    }
    return returnFn
}
console.log(sum(1)()) // 1
console.log(sum(1)(2)()) // 3
console.log(sum(1)(2)(-3)()) // 0
