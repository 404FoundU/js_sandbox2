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
        this.length = null;
    }

    pushTo(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }

    contains(val) {
        let current = this.head;
        while (current !== null) {
            if (current.value === val) {
                return true;
            }
            current = current.next;
        }
        return false;
    }

    printList() {
        let current = this.head;
        while (current !== null) {
            console.log(current.value);
            current = current.next;
        }
    }


}
const ll = new LinkedList();
ll.pushTo(5);
ll.pushTo(6);
ll.pushTo(7);
ll.printList();
console.log(ll.contains(8));
console.log(ll.contains(6));