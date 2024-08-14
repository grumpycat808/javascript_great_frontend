function limit(func, n) {
    let called = 0
    let result
    return function (...args) {
        const boundFunc = func.bind(this)
        if (called < n) {
            result = boundFunc(...args)
            called++
            return result
        } else {
            return result
        }
    }
}

let i = 1

function incrementBy(value) {
    // console.log("i", typeof i);
    // console.log("value", typeof value);
    i += value
    return i
}

const incrementByAtMostThrice = limit(incrementBy, 3)
incrementByAtMostThrice(2) // i is now 3; The function returns 3.
console.log(i)
incrementByAtMostThrice(3) // i is now 6; The function returns 6.
console.log(i)
incrementByAtMostThrice(4) // i is now 10; The function returns 10.
console.log(i)
incrementByAtMostThrice(5)
console.log(i)
