function flatten(value) {
    if(!value) return
    console.log("value", value)
    const returnArray = []
    for (let index = 0; index < value.length; index++) {
        let element = value[index];
        let i = 0;
       
        
        while(Array.isArray(element) && i < 50) {
            console.log("element is array", JSON.stringify(element))
            element= element[0];
            i++;
            console.log('i', i);
        }
        returnArray.push(element)
    }
    //Bug: Still returning arrays inside an array
    return returnArray;
}
// console.log('flattened', JSON.stringify(flatten([1, [[1], 2]])));

function flatten2(arr) {
    const returnArray = [];
    let result = arr[0];
    let i = 0;
    while(Array.isArray(result) && i <50){
        i++;
        result = returnArray.push(flatten2(result))
    }

    return returnArray;
}

// console.log(JSON.stringify(flatten2([[[1]]])))


function returnArr(...args) {
    const arr = [];
    if(args.length === 1) return args[0];
    args.pop()
    console.log(args)
    arr.push(returnArr(args))
    return arr;
}

console.log(returnArr(4, 5, 6, 7, 8))

function array11(nums, index) {
  if(index >= nums.length) return 0;

  if(nums[index] === 11) {
    return 1 + array11(nums, index+1)
  } else {
    return array11(nums, index+1)
  }
}

console.log(array11([11, 1, 2, 3, 4, 11, 11], 0))