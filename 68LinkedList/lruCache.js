import DoublyLinkedList from './Dllist';

class LRU {
    constructor(capacity) {
        this.capacity = capacity;
        this.hash = {};
        this.list = new DoublyLinkedList(capacity);
    }

    put(key, val) {
        if (key in this.hash) {
            this.hash[key].val = val;
            this.list.moveToFront(key, val);
        } else {
            let length = Object.keys(this.hash).length;
            if (length < this.capacity) {
                this.list.unshift(key, val);
                this.hash[key] = this.list.head;
            } else {
                delete this.hash[this.list.tail.key];
                this.list.unshift(key, val);
                this.hash[key] = this.list.head;
            }
        }
    }

    get(key) {
        if (key in this.hash) {
            this.list.moveToFront(key, this.hash[key].val);
            return this.hash[key].val;
        } else {
            return -1;
        }
    }

}