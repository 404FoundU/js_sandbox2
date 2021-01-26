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
const depthFirstPrint = (root) => {
    if (root === null) {
        return;
    }
    const stack = [root];
    while (stack.length > 0) {
        let el = stack.pop();
        console.log(el.val);

        if (el.right !== null) {
            stack.push(el.right);
        }
        if (el.left !== null) {
            stack.push(el.left);
        }

    }

};
// preorder - print parent before children
const depthFirstPrintR = (root) => {
    if (root === null) {
        return;
    }
    console.log(root.val);
    if (root.left !== null) {
        depthFirstPrintR(root.left)
    }
    if (root.right !== null) {
        depthFirstPrintR(root.right);
    }
};
// post order - debfca

const postOrder = (root) => {
    if (root === null) {
        return;
    }
    if (root.left !== null) {
        depthFirstPrintR(root.left)
    }
    if (root.right !== null) {
        depthFirstPrintR(root.right);
    }    console.log(root.val);

};
// in order - dbeacf
    depthFirstPrintR(a);