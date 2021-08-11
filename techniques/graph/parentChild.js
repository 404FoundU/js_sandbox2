//https://leetcode.com/discuss/interview-question/1322869/Compass-India-Online-assessment-via-Karat-Graph-easy-medium-problems
//karat


const parentChildFinder = (graph) => {
    let nodes = new Set();
    const indegree = {}
    for (let path of graph) {
        nodes.add(path[0]);
        nodes.add(path[1]);
    }
    for (let node of nodes) {
        indegree[node] = 0;
    }
    const adjacencyList = {};
    for (let path of graph) {
        if (!adjacencyList[path[1]]) {
            adjacencyList[path[1]] = [];
        }
        adjacencyList[path[1]].push(path[0]);
        indegree[path[1]] = indegree[path[1]] + 1;
    }
    /*for (let path of graph) {
        if (!adjacencyList[path[0]]) {
            adjacencyList[path[0]] = [];
        }
        adjacencyList[path[0]].push(path[1]);
        indegree[path[0]] = indegree[path[0]] + 1;
    }*/

    console.log(indegree);
    console.log(adjacencyList);
    const queue = [];
    for (let key in indegree) {
        if (indegree[key] === 0) {
            queue.push(key)
        }
    }
    let result = [];
    while (queue.length) {
        let p = queue.shift()
        result.push(p)
        let c = adjacencyList[p.toString()];
        if (c !== undefined) {
            for ( let child of c) {
                indegree[child]--;
                if (indegree[child] === 0) {
                    queue.push(child);
                }
            }
        }
    }
    console.log(result);
}
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
parentChildFinder(parentChild);