//https://leetcode.com/problems/task-scheduler/
//https://www.youtube.com/watch?v=ySTQCRya6B0
import PriorityQueue from './HeapPriorityQueueSingleValue.js';

const taskScheduler = (task, n) => {
    if (n === 0) {
        return task.length;
    }
    let cycles = 0;
    let taskMap = {};
    for (let t of task) {
        taskMap[t] = (taskMap[t] || 0) + 1;
    }
    const pQ = new PriorityQueue();
    for (let e in taskMap) {
        pQ.enqueue(taskMap[e]);
    }
    while(pQ.size() > 0) {
        let temp = [];
        for (let i = 0; i < n + 1; i++) {
            if (pQ.size() > 0) {
                let max = pQ.extractMax();
                temp.push(max);
            }
        }
        for (let el of temp) {
            if (--el.val > 0) {
                pQ.enqueue(el.val);
            }
        }
        let delay ;
        if (pQ.size() === 0) {
            delay = temp.length;
        } else {
            delay = n + 1;
        }
        cycles +=delay;
    }
    return cycles;

};
/*const taskScheduler = function(tasks, n) {
    if (tasks.length === 0) return 0;

    let pq = new PriorityQueue(tasks);
    let res = []
    let lastSeen = {}
    while (pq.size()) {

        let tmp = [];
        let char = null;
        while (pq.size()) {
            let top = pq.pop();
            if (lastSeen[top[0]] === undefined || res.length - lastSeen[top[0]] > n) {
                char = top[0];
                res.push(char);
                lastSeen[char] = res.length - 1;

                top.pop();
                pq.push(top);

                break;
            }
            tmp.push(top);
        }

        if (!char) {
            res.push('_');
        }
        tmp.forEach(t => pq.push(t));
    }
    return res.length;
};

class PriorityQueue {
    constructor(tasks) {
        this.queue = [];
        let tmp = {};
        tasks.forEach(t => {
            if (t in tmp) {
                tmp[t].push(t);
            } else {
                tmp[t] = [t];
            }
        })

        for (let key in tmp) {
            this.push(tmp[key])
        }
    }

    size() {
        return this.queue.length;
    }

    peek() {
        return this.queue[0];
    }

    pop() {
        this.swap(0, this.queue.length-1);
        let res = this.queue.pop();
        this.sinkDown();
        return res.val;
    }

    push(arr) {
        if (arr.length === 0) return
        this.queue.push({
            val: arr,
            weight: arr.length,
        });
        this.bubbleUp();
    }

    swap(a,b) {
        [this.queue[a], this.queue[b]] = [this.queue[b], this.queue[a]];
    }

    sinkDown() {
        let idx = 0;
        while (idx < this.queue.length) {
            let left = 2*idx + 1;
            let right = 2*idx + 2;
            let next = idx;
            if (left < this.queue.length && this.queue[next].weight < this.queue[left].weight) {
                next = left;
            }
            if (right < this.queue.length&& this.queue[next].weight < this.queue[right].weight) {
                next = right;
            }
            if (next === idx) {
                break;
            }
            this.swap(next, idx);
            idx = next;
        }
    }

    bubbleUp() {
        let idx = this.queue.length - 1;
        while (idx >= 0) {
            let parrent = Math.floor((idx - 1)/2);
            if (parrent >= 0 && this.queue[parrent].weight < this.queue[idx].weight) {
                this.swap(idx, parrent);
                idx = parrent;
            } else {
                break;
            }
        }
    }
}*/
let a = ["A", "A", "A", "B", "B", "B"];
console.log(taskScheduler(a, 2));