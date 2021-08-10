//https://leetcode.com/discuss/interview-question/1159164/Compass-or-OA-or-All-possible-starting-and-ending-locations
const automatedDoll = (graph) => {
    let nodes = new Set();
    const indegree = {}
    for (let path of paths) {
        nodes.add(path[0]);
        nodes.add(path[1]);
    }
    for (let node of nodes) {
        indegree[node] = 0;
    }
    const adjacencyList = {};
    for (let g of graph) {
        if (!adjacencyList[g[0]]) {
            adjacencyList[g[0]] = [];
        }
        adjacencyList[g[0]].push(g[1]);
        indegree[g[0]] = indegree[g[0]] + 1;
    }
    // console.log(adjacencyList);
    // console.log(indegree);
    const exits = [];
    for (let key in indegree) {
        if (indegree[key] === 0) {
            exits.push(key)
        }
    }
    let final = [];
    for (let el of input) {
           let result = [];

        let queue = [el];
        let visited = new Set();
        visited.add(el);
        while (queue.length) {
            let exit = queue.shift();
            let exits = adjacencyList[exit];
            if (exits !== undefined) {
                for (let e of exits) {
                    if (indegree[e] === 0) {
                        result.push(e);
                    }
                    if (!visited.has(e)) {
                        visited.add(e);
                        queue.push(e)
                    }

                }
            }
        }
        if (result.length) {
            final.push(result)
        }
    }
    console.log(final);
}
let paths = [
    ["A", "B"],
    ["A", "C"],
    ["B", "K"],
    ["C", "K"],
    ["E", "L"],
    ["F", "G"],
    ["J", "M"],
    ["E", "F"],
    ["G", "H"],
    ["G", "I"],
    ["C", "G"]
];
let input = ["A", "E", "J"]
console.log(automatedDoll(paths));