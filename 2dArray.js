const initialState = [
    ['a', 'd', 'g'],
    ['b', 'e', 'h'],
    ['c', 'f', 'i'],
]

for (let index = 0; index < initialState.length; index++) {
    for (let j = 0; j < initialState[0].length; j++) {
        console.log(initialState[j][index])
    }
}
