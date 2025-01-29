function getElementsByClassName(element, classNames) {
    throw 'Not implemented!'
}

const doc = new DOMParser().parseFromString(
    `<div class="foo bar baz 2">
    <span class="bar baz">Span</span>
    <p class="foo baz">Paragraph</p>
    <div class="foo bar"></div>
</div>`,
    'text/html',
)

console.log(doc.body.children[0])
