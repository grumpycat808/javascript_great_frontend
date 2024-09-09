function textSearch(text, query) {
    // let returnStr = text

    const textToLower = text.toLowerCase()
    const queryToLower = query.toLowerCase()
    let foundArray = []
    let start = 0
    for (let index = 0; index < text.length; index++) {
        let pointer = 0
        console.log('index', index)
        while (
            textToLower.charAt(pointer + index) ===
                queryToLower.charAt(pointer) &&
            pointer + index < text.length
        ) {
            if (pointer === query.length - 1) {
                //match found
                index = index + query.length
                console.log('found word at: ', index)
                foundArray.push(text.substring(start, index))
                start = index
                pointer = 0
                // const replaced = `${returnStr.substring(0, index - query.length)}<b>${returnStr.substring(index - query.length, index)}</b>`
                // console.log("replaced", replaced)
                // returnStr = `${returnStr.substring(0, index - query.length)}<b>${returnStr.substring(index - query.length, index)}</b>${returnStr.substring(index)}`;
            }
            pointer++
        }
    }
    console.log(foundArray)

    let returnStr = ''

    foundArray.forEach((item) => {
        returnStr += `${item.substring(0, item.length - query.length)}<b>${query}</b>`
    })

    console.log('Return str', returnStr)
}
textSearch('dogadogdog', 'dog') //[6, 11, 16]

// textSearch('The quick brown fox jumps over the lazy dog', 'he')
console.log('HEY')
