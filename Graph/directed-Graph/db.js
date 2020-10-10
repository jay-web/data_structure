// ! THIS IS DIRECTED GRAPH
// * Means , it will not be two way like undirected graph
// * We will have edge only from one from vertices to second
// * But we can't back from second to one

class DirectedGraph {
  constructor() {
    this.adjacentList = {};
  }

  // * Add Vertex into Graph
  addVertex(vertex) {
    if (!this.adjacentList[vertex]) {
      this.adjacentList[vertex] = [];
    }
  }

  // * Add Edge from vertex1 to vertex2
  addEdge(vertex1, vertex2) {
      if(!this.adjacentList[vertex1].includes(vertex2)){
            this.adjacentList[vertex1].push(vertex2);
      }
    
  }

  removeEdge(vertex1, vertex2){
      let edgeArray1 = this.adjacentList[vertex1].filter((neighbour) => {
          neighbour !== vertex2;
      });

      let edgeArray2 = this.adjacentList[vertex2].filter((neighbour) => {
          neighbour !== vertex1;
      });

      this.adjacentList[vertex1] = edgeArray1;
      this.adjacentList[vertex2] = edgeArray2;
  }

  // * Remove vertex from graph
  removeVertex(vertex){
      while(this.adjacentList[vertex].length){
          const adjacentVertex = this.adjacentList[vertex].pop();
          this.removeEdge(vertex, adjacentVertex);
      }

      delete this.adjacentList[vertex];
  }
}

module.exports = DirectedGraph;
