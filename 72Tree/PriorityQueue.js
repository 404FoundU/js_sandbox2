class Node {
    constructor(val, priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        let node = new Node(val, priority);
        this.values.push(node);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (parent.priority >= element.priority) {
                break;
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }

    }

    dequeue() {
        const max = this.values[0];
        const end = this.values.pop();
        this.values[0] = end;
        this.sinkDown();
        return max;
    }

    sinkDown() {
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while (idx < length) {
            let leftchildIdx = 2 * idx + 1;
            let rightchildIdx = 2 * idx + 2;
            let leftChild = this.values[leftchildIdx];
            let rightChild = this.values[rightchildIdx];
            if (element.priority < leftChild.priority && leftChild.priority > rightChild.priority && leftchildIdx < length) {
                this.values[idx] = leftChild;
                this.values[leftchildIdx] = element;
                idx = leftchildIdx;
            }
            if (element.priority < rightChild.priority && leftChild.priority < rightChild.priority && rightchildIdx < length) {
                this.values[idx] = rightChild;
                this.values[rightchildIdx] = element;
                idx = rightchildIdx;
            }
        }


    }
}
let ER = new PriorityQueue();
ER.enqueue("cold", 1);
ER.enqueue("gunshot", 5);
ER.enqueue("fever", 2);
console.log(ER);
ER.dequeue();
console.log(ER);
ER.dequeue();
console.log(ER);