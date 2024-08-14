function promiseResolve(value) {
    return new Promise((res) => {
        res(value)
    })
}

const original = new Promise((resolve) => resolve(42))
const cast = promiseResolve(original)
console.log(cast) // 42
