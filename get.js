function get(objectParam, pathParam, defaultValue) {
    const pathArray = Array.isArray(pathParam) ? [...pathParam] : pathParam.split('.')
    let obj = objectParam;
    
    for (let index = 0; index < pathArray.length; index++) {
        const property = pathArray[index]
        // console.log(property)
        if (obj[property] === undefined || obj[property] === null) {
            if(index === pathArray.length - 1) {
                
                obj = obj[property];
            } else {
                obj = undefined;
            }
            break
        } else {
            obj = obj[property]
        }
    }

    if (typeof obj === 'undefined') return defaultValue
    return obj
}
const jane = {
    profile: {
      age: 19,
      gender: 'Female',
    },
  };
const john = {
    profile: {
      name: { firstName: 'John', lastName: 'Doe' },
      age: 20,
      gender: 'Male',
    },
  };
console.log(get({ a: { b: null } }, 'a.b.c'));

