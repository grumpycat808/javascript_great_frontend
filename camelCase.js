function camelCaseKeys(object) {
    const returnObj = {};

    if(Array.isArray(object)) {

    }
    function recursiveConversion(obj){
        for (const key in object) {
            const value = object[key];
            if(typeof value === 'object') {

            } else {
                if(key.includes("_")) {
                    returnObj[convertKey(key)] = value;
                } else {
                    returnObj[key] = value;
                }
            }
        }
    }
}

function convertKey(key) {
    let arr = key.split("_");
    arr[0] = arr[0].charAt(0).toLowerCase() + arr[0].slice(1);
    arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1);
    

    return arr.join('');
}

console.log(convertKey("Boo_Bar"))