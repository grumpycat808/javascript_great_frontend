Array.prototype.myAt = function (index) {
    if (index < 0) {
        return this[this.length + index]
    }

    return this[index]
}

const arr = [42, 79, 12, 20]
console.log(arr.myAt(1))
