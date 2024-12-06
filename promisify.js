function runInSequence(promises) {
    // Your code here
    let results = []
    return new Promise((resolve, reject) => {
        promises[0]()
            .then((result) => {
                results.push(result)
                console.log(result)
                return result
            })
            .then(() => {
                return promises[1]()
            })
            .then((result) => {
                console.log(result)
                results.push(result)
                return promises[2]()
            })
            .then((result) => {
                console.log(result)
                results.push(result)
                resolve(results)
            })
    })
}

// Example usage:
const task1 = () =>
    new Promise((resolve) => setTimeout(() => resolve('Task 1 done'), 1000))
const task2 = () =>
    new Promise((resolve) => setTimeout(() => resolve('Task 2 done'), 500))
const task3 = () =>
    new Promise((resolve) => setTimeout(() => resolve('Task 3 done'), 200))

runInSequence([task1, task2, task3]).then((results) =>
    console.log('runInSequence', results),
)

Promise.all([task1(), task2(), task3()]).then((results) =>
    console.log('promise all', results),
)
// Expected output after 1.7 seconds: ["Task 1 done", "Task 2 done", "Task 3 done"]

function squareAndDouble(number) {
    return new Promise((resolve) => {
        resolve(number * number)
    }).then((res) => res * 2)
}

// Example usage:
// squareAndDouble(3).then((result) => console.log(result)) // Should log 18 (3^2 * 2)
function resolvePromises(promises) {
    return new Promise((resolve, reject) => {
        Promise.all(promises)
            .then((result) => resolve(result))
            .catch((err) => reject(err))
    })
}

// Example usage:
const promise1 = Promise.resolve(3)
// const promise2 = Promise.reject(42)
// const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'foo'))

// resolvePromises([promise1, promise2, promise3])
//     .then((results) => console.log(results)) // [3, 42, "foo"]
//     .catch((error) => console.error('Error:', error))
// function promisify(func) {
//     return (...args) => {
//         return new Promise((res, rej) => {
//             if (typeof args[1] === 'function') {
//                 return func(...args)
//             }
//             return res(...args)
//         })
//     }
// }

// async function runTest() {
//     function asyncIdentity(x, cb) {
//         setTimeout(() => {
//             cb(null, x)
//         }, 10)
//     }
//     function delayedResolve(cb) {
//         setTimeout(() => {
//             cb(null, 42)
//         }, 10)
//     }
//     const promisified = promisify(delayedResolve)
//     const res = await promisified()
//     console.log(res)
// }
// runTest()
