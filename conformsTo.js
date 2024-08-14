function conformsTo(object, source) {
    if (Object.keys(object).length === 0) return false
    let conforms = true
    for (const key in source) {
        if (Object.hasOwnProperty.call(source, key)) {
            const value = source[key]

            const objectValue = object[key]
            if (!value(objectValue)) conforms = false
        }
    }

    return conforms
}

const source = {
    a: (value) => value > 0,
    b: (value) => value < 3,
}
conformsTo({ a: 1, b: 2 }, source)
