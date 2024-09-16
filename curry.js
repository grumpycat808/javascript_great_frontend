function curry(func) {
    let numArgs = func.length
    
    let orginalArgs = []

    return function returnFunc(...args) {
        
        orginalArgs.push(...args)
        // console.log("called", called)
        if (orginalArgs.length === numArgs) {
            console.log('max calls reached', orginalArgs)
            const copy = [...orginalArgs]
            orginalArgs = []
            return func(...copy)
        }
        return returnFunc
    }
}
const square = (a) => a * a;
// const curried = curry(square);

const curried = curry(function (val) {
    console.log(this)
    return this.multiplier * val;
  });

const Person = {
    multiplier: 5,
    multiplyAge: curried
}

console.log(Person.multiplyAge(2))
// console.log(curried(2))//calling returnFunc

// console.log(curried(3))//calling returnFunc