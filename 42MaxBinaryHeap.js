class maxVinaryHeap {
    constructor() {
        this.values = [55,39,41,18,27,12,33];
    }

    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }

    bubbleUp() {
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while (idx > 0) {
            let parentIdx = Math.floor((idx - 1) / 2);
            let parent = this.values[parentIdx];
            if (element <= parent) {
                break
            }
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }

    extractmax() {
        this.swap( 0, this.values.length - 1);
        let oldRoot = this.values.pop();
        let i = 0;
        while(i< this.values.length) {
            let leftIndex = 2 * i + 1;
            let rightIndex = 2 * i + 2;
            let leftChild = this.values[leftIndex];
            let rightChild = this.values[rightIndex];
            if (rightChild === undefined && leftChild === undefined) {
                break;
            }
            else if (rightChild === undefined && leftChild !== undefined) {
                if (this.values[i] < leftChild) {
                    this.swap(leftIndex, i);
                    i = leftIndex;
                    continue;
                }
                break;
            }
            else if (leftChild === undefined && rightChild !== undefined) {
                if (this.values[i] < rightChild) {
                    this.swap( rightIndex, i);
                    i = rightIndex;
                    continue;
                }
                break;
            }
            else if (rightChild > leftChild ) {
                if (this.values[i] < rightChild) {
                    this.swap( rightIndex, i);
                    i = rightIndex;
                }
            }
            else if (rightChild < leftChild ) {
                if (this.values[i] < leftChild) {
                    this.swap(leftIndex, i);
                    i = leftIndex;
                }
            }
            else {
                break;
            }

        }
        return oldRoot;
    }
    swap( idx1, idx2) {
        [this.values[idx1], this.values[idx2]] = [this.values[idx2], this.values[idx1]];
    }


}

let heap = new maxVinaryHeap();
console.log(heap.extractmax());