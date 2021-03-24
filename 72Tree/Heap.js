class MaxBinaryHeap {
    constructor() {
        this.values = [41,39,33,18,27,12];
    }

    insert(val) {
        this.values.push(val);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (parent >= element) {
                break;
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }

    }

    extractMax() {
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
            if (element < leftChild && leftChild > rightChild && leftchildIdx < length) {
                this.values[idx] = leftChild;
                this.values[leftchildIdx] = element;
                idx = leftchildIdx;
            }
            if (element < rightChild && leftChild < rightChild && rightchildIdx < length) {
                this.values[idx] = rightChild;
                this.values[rightchildIdx] = element;
                idx = rightchildIdx;
            }
        }


    }
}
let heap = new MaxBinaryHeap();
heap.insert(55);