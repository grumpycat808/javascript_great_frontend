const throttleInput = document.getElementById('throttle-input')
const throttleText = document.getElementById('throttle-text')

const throttle = (callback, delay) => {
    let shouldWait = false
    let waitingArgs = null
    return (...args) => {
        if (shouldWait) {
            waitingArgs = args
        } else {
            callback(...args)
            shouldWait = true
            waitingArgs = null
            setTimeout(() => {
                shouldWait = false
                if (waitingArgs !== args) {
                    // console.log("waitingArgs", waitingArgs[0].target.value)
                    callback(...waitingArgs)
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
    }, 1000),
)
