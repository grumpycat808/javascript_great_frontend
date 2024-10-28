function convertKey(key) {
    if (!key.includes('_')) return key
    let arr = key.split('_')
    arr[0] = arr[0].charAt(0).toLowerCase() + arr[0].slice(1)
    arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1)

    return arr.join('')
}
function camelCaseKeys(object) {
    // console.log('original object', JSON.stringify(object))
    const returnObj = Array.isArray(object) ? [] : {}
    function recursiveConversion(obj, subObj) {
        if (Array.isArray(obj)) {
            for (let index = 0; index < obj.length; index++) {
                const element = obj[index]
                if (Array.isArray(element)) {
                    subObj.push(recursiveConversion(element, []))
                } else if (typeof element === 'object') {
                    subObj.push(recursiveConversion(element, {}))
                } else {
                    subObj.push(element)
                }
            }
        } else {
            for (const key in obj) {
                const element = obj[key]
                if (Array.isArray(element)) {
                    subObj[convertKey(key)] = recursiveConversion(element, [])
                } else if (typeof element === 'object') {
                    subObj[convertKey(key)] = recursiveConversion(element, {})
                } else {
                    subObj[convertKey(key)] = element
                }
            }
        }
        return subObj
    }

    return recursiveConversion(object, returnObj)
    // console.log(JSON.stringify(newObj))
    // console.log('camelcase object', copyObj);
}

const test = camelCaseKeys([{ baz_qux: true }, { foo: true }])

console.log(JSON.stringify(test))

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
