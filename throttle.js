const throttleInput = document.getElementById('throttle-input')
const throttleText = document.getElementById('throttle-text')

function throttle(callback, delay) {
    let shouldWait = false
    let waitingArgs
    return (...args) => {
        waitingArgs = args
        let test = waitingArgs
        // console.log("...args", test[0].target.value)
        if (!shouldWait) {
            callback(...args)
            shouldWait = true
            setTimeout(() => {
                shouldWait = false
                if (waitingArgs) {
                    console.log('Calling')
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
        i++
        throttleText.innerText = e.target.value
    }, 1000),
)
