function textSearch(text, query) {
    if (!query) return text
    const searchText = text.toLowerCase()
    const searchQuery = query.toLowerCase()

    const index = searchText.indexOf(searchQuery)
    if (index === -1) return text

    var regEx = new RegExp(query, 'ig')
    var replaceMask = `<b>${query}</b>`

    var result = text.replace(regEx, replaceMask)

    return result
}

console.log(textSearch('The hardworking Dog overtakes the lazy dog', 'dog'))
var searchMask = 'dog'
var regEx = new RegExp(searchMask, 'ig')
var replaceMask = '<b>dog</b>'

var result = 'The hardworking Dog overtakes the lazy dog'.replace(
    regEx,
    replaceMask,
)

console.log('result', result)
