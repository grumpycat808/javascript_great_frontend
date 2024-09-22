const throttleInput = document.getElementById('throttle-input')
const throttleText = document.getElementById('throttle-text')

const throttle = (callback, delay) => {
    console.log("delay", delay)
    let shouldWait = false
    return (...args) => {
        if (!shouldWait) {
            // console.log('shouldwait', shouldWait)
            shouldWait = true

            callback(...args)
            setTimeout(() => {
                console.log("Called set timeout")
                shouldWait = false
                
            }, delay)
        }
      
    }
}
let i = 0
throttleInput.addEventListener(
    'input',
    throttle(function (e) {
       
        throttleText.innerText = e.target.value
    }, 1000),
)
