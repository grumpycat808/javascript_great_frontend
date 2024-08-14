function cycle(...values) {
    const args = values

    let i = 0
    return () => {
        if (i === args.length) i = 0
        const returnVal = args[i]
        i++
        return returnVal
    }
}

const onOffFn = cycle('on', 'off')
console.log(onOffFn()) // "on"
console.log(onOffFn()) // "off"
console.log(onOffFn()) // "on"

const helloFn = cycle('hello')
console.log(helloFn()) // "hello"
console.log(helloFn()) // "hello"
