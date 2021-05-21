//https://www.youtube.com/watch?v=eB61LXLZVqs
//https://www.youtube.com/watch?v=xthRL0lcx2w&t=1602s

const findMinVertex = (distances, mst) => {
    let minDistance = Infinity;
    let minVertex;
    for (let i = 0; i < distances.length; i++) {
        if (distances[i] < minDistance   && mst[i] === false) {
            minDistance = distances[i];
            minVertex =i;
        }
    }
    return minVertex;
};

const primMST = () => {
    const graph = [
        [0, 2, 0, 6, 0],
        [2, 0, 3, 8, 5],
        [0, 3, 0, 0, 7],
        [6, 8, 0, 0, 9],
        [0, 5, 7, 9, 0]
    ];
    //vertices not included in the mst
    const mst = Array.from({length: graph.length}, () => false);
    //distances to track minimum weight, edge relaxation
    const distances = Array.from({length: graph.length}, () => Infinity);
    //parent to store MST
    const parent = [];
    //  Source node is 0
    parent[0] = -1;// start node has no parent
    //pick first vertex.
    distances[0] = 0;
    // loop for running the algorith steps v-1 times
    for (let i = 0; i < graph.length - 1; i++) {
        // select minimum node weight
        let minVertex = findMinVertex(distances, mst);
        // set mst at minVertex to true
        mst[minVertex] = true;
        //relax all adjacent vertices
        for (let j = 0; j < graph.length; j++) {
            /*
            If edge is present from minVertex to current
J should not be included in the MST.
graph edge weight is less than current distance
             */
            if (graph[minVertex][j] !== 0 && mst[j] === false && graph[minVertex][j] < distances[j]) {
                distances[j] = graph[minVertex][j];
                parent[j] = minVertex;
            }
        }
    }






        

}
