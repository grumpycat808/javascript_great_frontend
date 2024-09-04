async function promiseMerge(p1, p2) {
    try {
        const value1 = await p1
        const value2 = await p2

        console.log("type of value1",  value1)
        return new Promise((resolve, reject) => {
            if (typeof value1 !== typeof value2) reject('Unsupported data types')
    
            if (typeof value1 === 'string') {
                resolve(value1 + value2)
            } else if (typeof value1 === 'number') {
                resolve(value1 + value2)
            } else if (Array.isArray(value1)) {
                resolve([...value1, ...value2])
            } else if (value1.constructor === Object) {
                resolve({ ...value1, ...value2 })
            } else {
                reject('Unsupported data types')
            }
        })
    } catch (error) {
        return Promise.reject(error)
    }

}

//  console.log(await promiseMerge(Promise.resolve(1), Promise.resolve(2))); // 3
promiseMerge(Promise.reject(new Set([2]), 10), Promise.resolve(new Set([1]), 5)).then((res) =>
    console.log(res),
)

