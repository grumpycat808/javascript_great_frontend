function promiseRace(iterable) {
    try {
        iterable.forEach(async (element) => {
            await element
        })
    } catch (err) {}
}
