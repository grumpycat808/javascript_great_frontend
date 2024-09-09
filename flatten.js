function flatten(value) {
    console.log("value", value)

    if(!Array.isArray(value) || value.length===0) return 
    if (value.length > 1) {
        const first = value.shift();
        // console.log("first", first)
        return first + flatten(value)
    } else {
        if( value.length === 1) {
            return value[0]
        }
        
    }
}
console.log("flatten", flatten([1, 2, 3]))

// if(Array.isArray(value)) {
//     flatten(value[0])
// }

const value = [2, 54, 6, 7];

value.shift();
console.log(value)