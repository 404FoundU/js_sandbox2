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

    BFS() {
        let data = [];
        let queue = [];
        if (this.root === null) {
            return [];
        } else {
            queue.push(this.root);
            while (queue.length !== 0) {
                let current = queue.shift();
                data.push(current.val);
                if (current.left !== null) {
                    queue.push(current.left);
                }
                if (current.right !== null) {
                    queue.push(current.right);
                }
            }


        }
        console.log(data);
    }

    DfsPreorder() {
        let data = [];
        const traverse = (node) => {
            data.push(node.value);
            if (node.left !== null) {
                traverse(node.left);
            }  if (node.right !== null) {
                traverse(node.right);
            }

        };
        traverse(this.root);
        return data;
    }
}

const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(7);
bst.insert(1);
// bst.BFS();
bst.DfsPreorder();
// bst.print();

