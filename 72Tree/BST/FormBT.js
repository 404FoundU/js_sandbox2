//https://coderbyte.com/editor/Tree%20Constructor:JavaScript

function treeConstructor(strArr) {
    let data = strArr.map(el => el
        .replace(/[()]/g, '')
        .split(',')
        .map(e => parseInt(e)));
    // console.log(data);
    let parentMap = {};
    let childMap = {};
    for (let val of data) {
        let child = val[0];
        let parent = val[1];
        if (parentMap[parent]) {
            parentMap[parent].push(child);
        } else {
            parentMap[parent] = [child];
        }


        if (parentMap[parent].length > 2  ) {
            return false;
        }
        if (childMap[child]) {
            return false;
        } else {
            childMap[child] = parent;
        }
    }

    return true;
    // return strArr;
}

// keep this function call here
console.log(treeConstructor(["(1,2)", "(2,4)", "(5,7)", "(7,2)", "(9,5)"]));
// console.log(TreeConstructor(["(1,2)", "(3,2)", "(2,12)", "(5,2)"]));