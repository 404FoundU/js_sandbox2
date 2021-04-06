class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2) {
        // this.addVertex(v1);
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1,v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v1].filter(v => v !== v1);
    }

    removeVertex(v1) {
        for (let vertex of this.adjacencyList[v1]) {
            this.removeEdge(vertex, v1);
        }
        delete this.adjacencyList[v1];
    }

    DFSRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;
        const dfs = (vertex) =>{
            if (!vertex) {
                return null;
            }
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    return dfs(neighbour);
                }
            })
        }
        dfs(start);
        return result;
    }

    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let vertex;
        visited[start] = true;
        while (stack.length) {
            vertex = stack.pop();
            result.push(vertex);
            this.adjacencyList[vertex].forEach(neighbour =>{
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            })

        }
        return result;
    }

    bfs(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour =>{
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    queue.push(neighbour);
                }
            })
        }
        return result;
    }

}