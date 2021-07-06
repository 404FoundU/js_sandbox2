class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
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
        }
        else  {
            this.tail.next = node;
            this.tail = node;

        }
        this.length++;
   }

    pop() {
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let current = this.head;
            let previousNode = current;
            while (current.next !== null) {
                previousNode = current;
                current = current.next;
            }
            this.tail = previousNode;
            this.tail.next = null;
        }
        this.length--;


    }
    leftShift()
    {
        if (!this.head ) {
            return undefined;
        }
            let current = this.head.next;
            this.head = current;


        this.length--;
        return current;

    }

    unshift(value) {
        let node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
        }
        else {
            let current = this.head;
            this.head = node;
            this.head.next = current;
        }
        this.length++;

    }

    getNode(index) {
        if (this.head) {
            let count = 0;
            let current = this.head;
            while (count !== index) {
                current = current.next;
                count++;

            }
            return current.value;
        }

        return undefined;
    }
    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }

    reverse(){
        var node = this.head;
        this.head = this.tail;
        this.tail = node;
        var next;
        var prev = null;
        for(var i = 0; i < this.length; i++){
            next = node.next;
            node.next = prev;
            prev = node;
            node = next;
        }
        return this;
    }
}

let list = new LinkedList();
list.push(9);
list.push(8);
list.push(7);
list.push(6);
// list.pop();
// list.leftShift();
list.unshift(10);
// console.log(list.getNode(2));
list.reverse();
list.printList();
