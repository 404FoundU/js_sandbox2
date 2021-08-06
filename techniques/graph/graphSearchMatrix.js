//https://www.youtube.com/watch?v=q1tWucRHxj0
// graph picture is in video
/*
             LAX
       PHX           DAL
IND          USA   Sin       Pak
*/
//BFS - 12345678
const airports = ['LAX', 'PHX', 'DAL', 'IND', 'USA', 'Sin','Pak']
const adjMatrix = [

    [0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]
const bfs = (start, end) => {
    let indexStart = airports.indexOf(start);
    let indexEnd = airports.indexOf(end)
    //start is LAX. It is the 0th row and 0th column.
    // Here we consider row as 0;
    const queue = [indexStart];
    const visited = new Set();
    visited.add(indexStart);
    const result = [];
    while (queue.length) {
        let current = queue.shift();
        console.log(current);
        result.push(current);
        let destinations = adjMatrix[current];
        for (let i = 0; i < destinations.length; i++) {
            //find OKC airport
            if (destinations[i] === 1 && i===indexEnd) {
                result.push(indexEnd);
                return result;
            }
            if (!visited.has(i) && destinations[i] === 1 ) {
                visited.add(i);
                queue.push(i);
            }
        }
    }
    return result
}
// bfs('LAX', 'PAK');
const dfs = (start) => {
    const stack = [start];
    const visited = new Set();
    // visited.add(start);
    while (stack.length) {
        let current = stack.pop();
        let destinations = adjMatrix[current];
        for (let i = 0; i < destinations.length; i++) {
            if (!visited.has(i) && destinations[i] === 1 ) {
                visited.add(i);
                stack.push(i);
            }
        }


    }
}
dfs(0);

const dfsRecursive = (adjMatrix, start, visited = new Set()) => {
    visited.add(start);
    console.log(start);
    let destinations = adjMatrix[start];
    for (let i = 0; i < destinations.length; i++) {
        if (destinations[i] === 1) {
            if (i===2) {
                console.log("found OKC");
                return;
            }
            if (!visited.has(i)) {
                dfsRecursive(adjMatrix, i, visited);
            }
        }
    }
};


// dfsRecursive(adjMatrix, 0);
