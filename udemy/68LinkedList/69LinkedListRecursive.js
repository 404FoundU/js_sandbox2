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
        if (this.head === null) {
            this.head = new Node(val);
            return;

        }
        this._pushTo(val, this.head);
        this.length++;
    }

    _pushTo(val, current) {
        //check if tail
        if (current.next === null) {
            current.next = new Node(val);;
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




}


const ll = new LinkedList();
ll.pushTo(7);
ll.pushTo(2);
ll.pushTo(11);
ll.pushTo(10);
ll.printList();
console.log(ll.contains(8));
console.log(ll.contains(6));




const sumList = (current) => {
    if (current === null) {
        return 0;
    }
    return current.val + sumList(current.next);
};

    console.log(sumList(ll.head));