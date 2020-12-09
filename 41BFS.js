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

    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(this.root);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        return data;
    }

    DFSPreOrder() {
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
    DFSInOrder() {
        let data = [];
        const traverse = (node) => {
            if (node.left !== null) {
                traverse(node.left);
            }
            data.push(node.value);

            if (node.right !== null) {
                traverse(node.right);
            }

        };
        traverse(this.root);
        return data;
    }


}

let tree = new BST();
tree.insert(10);


