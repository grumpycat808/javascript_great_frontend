function comparisonSort(arr) {
    const countArr = []
    for (let index = 0; index < arr.length; index++) {
        countArr.push(0)
    }
    let increment = 0;
    for (let i = 0; i < arr.length ; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            increment++;
            if (arr[i] < arr[j]) {
                countArr[j] = countArr[j] + 1
            } else {
                countArr[i] = countArr[i] + 1
            }
        }
        console.log("i: ", i);
        console.log("countArray: ", countArr)
    }
    const sArray = []
    for (let index = 0; index < arr.length; index++) {
        sArray[index] = 0
        
    }

    for (let index = 0; index < arr.length; index++) {
        sArray[countArr[index]] = arr[index]
        console.log('index', index);
        console.log('sArray', sArray)
    }
    console.log("increment", increment)
}
const inputARr = [42, 17, 18, 23, 37, 9]
comparisonSort(inputARr)

console.log(inputARr.leng)

const sortedArray = [3, 5, 7, 8]

const insert = (arr, k) => {
    let counter = 0
    while (counter < arr.length && k > arr[counter]) {
        counter++
    }

    const returnArr = [...arr]
  
    console.log(counter)

    for (let index = returnArr.length; index > counter; index--) {
        
        returnArr[index] = returnArr[index - 1];
    }

    returnArr[counter] = k;
    console.log("returnArr", returnArr)
}

insert(sortedArray, 6)
