class AdjList extends Map { 
   constructor(){
    super();
   }

   addUndirected(a,b){
        if(!this.has(a)){
            this.set(a,{neighbors:[],visited:false});
        } 
        if(!this.has(b)){
            this.set(b,{neighbors:[],visited:false});
        }
        this.get(a).neighbors.push(b);
        this.get(b).neighbors.push(a);
   }

   addDirected(a,b){
        if(!this.has(a))this.set(a,{neighbors:[],visited:false});
        this.get(a).neighbors.push(b);
   }

   print(){
    console.log(this);
   }

}

const adj = new AdjList();
adj.addDirected('a','b');
adj.addDirected('a','c');
adj.addDirected('b','d');
adj.addDirected('c','e');
adj.addDirected('d','f');

function dfsIterative(graph,start){
    const stack = [];
    stack.push(start);
    while(stack.length>0){
        let current = stack.pop();
        graph[current].visited = true;
        console.log(current);
        for(let o of graph[current].neighbors){
            if(graph[o].visited == false){
               stack.push(o);
            }
        }
    }
}

// dfsIterative(adj,"a");

function dfsRecursive(graph,start){
    if(graph[start].visited == false){
        graph[start].visited = true;
        console.log(start);
        for(let o of graph[start].neighbors){
            dfsRecursive(graph,o);
        }
    }
}

// dfsRecursive(adj,"a");

// Connected components count

const nodes = [5,1,0,8,4,2,3];
const grph = new AdjList();
grph.addUndirected(5,0);
grph.addUndirected(5,8);
grph.addUndirected(8,0);
grph.addUndirected(1,0);
grph.addUndirected(4,2);
grph.addUndirected(2,3);
grph.addUndirected(4,3);

let maxNodeCount = 0;

function nodeMaxCount(graph,nodes){
    for(let num of nodes){
        let nodeCount = 0;
        if(graph.get(num).visited==false){
            const stack = [];
            stack.push(num);
            while(stack.length > 0){
                let current = stack.pop();  
                graph.get(current).visited = true;
                nodeCount += 1;
                for(let n of graph.get(current).neighbors){
                    if(graph.get(n).visited==false){
                        graph.get(n).visited=true;
                        stack.push(n);
                    }
                }
            }
        }
        if(nodeCount > maxNodeCount){
            maxNodeCount = nodeCount;
        }
    }
    return maxNodeCount;
}


// console.log(nodeMaxCount(grph,nodes));

// Recursive connected components count

function recursiveNodeCount(start,graph,nodeCount){
    const current = graph.get(start);
    if(current.visited == false){
        current.visited = true;
        nodeCount += 1;
        for(let o of current.neighbors){
            nodeCount = recursiveNodeCount(o,graph,nodeCount);
        }
    }
    return nodeCount;
}

function nodeMaxCountRecursive(graph,nodes){
    for(let num of nodes){
        let nodeCount = 0;
        maxNodeCount = Math.max(maxNodeCount,recursiveNodeCount(num,graph,nodeCount));
    }
    return maxNodeCount;
}

// console.log(nodeMaxCountRecursive(grph,nodes));

// Shortest path
// with bfs
const shortGraph = new AdjList();
shortGraph.addUndirected('w','x');
shortGraph.addUndirected('w','v');
shortGraph.addUndirected('x','y');
shortGraph.addUndirected('y','z');
shortGraph.addUndirected('v','z');

function shortestPath(graph,startNode,endNode){
    const queue = [];
    graph.get(startNode).visited = true; 
    queue.push([startNode,0]);
    while(queue.length > 0){
        const [current,count] = queue.shift();
        if(current == endNode) return count;
        for(let neighbor of graph.get(current).neighbors){
            graph.get(neighbor).visited = true;
            queue.push([neighbor,count+1]);
        }

    }
    return -1;
}

//console.log(shortestPath(shortGraph,'w','z'));

// Island Count
const island = 
[
    ['W','L','W','W','W'],
    ['W','L','W','W','W'],
    ['W','W','W','L','W'],
    ['W','W','L','L','W'],
    ['L','W','W','L','L'],
    ['L','L','W','W','W']
];

const coordVisited = new Set();

function islandCount(island,coordVisited){
    let noOfIslands = 0;
    let size = 0;
    let minSize = Number.MAX_SAFE_INTEGER;
    for(let i = 0; i < island.length; i ++){
        for(let j = 0; j < island[0].length; j++){
            let coord = `${i},${j}`;
            if(island[i][j]=="L" && !coordVisited.has(coord)){
                noOfIslands += 1;
                size = 1;
                let stack = [];
                coordVisited.add(coord);
                stack.push([i,j]);
                
                while(stack.length > 0){
                    let current = stack.pop();
                    if(current[0]>0){
                        let topCoord = [current[0]-1,current[1]];
                        coord = `${topCoord[0]},${topCoord[1]}`;
                        if(island[topCoord[0]][topCoord[1]]=='L' && !coordVisited.has(coord)){
                            coordVisited.add(coord);
                            size += 1;
                            stack.push(topCoord);
                        }
                    }
                    if(current[0]<island.length-1){
                        let bottomCoord = [current[0]+1,current[1]];
                        coord = `${bottomCoord[0]},${bottomCoord[1]}`;
                        if(island[bottomCoord[0]][bottomCoord[1]]=='L' && !coordVisited.has(coord)){
                            coordVisited.add(coord);
                            size += 1;
                            stack.push(bottomCoord);
                        }
                    }
                    if(current[1]>0){
                        let leftCoord = [current[0],current[1]-1];
                        coord = `${leftCoord[0]},${leftCoord[1]}`;
                        if(island[leftCoord[0]][leftCoord[1]]=='L' && !coordVisited.has(coord)){
                            coordVisited.add(coord);
                            size += 1;
                            stack.push(leftCoord);
                        }
                    }
                    if(current[1]<island[0].length-1){
                        let rightCoord = [current[0],current[1]+1];
                        coord = `${rightCoord[0]},${rightCoord[1]}`;
                        if(island[rightCoord[0]][rightCoord[1]]=='L' && !coordVisited.has(coord)){
                            coordVisited.add(coord);
                            size += 1;
                            stack.push(rightCoord);
                        }
                    }
                }
                minSize = Math.min(size,minSize);
            }
        }
    }
    console.log(coordVisited);
    return minSize;
}

console.log(islandCount(island,coordVisited));
