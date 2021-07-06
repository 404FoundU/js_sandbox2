//n log n

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

}

class BST {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let node = new Node(value);
        if (this.root === null) {
            this.root = node;
            return this;
        } else {
            while (this.root !== null) {
                if (this.root.value > value) {
                    if (!this.root.left) {
                        this.root.left = node;
                    } else {
                        this.root = this.root.left;
                    }
                } else {
                    if (!this.root.right) {
                        this.root.right = node;
                    } else {
                        this.root = this.root.left;
                    }
                }
            }

        }
    }

    find(value) {
        if (this.root === null) {
            return undefined;
        }
        let current = this.root;
        while (current !== null) {
            if (current.value === value) {
                return current;
            }
            if (current.value > value) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
    }


}

let bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(7);
bst.insert(1);
bst.print();