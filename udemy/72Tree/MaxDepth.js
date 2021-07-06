// https://www.youtube.com/watch?v=SOwHYHMiX4M

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
    maxDepth(node = this.root)  {
        if (!node) {
            return 0;
        }
        const leftNode = this.maxDepth(node.left);
        const rightNode = this.maxDepth(node.right);
        return Math.max(leftNode, rightNode) + 1;
    };
}

const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(7);
bst.insert(1);
console.log(bst.maxDepth());

