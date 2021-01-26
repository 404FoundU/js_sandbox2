class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }

}

const a = new Node('a');
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
const breadthFirstPrint = (root) => {
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        console.log(current.val);
        if (current.left !== null) {
            queue.push(current.left);
        }if (current.right !== null) {
            queue.push(current.right);
        }
    }
};
const bfs = (root, target) => {
    const queue = [root];
    while (queue.length > 0) {
        const current = queue.shift();
        if (current.val === target) {
            return true;
        }
        if (current.left !== null) {
            queue.push(current.left);
        }if (current.right !== null) {
            queue.push(current.right);
        }


    }
    return false
};
const sumTree = (root) => {
    const queue = [root];
    let sum = 0;
    while (queue.length > 0) {
        const current = queue.shift();
        sum += current.val;
        if (current.left !== null) {
            queue.push(current.left);
        }if (current.right !== null) {
            queue.push(current.right);
        }


    }
    return sum;
};

breadthFirstPrint(a);
console.log(bfs(a, "e"));
console.log(bfs(a, "z"));
console.log(sumTree(a));