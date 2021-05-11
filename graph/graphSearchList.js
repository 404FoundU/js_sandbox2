//https://fireship.io/courses/javascript/interview-graphs/

const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
];
const adjacencyList = new Map();
const addNode = (airport) => {
    adjacencyList.set(airport, []);
};
const addEdge = (origin, dest) => {
    adjacencyList.get(origin).push(dest);
    adjacencyList.get(dest).push(origin);
}

// create graph
airports.forEach(addNode);

routes.forEach(route => addEdge(...route));
// console.log(adjacencyList);

// graph search bfs. find if there a way to destination

const bfs = (start, end) => {
    const queue = [start];
    const visited = new Set();
    while (queue.length) {
        const airport = queue.shift();
        const destinations = adjacencyList.get(airport);
        for (let destination of destinations) {
            if (destination === end) {
                console.log("Found it");
            }
            if (!visited.has(destination)) {
                visited.add(destination);
                queue.push(destination);
                console.log(destination);
            }
        }

    }
}
// bfs('LAX', 'MEX');

// find the route as quickly as possible
const dfs = (start, visited = new Set()) => {
    visited.add(start);
    const destinations = adjacencyList.get(start);
    for (let destination of destinations) {
        if (destination === 'BKK') {
            console.log('Found it');
            return;
        }
        if (!visited.has(destination)) {
            dfs(destination, visited);
        }
    }

}
dfs('PHX')

