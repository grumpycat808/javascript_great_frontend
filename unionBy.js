function unionBy(iteratee, ...arrays) {
    const set = new Set([])
    const returnArr = []

    if (!arrays.length) return returnArr
    arrays.forEach((array) => {
        array.forEach((arrItem) => {
            if (!set.has(iteratee(arrItem))) {
                set.add(iteratee(arrItem))
                returnArr.push(arrItem)
            }
        })
    })

    return returnArr
}

unionBy((o) => o.m, [])
