class Node{
    height;
    value;
    left;
    right;

    constructor(value, height){
        this.value = value;
        this.height = height;
    }
}


class AVLTree{
    constructor(){
        this.queue = [];
        this.rootNode = undefined;
    }

    getHeight = (node) =>{
        if(node === undefined){
            return -1;
        }

        return node.height;
    }

    insertNode = (node, value) =>{
        if(node === undefined){
            node = new Node(value, 0);
            return node;
        }else if(value<node.value){
            node.left = this.insertNode(node.left, value);
            this.queue.push(node);
            return node;
        }else{
            node.right = this.insertNode(node.right, value);
            this.queue.push(node);
            return node;
        }
    }

    rotateRight = (node) =>{

        let node_left_subtree = node.left;
        let node_left_subtree_right = node.left.right;

        node_left_subtree.right = node;
        node.left = node_left_subtree_right;

        node.height = Math.max(this.getHeight(node.right),this.getHeight(node.left))+1;
        node_left_subtree.height = Math.max(this.getHeight(node_left_subtree.right), this.getHeight(node_left_subtree.left))+1;

        if(this.queue.length === 0){
            root = node_left_subtree;
        }else{
            let parentNode = this.queue[0];
            if(parentNode.right === node){
                parentNode.right = node_left_subtree;
            }else if(parentNode.left === node){
                parentNode.left = node_left_subtree;
            }
        }
    }

    clearQueue(){
        this.queue = [];
    }

    rotateLeft  = (node, parentNode) => {

        let node_right_subtree = node.right;
        let node_right_subtree_left = node.right.left;

        node_right_subtree.left = node;
        node.right = node_right_subtree_left;

        node.height = Math.max(this.getHeight(node.right),this.getHeight(node.left))+1;
        node_right_subtree.height = Math.max(this.getHeight(node_right_subtree.right), this.getHeight(node_right_subtree.left))+1;

        if(this.queue.length === 0){
            root = node_right_subtree;
        }else{
            let parentNode = this.queue[0];
            if(parentNode.right === node){
                parentNode.right = node_right_subtree;
            }else if(parentNode.left === node){
                parentNode.left = node_right_subtree;
            }
        }
    }

    printTree = (node) => {
        if (node === undefined)
            return;
        this.printTree(node.left);
        console.log(node.value + " " + node.height);
        this.printTree(node.right);
    }

    balanceHeight = () => {
        while(this.queue.length>0){

            let node = this.queue.shift();
            let leftHeight = this.getHeight(node.left);
            let rightHeight = this.getHeight(node.right);

            if(Math.abs(leftHeight-rightHeight)<=1){//balanced
                node.height = Math.max(leftHeight, rightHeight)+1;
            }else{

                if(rightHeight>leftHeight)//node is right heavy
                {
                    let leftRightHeight =this.getHeight(node.right.left);
                    let rightRightHeight =this.getHeight(node.right.right);
                    if(rightRightHeight>=leftRightHeight)//node is right heavy and its right child right heavy or balanced
                        this.rotateLeft(node);
                    else//node is right heavy and its right child is left heavy
                    {
                        this.rotateRight(node.right);
                        this.rotateLeft(node);
                    }
                }
                else
                {
                    let leftLeftHeight=this.getHeight(node.left.left);
                    let leftRightHeight=this.getHeight(node.left.right);
                    if(leftLeftHeight>=leftRightHeight)//node is left heavy and its left child is left heavy or balanced
                        this.rotateRight(node);
                    else//node is left heavy and its left child is right heavy
                    {
                        this.rotateLeft(node.left);
                        this.rotateRight(node);
                    }
                }
            }

        }

    }
}


///usage
let avlTree = new AVLTree();

console.log(avlTree)

let root=avlTree.insertNode(undefined,2);
avlTree.balanceHeight();
avlTree.clearQueue();
root= avlTree.insertNode(root,4);
avlTree.balanceHeight();
avlTree.clearQueue();
root= avlTree.insertNode(root,6);
avlTree.balanceHeight();
avlTree.clearQueue();
root= avlTree.insertNode(root,8);
avlTree.balanceHeight();
avlTree.clearQueue();
root= avlTree.insertNode(root,10);
avlTree.balanceHeight();
avlTree.clearQueue();
avlTree.printTree(root);