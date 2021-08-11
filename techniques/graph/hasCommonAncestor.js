/*
Karat
Suppose we have some input data describing a graph of relationships between parents and children over multiple generations. The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique positive integer identifier.

[1 3 6]

[14, 4, 5, 6]
[14, 4, 8]

For example, in this diagram, 6 and 8 have common ancestors of 4 and 14.

            15
             |
      14  13
        |   |
1 2 4 12
\ / / | \ /
3 5 8 9
\ / \
6 7 11

parentChildPairs1 = [
(1, 3), (2, 3), (3, 6), (5, 6), (5, 7), (4, 5),
(4, 8), (4, 9), (9, 11), (14, 4), (13, 12),
(12, 9),(15, 13)
]

Write a function that takes the graph, as well as two of the individuals in our dataset, as its inputs and returns true if and only if they share at least one ancestor.

Sample input and output:

hasCommonAncestor(parentChildPairs1, 3, 8) => false
hasCommonAncestor(parentChildPairs1, 5, 8) => true
hasCommonAncestor(parentChildPairs1, 6, 8) => true
hasCommonAncestor(parentChildPairs1, 6, 9) => true
hasCommonAncestor(parentChildPairs1, 1, 3) => false
hasCommonAncestor(parentChildPairs1, 3, 1) => false
hasCommonAncestor(parentChildPairs1, 7, 11) => true
hasCommonAncestor(parentChildPairs1, 6, 5) => true
hasCommonAncestor(parentChildPairs1, 5, 6) => true

Additional example: In this diagram, 4 and 12 have a common ancestor of 11.

    11
   /  \
  10   12
 /  \
1 2 5
\ / /
3 6 7
\
4 8

parentChildPairs2 = [
(1, 3), (11, 10), (11, 12), (2, 3), (10, 2),
(10, 5), (3, 4), (5, 6), (5, 7), (7, 8),
]

hasCommonAncestor(parentChildPairs2, 4, 12) => true
hasCommonAncestor(parentChildPairs2, 1, 6) => false
hasCommonAncestor(parentChildPairs2, 1, 12) => false

n: number of pairs in the input

*/


const hasCommonAncestor = (graph, node1, node2) => {
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
    }
    /*for (let path of graph) {
        if (!adjacencyList[path[0]]) {
            adjacencyList[path[0]] = [];
        }
        adjacencyList[path[0]].push(path[1]);
        indegree[path[0]] = indegree[path[0]] + 1;
    }*/

    // console.log(indegree);
    // console.log(adjacencyList);
    const points = [];
    points.push(node1, node2);
    for (let point of points) {
        const queue = [point];
        /*for (let key in indegree) {
            if (indegree[key] === 0) {
                queue.push(key)
            }
        }*/

        const visited = new Set();
        while (queue.length) {
            let p = queue.shift()


            let c = adjacencyList[p.toString()];
            if (c !== undefined) {
                indegree[p] = indegree[p] + 1;

                for ( let child of c) {

                    if (!visited.has(child)) {
                        visited.add(child);
                        queue.push(child);
                    }
                }
            }
        }
    }
    // console.log(indegree);
    for (let key in indegree) {
        if (indegree[key] > 1) {
            return true
        }
    }
    return false;
}
const parentChildPairs1 = [
    [1, 3], [2, 3], [3, 6], [5, 6], [5, 7], [4, 5],
    [4, 8], [4, 9], [9, 11], [14, 4], [13, 12],
    [12, 9],[15, 13]
]
console.log(hasCommonAncestor(parentChildPairs1, 3, 8) );
console.log(hasCommonAncestor(parentChildPairs1, 5, 8));
console.log(hasCommonAncestor(parentChildPairs1, 6, 8));
console.log(hasCommonAncestor(parentChildPairs1, 6, 9));
console.log(hasCommonAncestor(parentChildPairs1, 1, 3) );
console.log(hasCommonAncestor(parentChildPairs1, 3, 1) );
console.log(hasCommonAncestor(parentChildPairs1, 7, 11));
console.log(hasCommonAncestor(parentChildPairs1, 6, 5));
console.log(hasCommonAncestor(parentChildPairs1, 5, 6));