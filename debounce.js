;(function () {
    const debounceTextInput = document.getElementById('debounce-text-input')
    const dbText = document.getElementById('debounce-text')

    const debounceFunc = (cb, delay) => {
        let timeout
        return (e) => {
            // console.log(e.target.value);
            clearTimeout(timeout)
            timeout = setTimeout(() => cb(e.target.value), delay)
        }
    }
    const changeHandler = debounceFunc(function (e) {
        console.log(e)
        // console.log("Hello")
        // dbText.innerText = e.target.value
    }, 1000)

    debounceTextInput.addEventListener('input', (e) => changeHandler(e))
})()
