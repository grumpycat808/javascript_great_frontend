function camelCaseKeys(object) {
    const returnObj = {}

    if (Array.isArray(object)) {
    }
    function recursiveConversion(obj) {
        for (const key in obj) {
            const value = obj[key]
            if (typeof value === 'object') {
                console.log('is object', key)
                recursiveConversion(value)
            } else {
                if (key.includes('_')) {
                    returnObj[convertKey(key)] = value
                } else {
                    returnObj[key] = value
                }
            }
        }
    }

    recursiveConversion(object)
    console.log(returnObj)
    return returnObj
}

function convertKey(key) {
    let arr = key.split('_')
    arr[0] = arr[0].charAt(0).toLowerCase() + arr[0].slice(1)
    arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1)

    return arr.join('')
}

const testObj = {
    a: 5,
    c: {
        f: 9,
        g: 2,
    },
}
camelCaseKeys(testObj)

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

console.log(isPalindrome('1232123'))
