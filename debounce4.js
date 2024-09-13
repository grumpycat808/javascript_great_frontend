const debounceInput = document.getElementById('debounce-text-input')
const debounceOutput = document.getElementById('debounce-text')

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
        debounceOutput.innerHTML = e.target.value
    }, 500),
)
