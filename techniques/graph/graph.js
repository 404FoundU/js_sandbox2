////https://fireship.io/courses/javascript/interview-graphs/
const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM IND'.split(' ');
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
    ['LIM', 'BKK'],
    ['IND', 'BKK']
];
const adjacencyList = {};
const addNode = (airport) => {
    adjacencyList[airport] = [];
};
const addEdge = (origin, destination) => {
    adjacencyList[origin].push(destination);
    adjacencyList[destination].push(origin);
};
//create graph
for (let airport of airports) {
    addNode(airport);
}
//create list
for (let route of routes) {
    addEdge(route[0], route[1]);
}
console.log(adjacencyList);
//bfs
const bfs = (start, end) => {
    let result = [];
    let queue = [start];
    let visited = new Set();
    visited.add(start);
    while (queue.length) {
        let current = queue.shift();
        result.push(current);
        let airports = adjacencyList[current];
        for (let airport of airports) {
            if (airport === end) {
                 result.push(airport);
                 return result;
            }
            if (!visited.has(airport)) {
                visited.add(airport);
                queue.push(airport);
            }
        }
    }
    return result;
}
let r = bfs('PHX', 'IND');
console.log(r);