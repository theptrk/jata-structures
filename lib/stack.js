class Stack {
    constructor() {
        this.data = [];
        this.length = 0;
    }
    push(value) {
        this.data.push(value);
        this.length++;
        return value;
    }
    pop() {
        if (this.length > 0) {
            this.length--;
        }
        return this.data.pop();
    }
    peak() {
        return this.data[this.data.length - 1];
    }
}

module.exports = Stack;
