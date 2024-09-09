function textSearch(text, query) {
    if (!query) return text
    const searchText = text.toLowerCase()
    const searchQuery = query.toLowerCase()

    const index = searchText.indexOf(searchQuery)
    if (index === -1) return text

    let newSearchText = searchText
    let indices = []
    let counter = 0

    while (newSearchText.length > 0 && counter < 100) {
        const foundIndex = newSearchText.indexOf(searchQuery)

        if (foundIndex === -1) break
        newSearchText = newSearchText.substring(foundIndex + query.length)
        indices.length === 0
            ? indices.push(foundIndex)
            : indices.push(
                  foundIndex + query.length + indices[indices.length - 1],
              )
        console.log('newSearchText', newSearchText)
        counter++
    }

    for (let index = 0; index < indices.length; index++) {
        text
    }
}

textSearch('aaabbcc', 'aa')
// var searchMask = 'dog'
// var regEx = new RegExp(searchMask, 'ig')
// var replaceMask = '<b>dog</b>'

// var result = 'The hardworking Dog overtakes the lazy dog'.replace(
//     regEx,
//     replaceMask,
// )

// console.log('result', result)
