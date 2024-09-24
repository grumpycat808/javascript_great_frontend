const throttleInput = document.getElementById('throttle-input')
const throttleText = document.getElementById('throttle-text')

const throttle = (callback, delay) => {
    let shouldWait = false
    let waitingArgs = null
    let isWaiting = false;
    return (...args) => {
        if (shouldWait) {
            waitingArgs = args
            // console.log("waitingArgs", waitingArgs[0].target.value)
        } else {
            initialArgs = args[0].target.value;
            callback(...args)
            shouldWait = true
            setTimeout(() => {
                shouldWait = false
               
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
