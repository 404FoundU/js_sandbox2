//https://www.softnami.com/posts_pr/algorithms-5avl-tree-using-javascript.html
class Node{
    constructor(val, height) {
        this.val = val;
        this.height = height;
        this.right = null;
        this.left = null;
    }

}
class avlTree{
    constructor(){
        this.queue = [];
        this.root = null;

    }
    insert(val){
        let node = new Node(val, 0);

        if (!this.root) {

            this.root = node;
        }
        else{
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
        this.balanceHeight();


    }
    balanceHeight() {

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
    }
}