const throttleInput = document.getElementById('throttle-input')
const throttleText = document.getElementById('throttle-text')

const throttle = (callback, delay) => {
    let shouldWait = false
    let waitingArgs = null
    return (...args) => {
        if (shouldWait) {
            waitingArgs = args //??
        } else {
            //don't need to wait
            callback(...args)
            shouldWait = true
            setTimeout(() => {
                shouldWait = false

                console.log('waitingargs', waitingArgs[0].target.value)
                console.log('args', args[0].target.value)
                if (
                    waitingArgs &&
                    waitingArgs[0].target.value != args[0].target.value
                ) {
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
        console.log('Called', i)
        i++
        throttleText.innerText = e.target.value
    }, 1000),
)
