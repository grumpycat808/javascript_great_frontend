const throttleInput = document.getElementById('throttle-input')
const throttleText = document.getElementById('throttle-text')

const throttle = (callback, delay) => {
    let shouldWait = false
    let waitingArgs = null
    let isWaiting = false
    let initialArgs = null
    return (...args) => {
        if (shouldWait) {
            waitingArgs = { ...args }
            // console.log("waitingArgs", waitingArgs[0].target.value)
        } else {
            initialArgs = args[0].target.value
            callback(...args)
            shouldWait = true
            console.log('initialArgs', initialArgs)
            setTimeout(() => {
                shouldWait = false

                console.log('args', args[0].target.value)
                if (initialArgs !== args[0].target.value) {
                    console.log('Not the same')
                    console.log('initialArgs', initialArgs)
                    console.log('args[0].target.value', args[0].target.value)
                    callback(...args)
                } else {
                    console.log('The same')
                }
            }, delay)
        }
    }
}
let i = 0
throttleInput.addEventListener(
    'input',
    throttle(function (e) {
        console.log('Called')
        throttleText.innerText = e.target.value
    }, 2000),
)

throttleInput.focus()

function binarySearch(arr, k, start, end) {
    let middle = arr / 2
    if (arr.length == 1) {
        return arr[0] == k ? start : -1
    }
    if (arr[middle] == k) {
        return middle
    }

    if (k > middle) {
        return binarySearch(arr, k, middle, end)
    } else {
        return binarySearch(arr, k, start, middle)
    }
}

//find max recursion, find mode
