// https://coderbyte.com/editor/Transitivity%20Relations:JavaScript
const transitivityRelation = (strArr) => {

  /*  const adjMatrix = strArr.map(el => el
        .split('')
    );*/
    let adjMatrix = strArr.map(el => el
        .replace(/[()]/g, '')
        .split(',')
        .map(e => parseInt(e)));


    let airports = Array.from(Array(adjMatrix.length).keys());
    let destinations = [...airports];
    let pairs = '';
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
    const isDirectRoute = (start, end) => {
        if (adjMatrix[start][end] === 1) {
            return true
        }
        return false;
    }

    for (let airport of airports) {
        for (let destination of destinations) {
            if (airport !== destination) {
                let routeExist = dfsNormal(airport, destination);
                if (routeExist === true) {
                    if (isDirectRoute(airport, destination) === false) {
                        pairs += "(" + airport + "," + destination + ")-" ;
                    }
                }
            }
        }
    }
    if (pairs.length === 0) {
        return "transitive";
    }
    return pairs.slice(0,pairs.length-1);
}


// transitivityRelation(["(0,1,0,0)","(0,0,1,0)","(0,0,1,1)","(0,0,0,1)"]);
console.log(transitivityRelation(["(0,1,0,0)", "(0,0,1,0)", "(0,0,1,1)", "(0,0,0,1)"]));;
