function promiseReject(reason) {
    return Promise.reject(reason)
}

try {
    promiseReject('Mayday!')
} catch (err) {
    console.log('rejected - ', err) // Mayday!
}
