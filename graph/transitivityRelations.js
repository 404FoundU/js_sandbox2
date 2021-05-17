// https://coderbyte.com/editor/Transitivity%20Relations:JavaScript
const adjMatrix = [
    [1, 1, 1],
    [0, 1, 1],
    [0, 0, 1]
]
/*
const adjMatrix = [
    [0, 1, 0,0],
    [0, 0, 1,0],
    [0, 0,1,1],
    [0, 0, 0,1],
]
*/
const transitivityRelation = () => {
    let airports = Array.from(Array(adjMatrix.length).keys());
    let destinations = [...airports];
    let pairs = [];
    for (let airport of airports) {
        for (let destination of destinations) {
            if (airport !== destination) {
                // let routeExist = checkRouteExistDfs(airport, destination);
                // let routeExist = checkRouteExistBfs(airport, destination);
                let routeExist = dfsNormal(airport, destination);
                if (routeExist === true) {
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

const checkRouteExistBfs = ( start, end) => {
    const queue = [start];
    const visited = new Set();
    visited.add(start);
    while (queue.length) {
        let current = queue.shift();
        let destinations = adjMatrix[current];
        for (let i = 0; i < destinations.length; i++) {
            //find OKC airport
            if (destinations[i] === 1 && i===end) {
                return true;
            }
            if (!visited.has(i) && destinations[i] === 1 ) {
                visited.add(i);
                queue.push(i);
            }

        }
    }
    return false;

}
const checkRouteExistDfs = (start, end, visited = new Set()) => {
    if (visited.has(start)) {
        return false;
    }
    visited.add(start);
    if (start === end) {
        return true;
    }
    // console.log(start);
    let destinations = adjMatrix[start];
    for (let i = 0; i < destinations.length; i++) {
        if (checkRouteExistDfs(i, end, visited) && destinations[i] ===1) {
            return true;
        }
    }
    return false;
};
const isDirectRoute = (start, end) => {
    if (adjMatrix[start][end] === 1) {
        return true
    }
    return false;
}
const dfsNormal = (start, end) => {
    const stack = [start];
    const visited = new Set();
    // visited.add(start);
    while (stack.length) {
        let current = stack.pop();
        let destinations = adjMatrix[current];
        for (let i = 0; i < destinations.length; i++) {
            if (destinations[i] === 1 && i===end) {
                return true;
            }
            if (!visited.has(i) && destinations[i] === 1 ) {
                visited.add(i);
                stack.push(i);
            }
        }


    }
    return false
}
/*
const checkRouteExistDfsOld = ( start, end, visited = new Set()) => {

    visited.add(start);
    // console.log(start);

    let destinations = adjMatrix[start];
    for (let i = 0; i < destinations.length; i++) {

        if (i===end  && destinations[i] ===1) {
            console.log("found ", end);
            return true;
        }
        if (!visited.has(i)  && destinations[i] ===1 ) {
            checkRouteExistDfsOld( i, end , visited);
        }
        return false;

    }
    // return false;
};*/
console.log(transitivityRelation());
;