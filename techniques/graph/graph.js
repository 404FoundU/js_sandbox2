////https://fireship.io/courses/javascript/interview-graphs/
const airports = 'PHX BKK OKC JFK LAX MEX EZE USA HEL LOS LAP LIM IND'.split(' ');
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
    ['USA', 'EZE'],
    ['LIM', 'BKK'],
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
// console.log(adjacencyList);
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
const DfsRecursive = (start, end) => {
    const result = [];
    let visited = new Set();
    visited.add(start);
    const traverse = (current) => {
        result.push(current);
        if (current === end) {
            return result;
        }
        let airports = adjacencyList[current];
        for (let airport of airports) {
           /* if (airport === end) {
                result.push(airport);
                return result;
            }*/
            if (!visited.has(airport)) {
                visited.add(airport);
                traverse(airport);
            }
        }
    }
    traverse(start);
    return result;
};
const DfsIterative = (start, end) =>{
    const visited = new Set();
    visited.add(start);
    const result = [];
    const stack = [start];
    while (stack.length) {
        let current = stack.pop();
        result.push(current);
        if (current === end) {
            return result;
        }
        let airports = adjacencyList[current];
        for (let airport of airports) {
            /*if (airport === end) {
                result.push(airport);
                return result;
            }*/
            if (!visited.has(airport)) {
                visited.add(airport);
                stack.push(airport)
            }
        }
    }
    return result;
}

let r = bfs('PHX', 'IND');
 r = DfsRecursive('PHX', 'USA');
console.log(r);
r = DfsIterative('PHX', 'USA');
console.log(r);