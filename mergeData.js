function selectData(sessions, options) {
    if (!options) return sessions

    let returnArr = [...sessions]

    if (options.hasOwnProperty('merge') && options.merge) {
        returnArr = mergeData(returnArr)
    }
    if (options.hasOwnProperty('user')) {
        returnArr = returnArr.filter((session) => session.user === options.user)
    }

    if (options.hasOwnProperty('minDuration')) {
        returnArr = returnArr.filter(
            (session) => session.duration >= options.minDuration,
        )
    }

    if (options.hasOwnProperty('equipment')) {
        returnArr = returnArr.filter((session) =>
            arraysIntersect(session.equipment, options.equipment),
        )
    }
    return returnArr
}

function arraysIntersect(array1, array2) {
    return array1.filter((x) => array2.includes(x)).length > 0
}
function mergeData(sessions) {
    const map = sessions.reverse().reduce((accumulator, currentVal) => {
        if (accumulator.has(currentVal.user)) {
            const currentUser = accumulator.get(currentVal.user)
            const sumDuration = currentVal.duration + currentUser.duration
            const mergedEquipment = mergeArrays(
                currentVal.equipment,
                currentUser.equipment,
            )
            const newObj = {
                user: currentVal.user,
                duration: sumDuration,
                equipment: mergedEquipment,
            }
            accumulator.set(currentVal.user, newObj)
        } else {
            // accumulator[currentVal.user] = currentVal
            accumulator.set(currentVal.user, currentVal)
        }
        return accumulator
    }, new Map())

    let values = Array.from(map.values()).reverse()
    return values
}
const mergeArrays = (array1, array2) => {
    const set = new Set([...array1, ...array2])
    const returnArr = []
    set.forEach((v) => returnArr.push(v))
    returnArr.sort((a, b) => a.localeCompare(b))

    return returnArr
}

const sessions = [
    { user: 8, duration: 50, equipment: ['bench'] },
    { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
    { user: 1, duration: 10, equipment: ['barbell'] },
    { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
    { user: 7, duration: 200, equipment: ['bike'] },
    { user: 2, duration: 200, equipment: ['treadmill'] },
    { user: 2, duration: 200, equipment: ['bike'] },
]

console.log(selectData(sessions, { merge: true, minDuration: 400 }))
