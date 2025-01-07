class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // add a vertex
  addVertex(vertex) {
    //check if the vertex already exists
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = [];
    }
  }

  // remove a vertex
  removeVertex(vertex) {
    //check if the vertex exists
    if (this.adjacencyList[vertex]) {
      // remove all edges associated with it
      while (this.adjacencyList[vertex].length) {
        const adjacencyVertex = this.adjacencyList[vertex].pop();
        this.removeEdge(vertex, adjacencyVertex);
      }
      delete this.adjacencyList[vertex];
    }
  }

  // add an edge
  addEdge(v1, v2) {
    // check if the nodes exists
    if (this.adjacencyList[v1] && this.adjacencyList[v2]) {
      this.adjacencyList[v1].push(v2);
      this.adjacencyList[v2].push(v1);
    }
  }

  removeEdge(v1, v2) {
    if (this.adjacencyList[v1]) {
      this.adjacencyList[v1] = this.adjacencyList[v1].filter(
        (vertex) => vertex !== v2
      );
    }
    if (this.adjacencyList[v2]) {
      this.adjacencyList[v2] = this.adjacencyList[v2].filter(
        (vertex) => vertex !== v1
      );
    }
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("A", "C");
graph.addEdge("B", "C");

console.log(graph);

graph.removeEdge("A", "B");

console.log(graph);


