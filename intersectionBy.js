function intersectionBy(iteratee, ...arrays) {
    let flattened = arrays.flat()
    let filtered = flattened.filter((original) => {
        let included = true
        arrays.forEach((array) => {
            const iteratedArr = array.map((item) => iteratee(item))

            if (!iteratedArr.includes(iteratee(original))) included = false
        })
        return included
    })

    const returnArr = []
    filtered.forEach((item) => {
        const iteratedArr = returnArr.map((item) => iteratee(item))
        if (!iteratedArr.includes(iteratee(item))) returnArr.push(item)
    })
    return returnArr
}

const result2 = intersectionBy(
    (str) => str.toLowerCase(),
    ['apple', 'banana', 'ORANGE', 'orange'],
    ['Apple', 'Banana', 'Orange'],
)

// function intersection(...arrays) {
//     const all = arrays.flat();

//     let filtered = all.filter((item) => {
//         let included = true;
//         arrays.forEach((array) => {
//             if(!array.includes(item)) included = false;
//         })
//         return included;
//     })
// }

// const arr1 = [1, 2, 3];
// const arr2 = [2, 3, 4];
// const arr3 = [3, 4, 5];

// console.log(intersection(arr1, arr2, arr3)); // => [3]
