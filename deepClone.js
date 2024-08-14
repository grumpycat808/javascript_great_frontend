function deepClone(value) {
    const string = JSON.stringify(value)

    return JSON.parse(string)
}
const obj1 = { user: { role: 'admin' } }
const clonedObj1 = deepClone(obj1)

clonedObj1.user.role = 'guest' // Change the cloned user's role to 'guest'.
console.log(clonedObj1.user.role) // 'guest'
console.log(obj1.user.role) // Should still be 'admin'.
