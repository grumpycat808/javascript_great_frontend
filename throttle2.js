const throttleInput = document.getElementById('throttle-input')
const throttleText = document.getElementById('throttle-text')

const throttle = (callback, delay) => {
    let shouldWait = false
    let waitingArgs = null;
    return (...args) => {
        if(shouldWait) {
            waitingArgs = args;
            return;
        }

        callback(...args);
        shouldWait = true;

        setTimeout(() => {
            shouldWait = false;
        }, delay)
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
