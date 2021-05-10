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
console.log(adjacencyList);


