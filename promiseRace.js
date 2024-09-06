async function promiseRace(iterable) {
    return new Promise((resolve, reject) => {
        iterable.forEach((promise) => {
            const promised = Promise.resolve(promise)
            promised.then((res) => resolve(res)).catch((err) => reject(err))
        })
    })
}
// const p0 = new Promise((resolve) => {
//     setTimeout(() => {
//         resolve('two seconds')
//     }, 2000)
// })
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('one second!')
//     }, 1000)
// })

const p0 = Promise.reject(42)
const p1 = Promise.resolve(2)
const p2 = 2
promiseRace([p0, p1])
    .then((res) => console.log('resolved', res))
    .catch((err) => console.log('rejected: ', err)) // 42
