// ! Weighted undirected graph
// * Means, given any value to the edge between vertices
// * It can be distance from one vertice to another
// * It can be time of travel from one vertice to another
// * It will helpful to calculate shortest or best path to move from one to another

class WeightedUndirectedGraph {
    constructor(){
        this.adjacencyList = {}
    }

    // * Add new vertex
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = [];
        }
    }

    // * Add Edge between vertices
    addEdge(vertex1, vertex2, weight){
        if(!this.adjacencyList[vertex1].includes(vertex2)){
            this.adjacencyList[vertex1].push({node: vertex2, weight});
            
        }

        if(!this.adjacencyList[vertex2].includes(vertex1)){
            this.adjacencyList[vertex2].push({ node: vertex1, weight});
            
        }
    }

    // * Remove Edge between vertices
    removeEdge(vertex1, vertex2){
   

        if(this.adjacencyList[vertex1]){
         
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((nb) => {
                if(nb.node !== vertex2){
                    return nb;
                };
            });
            
        }
       
        if(this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((nb) => {
                if(nb.node !== vertex1){
                    return nb;
                };
            });
        }
       
    
        
    }

    // * Remove Vertex 
    removeVertex(vertex){
        if(!this.adjacencyList[vertex]){
            return;
        }

        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            
            this.removeEdge(adjacentVertex);
        }
       
        delete this.adjacencyList[vertex];
    }
}


module.exports = WeightedUndirectedGraph;