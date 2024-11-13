function deepClone(value) {
    let returnObj = Array.isArray(value) ? [] : {};

    function recursiveClone(item, source) {
        if (Array.isArray(item)) {
            const newArr = [...item];
            newArr.forEach(element => {
                if(Array.isArray(element)) {
                    source.push(recursiveClone(element, []));
                } else if(typeof element === 'object'){
                    source.push(recursiveClone(element, {}));
                } else {
                    source.push(element);
                }
            });
        } else if (typeof item === 'object') {
            const newItem = {...item};
            for (const key in newItem) {
                const element = newItem[key];
                if(Array.isArray(element)) {
                    source[key] = recursiveClone(element, []);
                } else if(typeof element === 'object'){
                    // debugger;
                    source[key] = recursiveClone(element, {});
                } else {
                    source[key] = element;
                }
            }
        } 
        return source;
    }

    if(value === null || typeof value === 'undefined') return value;
    if(Array.isArray(value) || typeof value === 'object') {
        recursiveClone(value, returnObj);
        return returnObj;

    } else {
        return value;
    }
}
console.log(deepClone(null))


