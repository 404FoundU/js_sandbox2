//https://www.youtube.com/watch?v=q1tWucRHxj0
// graph picture is in video
const airports = 'PHX BKK OKC JFK LAX MEX EZE'.split(' ');

const adjMatrix = [
    [0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]
const bfs = (adjMatrix, start) => {
    const queue = [start];
    const visited = new Set();
    visited.add(start);
    while (queue.length) {
        let current = queue.shift();
        console.log(current);
        let destinations = adjMatrix[current];
        for (let i = 0; i < destinations.length; i++) {
            //find OKC airport
            if (destinations[i] === 1 && i===2) {
                console.log("Found it");
            }
            if (!visited.has(i) && destinations[i] === 1 ) {
                visited.add(i);
                queue.push(i);
            }

        }
    }

}

bfs(adjMatrix, 0);

const dfs = (adjMatrix, start, visited = new Set()) => {
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
                dfs(adjMatrix, i, visited);
            }
        }
    }
};
// dfs(adjMatrix, 0);
