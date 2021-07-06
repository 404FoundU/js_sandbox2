class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = null;
    }

    pushTo(val) {
        let node = new Node(val);
        if (this.head === null) {
            this.head = node;
            return;

        }
        this._pushTo(val, this.head);
        this.length++;
    }

    _pushTo(val, current) {
        let node = new Node(val);
        //check if tail
        if (current.next === null) {
            current.next = node;
            return;
        }
        this._pushTo(val, current.next);
    }

    contains(val) {
        return this._contains(val, this.head);
    }

    _contains(val, current) {
        if (current === null) {
            return false;
        }
        if (current.val === val) {
            return true;
        }
        return this._contains(val, current.next);
    }

    printList() {
        const output = this._printList(this.head);
        console.log(output);
    }

    _printList(current) {
        if (current === null) {
            return '';
        }

        return current.val + '->' + this._printList(current.next);


    }

    delete(val) {
        let current = this.head;
        // check if its head
        if (current.val === val) {
            this.head = current.next;
            current.next = null;
            return current;
        }
        let left = current;
        current = current.next;
        while (current !== null) {
            if (current.val === val) {
                left.next = current.next;

                current.next = null;

                return current;
            }
            left = current;
            current = current.next;
        }
    }

    deleteRecursive(val) {
        let current = this.head;
        // check if its head
        if (current.val === val) {
            this.head = current.next;
            current.next = null;
            return current;
        }
        current = current.next;
        this._deleteRecursive(val, current, null);
    }

    _deleteRecursive(val, current, left) {
        if (current === null) {
            return;
        }
        if (current.val === val) {
            left.next = current.next;
            return;
        }

        this._deleteRecursive(val, current.next, current);

    }






}


const ll = new LinkedList();
ll.pushTo(7);
ll.pushTo(2);
ll.pushTo(11);
ll.pushTo(10);
ll.deleteRecursive(10);
ll.printList();
console.log(ll.contains(8));
console.log(ll.contains(6));
const reverseList = (head) => {
    let prev = null;
    let current = head;
    while (current !== null) {
        const next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }
    return prev;
};
const reverseRecursive = (current, prev = null) => {
    if (current === null) {
        return prev;
    }
    const next = current.next;
    current.next = prev;
    return reverseRecursive(next, current);
};

// const newHead = reverseList(ll.head);
const newHead = reverseRecursive(ll.head);
console.log(newHead);
