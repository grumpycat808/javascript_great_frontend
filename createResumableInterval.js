function createResumableInterval(callback, delay, ...args) {
    let interval

    let called = false
    const start = () => {
        if (called) return
        callback(...args)

        called = true

        interval = setInterval(() => {
            callback(...args)
        }, delay)
    }

    const pause = () => {
        called = false
        clearInterval(interval)
    }
    const stop = () => {
        clearInterval(interval)
    }
    return { start, stop, pause }
}
let i = 0
// t = 0:
const interval = createResumableInterval(() => {
    i++
    console.log('i', i)
}, 500)

interval.start() // i is now 1.

setTimeout(() => {
    console.log('Paused')
    interval.pause()
}, 2000)

setTimeout(() => {
    console.log('Restarted')
    interval.start()
}, 5000)

setTimeout(() => {
    console.log('stopped')
    interval.stop()
}, 6000)
