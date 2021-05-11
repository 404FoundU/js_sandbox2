const bfs = (adjMatrix, start) => {
    const queue = [start];
    const visited = new Set();
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

const adjMatrix = [
    [0, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
]
const airports = 'PHX BKK OKC JFK LAX MEX EZE'.split(' ');
bfs(adjMatrix, 0);
