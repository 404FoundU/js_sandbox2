class Node {
    constructor(val) {
        this.val = val;
        this.previous = null;
        this.next = null;
    }
}

class Dll {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {

            this.tail.next = node;
            node.previous = this.tail;
            this.tail = node;

        }

        this.length++;

    }

    pop() {
        
    }


}