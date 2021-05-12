// https://coderbyte.com/editor/Transitivity%20Relations:JavaScript

const adjMatrix = [
    [1, 1, 1],
    [1, 0, 0],
    [0, 1, 0]
]

const transitivityRelation = () => {
       let airports = Array.from(Array(adjMatrix.length).keys());
    let destinations = [...airports];
    let pairs = [];
    for (let airport of airports) {
        for (let destination of destinations) {
            if (airport !== destination) {
                let routeExist = checkRouteExist(airport, destination);
                if ( routeExist=== true) {
                    if (isDirectRoute(airport, destination) === false) {
                        pairs.push([airport, destination]);
                    }
                }
            }

        }
    }
    if (pairs.length === 0) {
        return "transitive";
    }
    return pairs;


}
const checkRouteExist = ( start, end, visited = new Set()) => {

    visited.add(start);
    // console.log(start);
    let destinations = adjMatrix[start];
    for (let i = 0; i < destinations.length; i++) {

            if (i===end && destinations[i] === 1) {
                console.log("found ", end);
                return true;
            }
            if (!visited.has(i) && destinations[i] === 1) {
                checkRouteExist( i, end , visited);
            }

    }
};
const isDirectRoute=(start, end)=>{
    if (adjMatrix[start][end] === 1) {
        return true
    }
    return false;
}
console.log(transitivityRelation());;