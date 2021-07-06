// https://leetcode.com/problems/k-closest-points-to-origin/


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
            if (parent.priority <= el.priority) {
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
            let leftChild = new Node([],1000);
            let rightChild = new Node([],1000);
            let leftChildIdx = (idx * 2) + 1;
            let rightChildIdx = (idx * 2) + 2;
            if (leftChildIdx < length) {
                leftChild = this.values[leftChildIdx];
            }
            if (rightChildIdx < length) {
                rightChild = this.values[rightChildIdx];
            }
            if (leftChild.priority < el.priority && leftChild.priority < rightChild.priority) {
                this.values[leftChildIdx] = el;
                this.values[idx] = leftChild;
                idx = leftChildIdx;
                continue;
            }
            if (rightChild.priority < el.priority && rightChild.priority < leftChild.priority) {
                this.values[rightChildIdx] = el;
                this.values[idx] = rightChild;
                idx = rightChildIdx;
                continue;
            }
            break;
        }
    }
}

const kClosest = (points,k) =>{
    let result = [];
    let queue = new PriorityQueue();
    for (let point of points) {
        let distance = Math.floor(Math.sqrt(Math.pow(point[0], 2) + Math.pow(point[1], 2)));
        queue.enqueue(point, distance);
    }

    while (k > 0) {
        result.push(queue.extractMax());
        k--;
    }
    return result;

};
console.log(kClosest([[3, 3], [5, -1], [-2, 4]], 2));;
console.log(kClosest( [[1,3],[-2,2]], 1));;


/*
let pQ = linkedLIstTDD PriorityQueue();
pQ.enqueue(39,3);
pQ.enqueue(18, 4);
pQ.enqueue(55, 1);
pQ.enqueue(41, 4);
pQ.enqueue(12, 9);
pQ.enqueue(33, 11);
pQ.enqueue(27, 8);
pQ.enqueue(38, 7);
console.log(pQ.extractMax());
console.log(pQ.values);*/
