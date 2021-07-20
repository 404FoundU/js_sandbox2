class Node {
    constructor(key, value) {
        this.key = key;
        this.val = value;
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

    insertAtHead(key, val) {
        if (this.length === this.capacity) {
            this.removeFromTail();
        }
        let node = new Node(key, val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.previous = node;
            this.head = node;
        }
        this.length++;
    }
    insertAtTail(key, val) {
        if (this.length === this.capacity) {
            this.removeFromTail();
        }
        let node = new Node(key, val);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.previous=this.tail;
            this.tail = node;
        }
        this.length++;
    }

    removeFromTail() {
        if (this.length === 0) {
            return null;
        }
        let node = this.tail;
        if (this.length === 1) {
            this.head = null
            this.tail = null
        }else{
            this.tail = node.previous;
            this.tail.next = null;
        }
        node.previous=null
        this.length--;

    }

    moveToFront(key, value) {
        let node = new Node(key, value);
        if (this.head === null) {
            this.insertAtHead(key, value);
            return;
        }
        //first element
        if (this.head.key === key) {
            return;
        }
        if (this.tail.key === key) {
            this.removeFromTail();
            this.insertAtHead(key, value);
            return;
        }
        let current = this.head;
        while (current !== null) {
            if (current.key === key) {
                let previous = current.previous;
                let next = current.next;
                previous.next = next
                next.previous = previous;
                current.next = null;
                current.previous = null;
                break;
            }
            current = current.next;
        }
        this.insertAtHead(key, value);
    }
}

const dll = new DoublyLinkedList();
dll.insertAtTail('k1', 'v1')
dll.insertAtTail('k2', 'v2')
dll.insertAtTail('k3', 'v3')
dll.insertAtTail('k4', 'v4')
dll.insertAtTail('k5', 'v5')
dll.removeFromTail();
dll.moveToFront('k3', 'v3');
dll.insertAtTail('k5', 'v5')
