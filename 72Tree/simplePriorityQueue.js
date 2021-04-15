
class SimplePriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(val, priority) {

        this.queue.push({val, priority});
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.queue.shift();
    }
}