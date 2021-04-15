
class SimplePriorityQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(val, priority) {

        this.queue.push({val, priority});
        this.queue.sort((a, b) => a.priority - b.priority);
    }

    dequeue() {
        return this.queue.shift();
    }
}
class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({node: v2, weight});
        this.adjacencyList[v2].push({node: v1, weight});

    }

    dijkstra(start, finish) {
        const nodes = new SimplePriorityQueue();
        const distances = {};
        const previous = {};
        let smallest;
        let path = [];
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        while (nodes.val.length) {
            smallest = nodes.dequeue().val;
            if (smallest === finish) {
                let v = previous[smallest];

                while (v !== null) {
                    path.push(v);
                    v = previous[v];
                }
                break;
            }
            if (smallest || distances[smallest] !==  Infinity) {
                for (let neighbour in this.adjacencyList[smallest]) {
                    let nextNode = this.adjacencyList[smallest][neighbour];
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbour = nextNode.node
                    if (candidate < distances[nextNeighbour]) {
                        distances[nextNeighbour] = candidate;
                        previous[nextNeighbour] = smallest;
                        nodes.enqueue(nextNeighbour, candidate);
                    }
                }
            }

        }
       return path.concat(smallest).reverse();

    }

}

const graph = new WeightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

