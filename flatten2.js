function flatten(value) {
    if(!value) return;
    
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


function returnArr(inputArr) {
    console.log("inputArr", inputArr)
    debugger;
    if(inputArr.length === 0) {
        
        return inputArr
    };
    const first = inputArr.pop();
    const newArr =  returnArr(inputArr);
    // console.log("newArr", newArr);
     newArr.push(first * 2)
     return newArr
}

console.log(returnArr([4, 5, 6]))

function array11(nums) {
    let copy = [...nums]
  if( copy.length === 0) return 0;
    
  if(copy[nums.length - 1] === 11) {
    copy.pop();
    console.log("copy", copy)
    return 1 + array11(copy)
  } else {
    copy.pop();
    return array11(copy)
  }
}

// console.log(array11([11, 11, 2, 3, 4, 11, 11]))