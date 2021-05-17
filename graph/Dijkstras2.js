const airports = 'A B C D E F'.split(' ');
const routes= [
    ["A","B", 4],
    ["A","C", 2],
    ["B","E", 3],
    ["C","D", 2],
    ["C","F", 4],
    ["D","E", 3],
    ["D","F", 1],
    ["E","F", 1]
]
const adjacencyList = new Map();
const addNode = (airport) => {
    adjacencyList.set(airport, []);
};
const addEdge = (origin, dest, distance) => {
    adjacencyList.get(origin).push({port: dest, distance: distance})
    adjacencyList.get(dest).push({port: origin, distance: distance})
};

airports.forEach(airport => {
    addNode(airport);
})
for (let route of routes) {
    addEdge(...route);
}
const findMinVertex = (distances, visited) =>{
    let minDistance = Infinity;
    let minVertex;
    for (let i = 0; i < distances.length; i++) {
        if (distances[i] < minDistance) {
            minDistance = distances[i];
            minVertex = i;
        }
    }
    return minVertex
}
const priorityQueue = [];
const enqueue = (val, priority) => {
    priorityQueue.push({val, priority})
    priorityQueue.sort((a, b) => a.priority - b.priority);
}
const dequeue = ()=> {
   return  priorityQueue.shift();
}

const dijkstra = (start, end) => {
    const visited = new Set();
    const distances = {};
/*    const distances = Array.from({length: airports.length}, () => Infinity);
    distances[0] = 0;*/
    const parent = [];
    const path = [];
    airports.forEach(airport => {
        if (airport === start) {
            enqueue(airport, 0);
            distances[airport] = 0;
        }
        else {
            enqueue(airport, Infinity);
            distances[airport] = Infinity;

        }
        parent[airport] = null;
    });
    // As long as something to visit
    while (priorityQueue.length) {
       let  airport = dequeue().val;
        if (airport === end) {
            while (parent[airport]) {
                path.push(airport);
                airport=parent[airport]
            }
            break;
            //build path to return
        }
        if (airport || distances[airport] !== Infinity) {
            // loop over neighbours
            let destinations = adjacencyList.get(airport);
            for (let destination of destinations) {
                  // calculate new dist to neighbour port

                console.log(`Airport ${destination.port} is ${destination.distance} from ${airport}`);
                console.log(`Shortest distance from Airport ${airport} to A is  ${distances[airport]} `);

                let candidate = distances[airport] + destination.distance;
                console.log(`Shortest distance from Airport ${airport} to ${destination.port}  is   ${destination.distance}  `);
                console.log(`Candidate distance from Airport ${airport} to ${destination.port}  is  ${distances[airport]} + ${destination.distance} = ${candidate} `);
                console.log(` Candidate distance ${candidate} is < ${distances[destination.port]} current distance to  ${destination.port}`);
                let nextPort = destination.port;
                if (candidate < distances[nextPort]) {
                    //Updating smallest dist to neighbour
                    distances[nextPort] = candidate;
                    console.log(` Update distance to ${destination.port} as ${distances[destination.port]}`);

                    // how we got to nextNeighbour
                    parent[nextPort] = airport;
                    enqueue(destination.port, candidate )

                }
                /*if (!visited.has(destination.port)) {
                     visited.add(destination.port);
                     enqueue(destination.port, destination.distance )
                 }*/
            }
        }
    }


}
dijkstra('A', 'F');



