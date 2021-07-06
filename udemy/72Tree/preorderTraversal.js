/*
//https://coderbyte.com/editor/Preorder%20Traversal:JavaScript



function preorderTraversal(strArr) {
  const queue = [];

  const helper = (arr, root) => {
    if(root > strArr.length-1) return;
    if(arr[root] === '#') return;

    queue.push(arr[root]);
    helper(arr,2*root+1);
    helper(arr,2*root+2);
  }

  helper(strArr, 0);
  // code goes here
  return queue.join(' ');

}
*/


class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

const list = [];
const buildTree = (arr, i) => {
    if (i < arr.length) {
        const value = arr[i];

        if (value === '#' || value === undefined) {
            return null;
        }
        list.push(value);
        const node = new Node(arr[i]);

        node.left = buildTree(arr, 2 * i + 1);
        node.right = buildTree(arr, 2 * index + 2);
        return node
    }

}

function preorderTraversal(strArr) {
    const tree = buildTree(strArr, 0);
    return list.join(' ')
}

console.log(preorderTraversal(["5", "2", "6", "1", "9", "#", "8", "#", "#", "#", "#", "4", "#"]));;