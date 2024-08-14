Array.prototype.myFilter = function (callbackFn, thisArg) {
    const returnArr = []

    this.forEach((item, index, array) => {
        if (callbackFn(item, index, array)) returnArr.push(item)
    })
    console.log(returnArr)
    return returnArr
}

const array = [1, 2, 3, 4]
// array.myFilter((value) => value % 2 == 0);
const isEven = (element, index) => element % 2 === 0
const isOdd = (element, index) => element % 2 === 1

// const isThisProductEven = function (this, element) {
//     return (element * this) % 2 === 0;
//   };
// array.myFilter(isThisProductEven)
const identity = (element) => element
Array.prototype.myMap = function (callbackFn, thisArg) {
    const returnArr = []
    for (let index = 0; index < this.length; index++) {
        const element = this[index]
        const result = callbackFn(thisArg, element, index)

        // typeof result ==='undefined' ? returnArr.push(empty) : returnArr.push(result);
        returnArr[index] = result
    }

    console.log(returnArr)
    return returnArr
}
const usesThis = function (thisArg, element) {
    return element * thisArg
}
console.log('myMap', [1, 2, 3, 4].myMap(usesThis, 10)) //[10, 20, 30, 40]
const square = (element) => element * element

Function.prototype.myApply = function (thisArg, argArray) {
    const boundFunc = this.bind(thisArg)
    return boundFunc(...argArray)
}

function multiplyAge(multiplier = 1) {
    return this.age * multiplier
}

const mary = {
    age: 21,
}

Function.prototype.myBind = function (thisArg, ...argArray) {
    // const boundFunc = this.bind(thisArg, ...argArray);

    return (...args) => {
        return this.call(thisArg, ...argArray, ...args)
    }
}

const person = {
    name: 'John',
    getName() {
        return this.name
    },
    // dummy(a: number, b: number, c: number) {
    //   return [a, b, c];
    // },
    greeting(prefix, message) {
        console.log('prefix', prefix)
        console.log('message', message)

        return `${prefix} ${this.name}, ${message}`
    },
}
const greeting = person.greeting.myBind(person, 'Mr.')
//  console.log(greeting('good morning!')) //'Mr. John, good morning!';
