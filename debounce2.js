function debounce(func, wait) {
    let timeout
    return function (...args) {
        const bound = func.bind(this)
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            bound(...args)
        }, wait)
    }
}

const increment = debounce(function (delta) {
    this.val += delta
}, 10)

const obj = {
    val: 2,
    increment,
}

console.log('obj.val', obj.val)
