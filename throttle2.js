const throttleInput = document.getElementById('throttle-input')
const throttleText = document.getElementById('throttle-text')

const throttle = (callback, delay) => {
    let shouldWait = false
    let waitingArgs
    const timeoutFunc = () => {
        if (waitingArgs === null) {
            shouldWait = false
        } else {
            callback(...waitingArgs)
            waitingArgs = null
            setTimeout(timeoutFunc, delay)
        }
    }
    return (...args) => {
        if (shouldWait) {
            waitingArgs = args //Save the "leftover" arguments
            return
        }

        callback(...args)
        shouldWait = true

        setTimeout(timeoutFunc, delay)
    }
}
let i = 0
throttleInput.addEventListener(
    'input',
    throttle(function (e) {
        console.log('Called', i)
        i++
        throttleText.innerText = e.target.value
    }, 1000),
)
