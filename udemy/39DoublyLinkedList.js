class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        let node = new Node(value);
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
        if (!this.head) {
            return undefined;
        }
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.previous;
            this.tail.next = null;
        }
        this.length--;
        return poppedNode.value;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        let shiftNode = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        this.head = shiftNode.next;
        this.head.previous = null;
        shiftNode.next = null;
        this.length--;
        return shiftNode
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }
}

let list = new DoublyLinkedList();
list.push(9);
list.push(8);
list.push(7);
list.push(6);
console.log(list.pop());
// list.leftShift();
// list.unshift(10);
// console.log(list.getNode(2));
// list.reverse();
// list.printList();
