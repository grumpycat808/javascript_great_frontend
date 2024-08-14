function setCancellableTimeout(callback, delay, ...args) {
    let timeout = setTimeout(function () {
        // const boundFunc = callback.bind(this);
        console.log('args', args)
        callback(...args)
    }, delay)
    return () => {
        clearTimeout(timeout)
    }
}

let i = 1

setCancellableTimeout(
    (foo, bar) => {
        i += foo
        i *= bar
        console.log('i 21', i)
    },
    10,
    2,
    7,
)

console.log('i 1', i)
