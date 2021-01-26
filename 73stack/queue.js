class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack{
    constructor() {
        this.front = null;
        this.back = null;
        this.size= null;
    }

    enqueue(val) {
        const node = new Node(val);
        if (this.front === null) {
            this.front = node;
            this.back = node;
        } else {
            this.back.next = node;
            this.back = node;
        }
        this.size++;

    }

    dequeue() {
        if (this.size === 0) {
            return null;
        }
        if (this.size === 1) {
            this.back = null;
        }
        let removed = this.front;
        this.front = this.front.next;
        return removed.val;
    }

    printStack() {
        let current = this.top;

        while (current !== null) {
            console.log(current.val);
            current = current.next;
        }

    }

    pop() {
        if (this.top === null) {
            return;
        }
        this.top = this.top.next;
        this.size--;
    }

}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.pop();
stack.printStack(1);


