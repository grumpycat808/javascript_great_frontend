const debounceInput = document.getElementById('debounce-text-input')
const debounceOutput = document.getElementById('debounce-text')
const regularInput = document.getElementById('regular-text-input')
const regularOutput = document.getElementById('regular-text')

function debounce(callback, delay) {
    let timeout
    return (...args) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback(...args)
        }, delay)
    }
}

debounceInput.addEventListener(
    'input',
    debounce((e) => {
        debounceOutput.innerText = e.target.value
    }, 1000),
)

regularInput.addEventListener('input', function (e) {
    regularOutput.innerText = e.target.value
})
