class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor(capacity) {
        this.head = null;
        this.tail = null;
        this.length = 0;
        this.capacity = capacity;
    }

    push(key, value) {
        if (this.length === this.capacity) {
            this.pop();
        }
        let node = new Node(key, value);
        if (!this.head) {
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
        if (this.head === null) {
            return undefined;
        }
        let node = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = node.previous;
            this.tail.next = null;
        }
        node.previous = null;
        this.length--;
        return node;
    }

    shift() {
        if (this.length === this.capacity) {
            this.pop();
        }
        if (this.head === null) {
            return undefined;
        }
        let poppedNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = poppedNode.next;
            this.head.previous = null;
        }
        poppedNode.next = null;
        this.length--;
        return poppedNode.val;
    }

    unshift(key, val) {
        if (this.length === this.capacity) {
            this.pop();
        }
        let node = new Node(key, val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.head.previous = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    moveToFront(key, val) {
        let node = new Node(key, val);
        // head
        if (this.head === null) {
            this.push(key, val);
            return;
        }
        if ( node.key === this.head.key) {
            return;
        }
        if ( node.key === this.tail.key) {
            this.pop();
            this.unshift(node.key, node.val);
            return;
        }
        let current = this.head.next;
        while (current !== null) {
            if ( node.key === current.key) {
                let previousNode = current.previous;
                let nextNode = current.next;
                previousNode.next = nextNode;
                nextNode.previous = previousNode;
                current.next = null;
                current.previous = null;
                this.unshift(node.key, node.val)
            }
        }
        //
    }
}

export default DoublyLinkedList;