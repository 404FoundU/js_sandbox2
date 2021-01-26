class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class Stack{
    constructor() {
        this.top = null;
        this.size= null;
    }

    push(val) {
        const node = new Node(val);
        if (this.top === null) {
            this.top = node;
        } else {
            node.next = this.top;
            this.top = node;
        }
        this.size++;

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


