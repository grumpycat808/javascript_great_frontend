function classNames(...args) {
    const returnArr = []
    const flattenedArgs = flatten(args);
    console.log("flattened", flattenedArgs)
    for (let index = 0; index < flattenedArgs.length; index++) {
        const className = flattenedArgs[index]
        if (typeof className === 'string') {
            returnArr.push(className)
        } else if (typeof className === 'object') {
            for (const key in className) {
                if (className[key]) {
                    returnArr.push(key)
                }
            }
        } else if (className) {
            returnArr.push(className)
        }
    }

    return returnArr.join(' ').trim()
}

function flatten(args) {
    
    for (let index = 0; index < args.length; index++) {
        let element = args[index];
        while(Array.isArray(element)) {
            args.splice(index, 1, ...element);
            element = args[index];
        }
    }

    return args;
}

console.log(classNames(null, false, 'bar', undefined, 1, { baz: null }, ''));