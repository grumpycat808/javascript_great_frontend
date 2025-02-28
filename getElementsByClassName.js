function isSubset(a, b) {
    return Array.from(a).every((value) => b.contains(value))
}
function getElementsByClassName(element, classNames) {
    const returnArr = []
    const classNamesSet = new Set(classNames.trim().split(/\s+/))

    const recursiveGet = (elem) => {
        if (elem === null) return
        if (isSubset(classNamesSet, elem.classList)) returnArr.push(elem)
        for (const child of elem.children) {
            recursiveGet(child)
        }
    }
    for (const child of element.children) {
        console.log(child)
        recursiveGet(child)
    }
    return returnArr
}

const doc = new DOMParser().parseFromString(
    `<div class="foo bar baz">
        <span class="bar baz">Span</span>
        <p class="foo baz">Paragraph</p>
        <div class="foo bar"></div>
        </div>`,
    'text/html',
)
// console.log(doc.body.children[0].children[2].children)
console.log(getElementsByClassName(doc.body, 'foo bar'))
// console.log(doc.body.childNodes[0].childNodes)
