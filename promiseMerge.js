async function promiseMerge(p1, p2) {
    const value1 = await p1
    const value2 = await p2

    return new Promise((resolve, reject) => {
        if (typeof value1 !== typeof value2) reject('Unsupported data types')

        if (typeof value1 === 'string') {
            resolve(value1 + value2)
        } else if (typeof value1 === 'number') {
            resolve(value1 + value2)
        } else if (Array.isArray(value1)) {
            resolve([...value1, ...value2])
        } else if (typeof value1 === 'object') {
            resolve({ ...value1, ...value2 })
        } else {
            reject('Unsupported data types')
        }
    })
}

//  console.log(await promiseMerge(Promise.resolve(1), Promise.resolve(2))); // 3
promiseMerge(Promise.resolve('abc'), Promise.resolve('def')).then((res) =>
    console.log(res),
)
promiseMerge(Promise.resolve([1, 2, 3]), Promise.resolve([4, 5, 6])).then(
    (res) => console.log(res),
)
promiseMerge(Promise.reject(1), Promise.resolve(2)).then((res) =>
    console.log(res),
)
