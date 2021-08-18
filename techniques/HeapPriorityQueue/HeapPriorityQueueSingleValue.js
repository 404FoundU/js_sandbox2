class Node {
    constructor(val) {
        this.val = val;
    }
}

export default class PriorityQueue {
    constructor() {
        this.values = [];
    }

    findParent(idx) {
        return Math.floor((idx - 1) / 2)
    }

    findLeftChild(idx) {
        return idx * 2 + 1;
    }

    findRightChild(idx) {
        return idx * 2 + 2;
    }

    size() {
        return this.values.length
    }

    enqueue(val) {
        let node = new Node(val)
        this.values.push(node);
        if (this.values.length > 1) {
            this.bubbleUp();
        }
    }

    extractMax() {
        let max
        if (this.values.length > 0) {
            max = this.values[0];
            //pop last element and add to front
            let last = this.values.pop()
            if (this.values.length > 0){
                this.values[0] = last;
                this.sinkdown();
            }

        }
        return max;
    }

    bubbleUp() {
        let childIdx = this.values.length - 1;
        let child = this.values[childIdx];
        while (childIdx > 0) {
            let parentIdx = this.findParent(childIdx);
            let parent = this.values[parentIdx];
            if (parent.val >= child.val) {
                break;
            }
// swap parent and child
            this.values[childIdx] = parent;
            this.values[parentIdx] = child;
            childIdx = parentIdx;
        }
    }

    sinkdown() {
        let parentIdx = 0
        let length = this.values.length
        while (parentIdx < length) {
            let parent = this.values[parentIdx];

            let leftChildIdx = this.findLeftChild(parentIdx)
            let rightChildIdx = this.findRightChild(parentIdx)
            let leftChild =  this.values[leftChildIdx]
            let rightChild =  this.values[rightChildIdx]
            //boundary
            if (leftChild === undefined && rightChild === undefined) {
                break;
            }
            if (leftChild!==undefined && leftChild.val > parent.val) {
                this.values[leftChildIdx] = parent;
                this.values[parentIdx] = leftChild;
                parentIdx = leftChildIdx;
                continue;
            }
            if (rightChild!== undefined && rightChild.val > parent.val) {
                this.values[rightChildIdx] = parent;
                this.values[parentIdx] = rightChild;
                parentIdx = rightChildIdx;
            }
        }
    }
}

/*let pQ = new PriorityQueue();
pQ.enqueue(39);
pQ.enqueue(18);
pQ.enqueue(55);
pQ.enqueue(41);
pQ.enqueue(12);
pQ.enqueue(33);
pQ.enqueue(27);
pQ.enqueue(38);
pQ.extractMax();
console.log(pQ.values);*/

