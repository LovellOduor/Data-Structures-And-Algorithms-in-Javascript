class AdjMatrix{
    matrix = [];

    constructor(nodes){
        for(let i = 0; i<nodes; i++){
            let col = [];
            for(let j = 0; j<nodes; j++){
                col.push(0);
            }
            this.matrix.push(col);
        }
    }

    addEdge(node,connection){
        this.matrix[node][connection] = 1;
        this.matrix[connection][node] = 1;
    }

    printGraph(){
        for(let i in this.matrix){
            process.stdout.write(i+" -> ");
            for(let j in this.matrix[i]){
                process.stdout.write(this.matrix[i][j]+" ");
            }
            console.log("\n");
        }
    }
}
const adjMat = new AdjMatrix(5);
/*
    0----1
    |    |
    2----3----4 
 */
adjMat.addEdge(0,1);
adjMat.addEdge(0,2);
adjMat.addEdge(1,3);
adjMat.addEdge(2,3);
adjMat.addEdge(3,4);

adjMat.printGraph();