import DoublyLinkedList from './DoublyLinkedList2';
//https://javascript.plainenglish.io/solving-the-lru-cache-interview-question-92f215378e15

class LruCache {
    constructor(capacity) {
        this.map = {};
        this.list = new DoublyLinkedList(capacity);
        this.capacity = capacity
    }
    put(key, value) {
        if (key in this.map) {
            this.list.moveToFront(key, value);
        }
        else{
            let length = Object.keys(this.map).length;
            this.map[key] = value;
            if (length < this.capacity) {
                this.list.insertAtHead(key, value);
            } else {
                let node = this.list.removeFromTail();
                delete this.map[node.key]
            }

        }
    }
    get(key) {
        if (key in this.map) {
            let value = this.map[key];
            this.list.moveToFront(key, value);
            return this.map[key];
        } else {
            return -1;
        }
    }
}