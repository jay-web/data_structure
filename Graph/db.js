class Graph {
    constructor(){
        this.adjacentList = {}
    }

    addVertex(value) {
        if(!this.adjacentList[value]){
            this.adjacentList[value] = [];
        }
        return;
    }

    addEdge(vertex1, vertex2){
        // * For undirected Graph
        this.adjacentList[vertex1].push(vertex2);
        this.adjacentList[vertex2].push(vertex1);

        // ! For directed graph only single vertex will be get placed in edge array
        // * like v2 will get pushed in v1 array
    }

    removeEdge(vertex1, vertex2){
        // * Below code assuming again as undirected graph
        let edgeArray = this.adjacentList[vertex1].filter((area) => {
            if( area !== vertex2){
                return area;
            };
        });
       
        let edgeArray2 = this.adjacentList[vertex2].filter((area) => {
             if(area !== vertex1){
                 return area;
             };
        })
        
        this.adjacentList[vertex1] = edgeArray;
        this.adjacentList[vertex2] = edgeArray2;
    }
}

module.exports = Graph;