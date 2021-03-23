// https://www.youtube.com/watch?v=SOwHYHMiX4M

const Node = (val) => {
    this.val = val;
    this.left = this.right = null;
};

const maxDepth = (node) => {
    if (!node) {
        return 0;
    }
    const leftNode = maxDepth(node.left);
    const rightNode = maxDepth(node.right);
    return Math.max(leftNode, rightNode) + 1;
};

