function selectMinVertex(distances, mstSet, vertices) {
    let minimum = Infinity;
    let vertex;
    for (let i = 0; i < vertices; i++) {
        if (distances[i] < minimum && mstSet[i] === false) {
            vertex = i;
            minimum = distances[i];
        }
    }
    return vertex;
        }

const primMST = () => {
    const graph = [
        [0, 2, 0, 6, 0],
        [2, 0, 3, 8, 5],
        [0, 3, 0, 0, 7],
        [6, 8, 0, 0, 9],
        [0, 5, 7, 9, 0]
    ];
    let vertices = graph.length;
    const parent = [];
    const distances = [];
    const mstSet = [];
    for (let i = 0; i < vertices; i++) {
        distances[i] = Infinity;
        mstSet[i] = false;
    }
    distances[0] = 0;
    parent[0] = -1;
    // mst with v-1 edges
    for (let i = 0; i < vertices - 1; i++) {
        // u - starting node
        let u = selectMinVertex(distances, mstSet, vertices);
        mstSet[u] = true;
        
        // relax all adjacent vertices
        for (let j = 0; j < vertices; j++) {
            /*
            edge is present from U to j
            vertex j i snot included in mstSet
            edge weight is smaller than current edge weight
             */
            if (graph[u][j] !== 0 && distances[j] === false && graph[u][j] < distances[j]) {
                distances[j] = graph[u][j];
                parent[j] = u;
            }
        }
        //print mst
        for (let i = 1; i < vertices; i++) {
            console.log(parent[i]);
        }


        
    }
    
}