function deepEqual(valueA, valueB) {
    return JSON.stringify(valueA) === JSON.stringify(valueB)
}

console.log(deepEqual([1, 2, 3], [1, 2, 3]))
console.log(deepEqual('foo', 'foo'))
console.log(deepEqual({ id: 2 }, { id: 1 }))
