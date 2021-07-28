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
        let queue = [this.root];
        let result = [];
        while (queue.length) {
            let current = queue.shift();
            result.push(current.val);
            if (current.left !== null) {
                queue.push(current.left);
            }
            if (current.right !== null) {
                queue.push(current.right);
            }
        }
        return result;
    }

    DFSPreOrder() {
        let current = this.root;
        let result = []
        const traverse = (current) => {
            result.push(current.val);
            if (current.left !== null) {
                traverse(current.left);
            }
            if (current.right !== null) {
                traverse(current.right);
            }
        }
        traverse(current);
        return result;
    }

    DfsPreorderStack() {
        let stack = [this.root];
        let result = [];
        while (stack.length) {
            let current = stack.pop();
            result.push(current.val);
            if (current.right !== null) {
                stack.push(current.right);
            }
            if (current.left !== null) {
                stack.push(current.left);
            }
        }
        return result;
    }
/*
https://www.youtube.com/watch?v=TtAflDtqwVg
 */
    maxDepthDFS() {
        let current = this.root;
        let depth = 0;
        const traverse = (current, level = 1) => {
            if (depth < level) {
                depth = level;
            }
            if (current.left !== null) {
                traverse(current.left, level + 1);
            }
            if (current.right !== null) {
                traverse(current.right, level + 1);
            }
        }
        traverse(current);
        return depth;
    }

    maxDepthBFs() {
        let queue = [this.root];
        let depth = 0;
        while (queue.length) {
            let currentLevelChildren = queue.length;
            //loop until all children in the level is complete
            for (let i = 0; i < currentLevelChildren; i++) {
                let current = queue.shift();
                if (current.left !== null) {
                    queue.push(current.left);
                }
                if (current.right !== null) {
                    queue.push(current.right);
                }
            }
            depth++
        }
        return depth;
    }
}

const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(8);
bst.insert(7);
bst.insert(1);
/*bst.insert(10);
bst.insert(6);
bst.insert(15);
bst.insert(3);
bst.insert(8);
bst.insert(20);*/
// let r = bst.BFS();
// console.log(r);
// r=bst.DFSPreOrder();
// r = bst.DfsPreorderStack();
// r=bst.maxDepthDFS()
r = bst.maxDepthBFs()
console.log(r);
// bst.print();

