function compact(value) {
    const returnObj = Array.isArray(value) ? [] : {}

    function recursive(input, subObj) {
        if (Array.isArray(input)) {
            for (let index = 0; index < input.length; index++) {
                const element = input[index];
                // debugger
                if (element) {
                    if (Array.isArray(element)) {
                        subObj.push(recursive(element, []));
                    } else if (typeof element === 'object') {
                        subObj.push(recursive(element, {}));
                    } else {
                        subObj.push(element);
                    }
                }
            }

            
        } else {
            for (const key in input) {
                const element = input[key]
                if (element) {
                    if (Array.isArray(element)) {
                        subObj[key] = recursive(element, []);
                    } else if (typeof element === 'object') {
                        subObj[key] = recursive(element, {});
                    } else {
                        subObj[key] = element;
                    }
                }
            }
        }
       
        return subObj
    }

    recursive(value, returnObj);
    return returnObj;
}

const test = compact({ foo: true, bar: [null, 1, 2, false] });
console.log(JSON.stringify(test))

const element = false;

