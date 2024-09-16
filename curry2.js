function curry(func) {
    const minArgs = func.length
    let currentArgs = []

    console.log('this line 5', this)
    function returnFunction (...args) {
        console.log('this line 7', this)
        currentArgs.push(...args)
        
        if (currentArgs.length === minArgs) {
            const allArgs = [...currentArgs]
            currentArgs = []
            const boundFunc = func.bind(this);
            return boundFunc(...allArgs)
        } else {
            return returnFunction
        }
    }

    return returnFunction
}
function multiplyThreeNumbers(a, b, c) {
    return a * b * c
}

function add(a, b) {
    console.log("this in add", this)
    return this.age + a + b;
}

const curried = curry(function ( val1, val2) {
    console.log("this", this)
    return this.multiplier * (val1 + val2);
  });

const Person = {
    multiplier: 5,
    mul: curried,
}

Person.mul(2);
console.log(Person.mul(4))
// console.log('multiply age', Person.multipleAge(4))
