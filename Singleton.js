class Stack {
    static initialized = false
    #test
    constructor(height, width) {
        this.height = height
        this.width = width
    }
    getInstance() {
        if (!initialized) {
            initialized = true
            this.#test = new Stack(2, 3)
            return this.#test
        }
    }
}
