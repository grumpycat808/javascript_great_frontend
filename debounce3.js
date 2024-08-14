function debounce(func, wait) {
    let canceled = false
    let called = false
    let timeout
    let cbArgs
    let self
    function fn(...args) {
        self = this
        cbArgs = args
        const bound = func.bind(this)
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            if (!canceled) {
                called = true
                bound(...args)
            }
        }, wait)
    }

    fn.cancel = () => {
        canceled = true
    }

    function flush() {
        const bound = func.bind(self)
        clearTimeout(timeout)
        if (!called && !canceled) {
            bound(...cbArgs)
            called = true
        }
    }
    fn.flush = flush
    return fn
}
let i = 0
const increment = debounce(() => {
    i++
}, 50)

console.log('i', i)
increment()
increment.cancel()
console.log('i', i)

setTimeout(() => {
    increment.flush()
    console.log('i', i)
}, 20)
// const inputField = document.getElementById('debounce-text-input')
// const debounceText = document.getElementById('debounce-text')

// const handleInputChange = (e) => {
//     debounceText.innerHTML = e.target.value
// }
// const debounced = (callback, delay) => {
//     let timeout

//     return (...args) => {

//         clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             callback(...args)
//         }, delay)
//     }
// }
//inputField.addEventListener('input', debounced(handleInputChange, 1000))
