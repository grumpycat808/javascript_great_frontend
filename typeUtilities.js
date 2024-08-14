function isBoolean(value) {
    return typeof value === 'boolean'
}

function isNumber(value) {
    return typeof value === 'number'
}

function isNull(value) {
    return value === null
}

function isString(value) {
    return typeof value === 'string'
}

function isSymbol(value) {
    return typeof value === 'symbol'
}

function isUndefined(value) {
    return typeof value === 'undefined'
}

function isArray(value) {
    return Array.isArray(value)
}

function isFunction(value) {
    return typeof value === 'function'
}

function isObject(value) {
    return value instanceof Object
}

function isPlainObject(value) {
    if (Array.isArray(value) || value === undefined) return false
    return value && [undefined, Object].includes(value.constructor)
}
const test = () => {}
console.log(isPlainObject(null))
class Foo {
    value

    constructor(value) {
        this.value = value
    }
}

console.log(typeof Foo)
