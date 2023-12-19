import AdjacencyList from "./AdjacencyList.mjs";
import Queue from "../Queue.mjs";

const adjList = new AdjacencyList(5);
adjList.addEdge(0,1);
adjList.addEdge(0,2);
adjList.addEdge(1,3);
adjList.addEdge(2,3);
adjList.addEdge(3,4);

const startNode = 0;
const queue = new Queue();
const visited = [];

for(let i in adjList.nodes.length){
    visited.push(false);
}
visited[startNode] = true;
queue.enque(startNode);

while(!queue.empty()){
    
    let node = queue.poll();
    console.log(node);
    const connections = adjList.nodes[node];
    let current = connections.root;

    while(current!=null){
        if(!visited[current.data]){
            visited[current.data] = true;
            queue.enque(current.data);
        }
        current = current.next;
    }

}