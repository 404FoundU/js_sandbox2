class Node {
    constructor(val,priority) {
        this.val = val;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val,priority) {
        let node = new Node(val,priority);
        this.values.push(node);
        if (this.values.length > 1) {
            this.bubbleUp();
        }
    }

    bubbleUp() {
        let el = this.values[this.values.length - 1];
        let idx = this.values.length - 1;
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (parent.priority >= el.priority) {
                break;
            }
            this.values[parentIdx] = el;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractMax() {
        let max = null;
        if (this.values.length > 0) {
             max = this.values[0];
            let el = this.values.pop();
            this.values[0] = el;
            if (this.values.length > 0) {
                this.sinkdown();
            }
        }


        return max;
    }

    sinkdown() {
        let idx = 0;
        let length = this.values.length;
        while (idx < length) {
            let el = this.values[idx];
            let leftChild = new Node(0,0);
            let rightChild = new Node(0,0);
            let leftChildIdx = (idx * 2) + 1;
            let rightChildIdx = (idx * 2) + 2;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
            }
            if (leftChild.priority > el.priority && leftChild.priority > rightChild.priority) {
                this.values[leftChildIdx] = el;
                this.values[idx] = leftChild;
                idx = leftChildIdx;
                continue;
            }
            if (rightChild.priority > el.priority && rightChild.priority > leftChild.priority) {
                this.values[rightChildIdx] = el;
                this.values[idx] = rightChild;
                idx = rightChildIdx;
                continue;
            }
            break;
        }
    }
}

let pQ = new PriorityQueue();
pQ.enqueue(39,3);
pQ.enqueue(18, 4);
pQ.enqueue(55, 1);
pQ.enqueue(41, 4);
pQ.enqueue(12, 9);
pQ.enqueue(33, 11);
pQ.enqueue(27, 8);
pQ.enqueue(38, 7);
console.log(pQ.extractMax());
console.log(pQ.values);

