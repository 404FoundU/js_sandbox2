class Node {
    constructor(val) {
        this.val = val;
        this.right = null;
        this.left = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        let node = new Node(val);
        if (this.root === null) {
            this.root = node;
        } else {
            let current = this.root;
            while (current !== null) {
                if (current.val > val) {
                    if (current.left === null) {
                        current.left = node;
                        break;
                    }
                    current = current.left;
                }
                if (current.val < val) {
                    if (current.right === null) {
                        current.right = node;
                        break;
                    }
                    current = current.right;
                }
            }
        }
    }

    print() {
        if (this.root !== null) {
            let current = this.root;
            this._print(current);
        }
    }

    _print(current) {
        while (current !== null) {
            console.log(current.val);
            if (current.left !== null) {
                current = current.left;
                this._print(current);
            }
            if (current.right !== null) {
                current = current.right;
                this._print(current);
            }
        }
    }

    find(val) {
        if (this.root === null) {
            return this;
        } else {
            let current = this.root;
            while (current !== null) {
                if (current.val === val) {
                    console.log(val);
                }
                if (current.val > val) {
                    current = current.left;
                } else {
                    current = current.right;
                }
            }
        }

    }
}

const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(7);
bst.insert(1);
bst.find(1);
// bst.print();

