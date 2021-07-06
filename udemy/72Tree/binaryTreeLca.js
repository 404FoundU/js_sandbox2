const binaryTreelca = (strArr) => {
    let tree = strArr[0];
    let a = parseInt(strArr[1]);
    let b = parseInt(strArr[2]);
    tree = tree.replace('[', '');
    tree = tree.replace(']', '');
    tree = tree.replace(/[ ]/g, '');
    tree = tree.split(',');
    tree = tree.map(el => {
            if (el !== '#') {
                return parseInt(el);
            }
        }
    );
    let aIdx = tree.indexOf(a);
    let bIdx = tree.indexOf(b);
    let parents = [];
    let parentsB = [];
    parents.push(a);
    parentsB.push(b);
    while (aIdx > 0) {
        let parentIdx = Math.floor((aIdx - 1) / 2);
        parents.push(tree[parentIdx]);
        aIdx = parentIdx;
    }
    while (bIdx > 0) {
        let parentIdx = Math.floor((bIdx - 1) / 2);
        parentsB.push(tree[parentIdx]);
        bIdx = parentIdx;
    }
    let newArray = parents.filter(n => parentsB.includes(n));
    return newArray[0];
};
// binaryTreelca(["[12, 5, 9, 6, 2, 0, 8]", "6", "4"]);
// console.log(binaryTreelca(["[12, 5, 9, 6, 2, 0, 8, #, #, 7, 4, #, #, #, #]", "6", "4"]));
// console.log(binaryTreelca( ["[5, 2, 6, 1, #, 8, #]", "2", "6"]));
console.log(binaryTreelca(["[5, 2, 6, 1, #, 8, 12, #, #, #, #, #, #, 3, #]", "3", "12"]));
