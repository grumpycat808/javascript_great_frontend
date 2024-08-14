function once(func) {
    let called = false

    let result

    return function (...args) {
        const boundFunc = func.bind(this)
        if (!called) {
            called = true
            result = boundFunc(...args)
            return result
        } else {
            return result
        }
    }
}
let i = 1

function incrementBy(value) {
    i += value
    return i
}

// const test = once(() => {
//     return incrementBy(5);
// })
// console.log("TEST", test())
// console.log("TEST", test())
const onced = once(function (val) {
    return this.multiplier * val
})

const obj = { multiplier: 5, mul: onced }
console.log('obj', obj.mul(7))
