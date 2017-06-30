const Stack = require('./stack');

class QueueWithStacks {
    constructor() {
        this.inbox = new Stack();
        this.outbox = new Stack();
    }
    enqueue(value) {
        this.inbox.push(value);
    }
    dequeue() {
        if (this.outbox.length === 0) {
            while (this.inbox.length > 0) {
                this.outbox.push(this.inbox.pop());
            }
        }
        return this.outbox.pop();
    }
}

module.exports = QueueWithStacks;
