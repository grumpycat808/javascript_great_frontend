function squashObject(obj) {
    const newObj = {}
    function recursive(squashObj, levels = []) {
        for (const key in squashObj) {
            const element = squashObj[key]
            if (typeof element === 'object' && typeof element !== 'undefined' && element !== null) {
                if(key !== '') levels.push(key)
                recursive(element, levels)
            } else {
                levels.push(key)
                const filtered = levels.filter((item) => item !== '')
                const stringKey = filtered.join('.')
                console.log('levels', levels)
                newObj[stringKey] = element
                levels.pop()
            }
        }

        if(levels.length > 0) levels.pop();
    }

    recursive(obj, [])
    console.log('newObj', newObj);

    return newObj;
}
const object = {
    foo: {
      '': {
      
        bar: 2,
      },
      a: 1,
    },
  }
squashObject(object)
