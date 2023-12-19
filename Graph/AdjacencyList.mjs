import LinkedList from "../LinkedList/LinkedList.mjs";

class AdjacencyList{
    nodes = [];
    constructor(nodeCount){
        for(let i = 0; i < nodeCount; i++){
            this.nodes.push(new LinkedList());
        }
    }
    addEdge(u,v){
        this.nodes[u].add(v);
        this.nodes[v].add(u);
    }

    print(){
        for(let i in this.nodes){
            process.stdout.write(i+" ");
            this.nodes[i].print();
            console.log();
        }
    }
}

export default AdjacencyList;