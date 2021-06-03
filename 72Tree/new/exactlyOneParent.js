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
    let childMap = {};
    for (let i = 0; i < parentChild.length; i++) {
        let parent = parentChild[i][0];
        let child = parentChild[i][1];
        if (child in childMap) {
            let parents = childMap[child]
            parents.push(parent);
            childMap[child] = parents;
            // childMap.child.push(parent);
        }
        else{

            childMap[child] = [parent];
        }

    }
    for (const child in childMap) {
        let parents = childMap[child];
        if (       parents.length ===1) {
            console.log(child);
        }
    }
}
parentChildFinder(parentChild);