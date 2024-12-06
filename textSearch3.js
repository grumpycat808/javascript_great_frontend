function textSearch(text, query) {
    if (!query) return

    function runSearch(text, query) {
        let queryLC = query.toLowerCase()
        // const indices = [];
        let newString = ''

        const recursiveSearch = (haystack) => {
            let lc = haystack.toLowerCase()
            if (lc.length == 0 || query.length === 0 || !lc.includes(queryLC)) {
                newString += haystack
                return
            }
            // debugger

            const index = lc.indexOf(queryLC)
            // indices.push(index + startingIndex);
            newString +=
                haystack.slice(0, index) +
                '<b>' +
                haystack.slice(index, index + query.length) +
                '</b>'
            recursiveSearch(
                haystack.slice(index + query.length),
                index + query.length,
            )
        }

        recursiveSearch(text, 0)
        newString = newString.replace('</b><b>', '')
        return newString
    }

    let newString = runSearch(text, query[0])

    if (query.length > 1) {
        for (let index = 1; index < query.length; index++) {
            const element = query[index]
            newString = runSearch(newString, element)
        }
    }

    return newString
}

console.log(
    'textSearch',
    textSearch('This is Uncopyrightable!', ['copy', 'right', 'table']),
)
