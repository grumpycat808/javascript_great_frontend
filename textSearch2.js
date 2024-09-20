function textSearch(text, query) {
    const lowerText = text.toLowerCase()
    const lowerQuery = query.toLowerCase()
    const indices = []
    const substrings = []

    if (text === '') return ''
    if (query === '') return text
    for (let index = 0; index < text.length; index++) {
        let counter = 0
        while (
            lowerText.charAt(index + counter) === lowerQuery.charAt(counter) &&
            counter + index < text.length &&
            counter < 50
        ) {
            console.log('counter', counter)
            counter++
            if (counter === lowerQuery.length) indices.push(index)
        }
    }
    if (indices.length === 0) return text
    for (let i = 0; i < indices.length; i++) {
        substrings.push(text.substring(indices[i], indices[i + 1]))
    }
    //need to take care of case when query is index 0
    console.log(substrings)
    let returnStr = ''
    for (let index = 0; index < substrings.length; index++) {
        const item = substrings[index]
        returnStr +=
            `<b>${item.substring(0, query.length)}</b>` +
            item.substring(query.length)
    }

    if (indices[0] !== 0) {
        returnStr = text.substring(0, indices[0]) + returnStr
    }
    console.log('returnStr', returnStr)
    return returnStr.replaceAll('</b><b>', '')
}

textSearch('The Quick Brown Fox Jumps Over The Lazy Dog', 'fox')
