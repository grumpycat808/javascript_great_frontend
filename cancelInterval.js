// function setCancellableInterval(callback, delay, ...args) {
//     let interval = setInterval(() => {
//         callback(...args)
//     }, delay)

//     return () => {
//         clearInterval(interval)
//     }
// }

function createResumableInterval(callback, delay, ...args) {
    let paused = false
    let time = 0
    let interval = setInterval(() => {
        callback(...args)
        if (!paused) time++
    }, delay)

    // return () => {
    //     clearInterval(interval)
    // }

    return {
        start: () => {
            callback(...args)
            interval = setInterval(() => {
                callback(...args)
                if (!paused) time++
            }, delay)
        },
        pause: () => {
            paused = true
        },
        stop: () => {
            clearInterval(interval)
        },
    }
}
