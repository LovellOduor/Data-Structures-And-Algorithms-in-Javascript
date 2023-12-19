import AdjacencyList from "./AdjacencyList.mjs";
import Stack from "../Stack/Stack.mjs";

const adjList = new AdjacencyList(5);
adjList.addEdge(0,1);
adjList.addEdge(0,2);
adjList.addEdge(1,3);
adjList.addEdge(2,3);
adjList.addEdge(3,4);

const visited = [];

for(let i in adjList.nodes.length){
    visited.push(false);
}

function iterativeDepthFirstSearch(startNode){
    const stack = new Stack();

    visited[startNode] = true;
    stack.push(startNode);
    while(!stack.empty()){
        let node = stack.pop();
        console.log(node);
        const connections = adjList.nodes[node];
        let current = connections.root;

        while(current!=null){
            if(!visited[current.data]){
                visited[current.data] = true;
                stack.push(current.data);
            }
            current = current.next;
        }
    }
}


function recursiveDepthFirstSearch(adjList,node,visited){
    console.log(node);
    visited[node] = true;
    const connections = adjList.nodes[node];
    let current = connections.root;
    while(current != null){
        if(!visited[current.data]){
            recursiveDepthFirstSearch(adjList,current.data,visited);
        }
        current = current.next;
    }
}

recursiveDepthFirstSearch(adjList,0,visited);