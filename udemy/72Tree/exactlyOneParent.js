const parentChild = [
    [1,2],
    [3,6],
    [3,2],
    [4,7],
    [5,8],
    [2,9],
    [9,6],
    [6,10],
    [7,10],
    [7,11],
    [8,11]
]

const parentChildFinder = (parentChild) => {
    let childMap = new Map();
    const singleParent = [];
    const noParent = [];
    for (let i = 1; i <= 11; i++) {
        childMap.set(i, []);
    }
    for (let j = 0; j < parentChild.length; j++) {
        let parent = parentChild[j][0];
        let child = parentChild[j][1];

        childMap.get(child).push(parent);
    }
    console.log(childMap);
    for (let [key, value] of childMap) {
        if (value.length === 0) {
            noParent.push(key);
        }if (value.length === 1) {
            singleParent.push(key);
        }
    }
    console.log(noParent);
    console.log(singleParent);
}
parentChildFinder(parentChild);