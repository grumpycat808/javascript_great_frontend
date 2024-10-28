function promiseTimeout(promise, duration) {
    let resolved = false
    let result
    let settled = false

    promise
        .then((res) => {
            settled = true
            resolved = true
            result = res
        })
        .catch((res) => {
            settled = true
            result = res
        })
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (settled) {
                if (resolved) {
                    resolve(result)
                } else {
                    reject(result)
                }
            } else {
                reject('Promise timeout')
            }
        }, duration)
    })
}
function fakeFetch(latency) {
    return new Promise((resolve, reject) => {
        // Simulate an asynchronous operation that resolves after `latency`.
        setTimeout(() => {
            resolve('Data successfully fetched!')
        }, latency)
    })
}

const response = await promiseTimeout(fakeFetch(1000), 2000)
console.log(response) // Data successfully fetched!

await promiseTimeout(fakeFetch(3000), 2000)
// "Promise timeout" thrown.
