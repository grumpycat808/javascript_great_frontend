function size(collection) {
    if (collection == null) return 0
    let size
    if (collection instanceof Map) {
        size = collection.size
    } else if (collection instanceof Set) {
        size = collection.size
    } else if (typeof collection === 'string') {
        size = collection.length
    } else if (collection instanceof Array) {
        size = collection.length
    } else if (collection instanceof Object) {
        size = Object.keys(collection).length
    }
    console.log(size)
    return size
}
function isEmpty(value) {
    if (value == null) return true
    if (value === true) return true
    let size
    if (value instanceof Map) {
        size = value.size
    } else if (value instanceof Set) {
        size = value.size
    } else if (typeof value === 'string') {
        size = value.length
    } else if (value instanceof Array) {
        size = value.length
    } else if (value instanceof Object) {
        size = Object.keys(value).length
    }

    return size === 0
}
// Arrays.
// size([1, 2, 3, 4, 5]) // => 5
// // Object.
// size({ a: 1, b: 2 }) // => 2
// // Strings.
// size("peanut") // => 6
// // Sets.
// size(new Set([1, 2, 3])) // => 3
// // Maps.
// size(
//     new Map([
//         [1, 2],
//         [3, 4],
//     ]),
// ) // => 2

size()
