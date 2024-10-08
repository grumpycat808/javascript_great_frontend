function convertKey(key) {
    if (!key.includes('_')) return key
    let arr = key.split('_')
    arr[0] = arr[0].charAt(0).toLowerCase() + arr[0].slice(1)
    arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1)

    return arr.join('')
}
function camelCaseKeys(object) {
    console.log('original object', JSON.stringify(object))
    const returnObj = {}

    function recursiveConversion(obj, subObj) {
        const partialObj = {}
        for (const key in obj) {
            const value = obj[key]
            if (typeof value === 'object') {
                // returnObj[convertKey(key)] = recursiveConversion(value)
                returnObj[convertKey(key)] = { ...obj[key] }
                recursiveConversion(obj, returnObj[convertKey(key)])
            } else {
                if (subObj !== undefined) {
                    obj[convertKey(key)] = value
                } else {
                    returnObj[convertKey(key)] = value
                }
            }
        }
    }
    recursiveConversion(object)
    console.log(returnObj)
    // console.log('camelcase object', copyObj);
}

camelCaseKeys({ foo_bar: true, bar_baz: { hey_yo: 6 } })

const isPalindrome = (testString) => {
    if (testString.length === 2) {
        return testString.charAt(0) === testString.charAt(1)
    }

    if (testString.length <= 1) return true
    if (testString.charAt(0) !== testString.charAt(testString.length - 1)) {
        return false
    } else {
        return isPalindrome(testString.substring(1, testString.length - 1))
    }
}

// console.log(isPalindrome('1232123'))
