// function compose(fns) {
//     console.log(fns)
// }
function compose(...fns) {
    return (args) => {
        if (!fns.length) return args
        let initial = args
        for (let index = fns.length - 1; index >= 0; index--) {
            const fn = fns[index]
            initial = fn(initial)
        }

        return initial
    }
}

const add1 = (num) => num + 1
const double = (num) => num * 2
const subtract10 = (num) => num - 10

const composedFn = compose(subtract10, double, add1)
console.log(composedFn(3)) // (3 + 1) * 2 - 10 => -2
