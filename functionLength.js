function functionLength(fn) {
    console.log(fn.length)
    return fn
}

function foo() {}
function bar(a) {}
function baz(a, b) {}

functionLength(foo) // 0
functionLength(bar) // 1
functionLength(baz) // 2
