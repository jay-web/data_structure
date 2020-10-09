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
        // * like v2 will get pushed in v1 array, but v1 won't
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

    removeVertex(vertex) {
        while(this.adjacentList[vertex].length){
            const adjacentVertex = this.adjacentList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacentList[vertex];
    }
    // Depth First Search - Recursively
    DFSR(start) {
        let result = [];
        let visited= {};
        let adjacentList = this.adjacentList;

        function DFS(vertex){
            // BASE Case
            if(!vertex){
                return null;
            }

            visited[vertex] = true;
            result.push(vertex); 
            adjacentList[vertex].forEach((neighbour) => {
                if(!visited[neighbour]){
                    return DFS(neighbour);
                }
            })

        }

        DFS(start);

        return result;
    }

    // Depta First Search - Iterative

    DFSI(start) {
        let stack = [];     // * Stack to iterate left vertex
        let result = [];    // * Result to hold final list of vertices
        let visited = {};   // * Object to hold visited vertex
        let currentElement;   // * variable to help in iteration


        stack.push(start);  // * Initialized input vertex as first element of Stack (line 78)
        visited[start] = true;  // * Marked input vertex as visited (line 79)

        while(stack.length > 0){    // * Start looping till Stack has element left
            currentElement = stack.pop();     // * Take out element from Stack
            result.push(currentElement);      // * Push that element in result holder array

            this.adjacentList[currentElement].forEach(neighbour => {  // * Iterate over pop out vertex (line 88)
                if(!visited[neighbour]){    // * Check did we not visited to currentElement
                    visited[neighbour] = true;  // * Marked visited 
                    stack.push(neighbour);      // * push it into Stack
                }
            })
        }

        return result;      // * Finally return the result array ( line 79)
    }

    // * Breadth First Search - Iteratively

    BFSI(start) {
        let queue = [];     // * Queue to hold the vertices for iteration
        let result = [];    // * Result to hold the final array of vertices
        let visited = {};   // * Visited object to hold the vertex which we visited
        let currentElement;   // * Variable to hold vertex for iteration purpose only

        queue.push(start);       // * Assigned the starting element in Queue( line 105)
        visited[start] = true;      // * Marked start element as visited

        while(queue.length > 0){    // * Start looping till Queue has any element
            currentElement = queue.shift();   // * Take out first element from Queue list
            result.push(currentElement);      // * Push that element in result array

            this.adjacentList[currentElement].forEach(neighbour => {  // * Loop over currentElement neighbour
                if(!visited[neighbour]){     // * Check did we not visited that neighbout before
                    visited[neighbour] = true;      // * Marked the neighbour visited
                    queue.push(neighbour);          // * push it into Queue 
                }
            })
        }

        return result;
    }
}

module.exports = Graph;