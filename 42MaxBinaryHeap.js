class MaxBinaryHeap {
    constructor() {
        this.values = [55, 39, 41, 18, 27, 12, 33];
    }

    insert(element) {
        this.values.push(element);
        this.bubbleUp();
    }

    bubbleUp() {
        let index = this.values.length - 1;
        let element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) {
                break;
            }
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }

    extractMax() {
        let index = this.values.length - 1;
        let element = this.values[index];
        let extractElement = this.values[0];
        this.values[0] = element;
        this.values[index] = extractElement;
        extractElement = this.values.pop();
        let parentIndex = 0;
        let length = this.values.length;

        while (true) {
            let parent = this.values[parentIndex];
            let leftChildIndex = 2 * parentIndex + 1;
            let rightChildIndex = 2 * parentIndex + 2;
            let leftChild = 0;
            let rightChild = 0;
            if (leftChildIndex < length) {
                leftChild = this.values[leftChildIndex];
            } if (rightChildIndex < length) {
                rightChild = this.values[rightChildIndex];
            }

            let swapped = false;
            if (parent < leftChild && leftChild > rightChild) {
                this.values[leftChildIndex] = parent;
                this.values[parentIndex] = leftChild;
                parentIndex = leftChildIndex;
                swapped = true;
            } if (parent < rightChild && rightChild > leftChild  ) {
                this.values[rightChildIndex] = parent;
                this.values[parentIndex] = rightChild;
                parentIndex = rightChildIndex;
                swapped = true
            }
            if (swapped === false) {
                break;
            }

        }

        return extractElement;

    }

    printHeap() {
        console.log(this.values);
    }
}

// 41,39,33,18,27,12
const heap = new MaxBinaryHeap();
// heap.insert(55);
heap.extractMax();
// list.find(3);
// list.remove(1);
// console.log(list.BFS());
// console.log(list.DFSInOrder());
// list.printList();
// console.log(heap.values);

heap.printHeap();
