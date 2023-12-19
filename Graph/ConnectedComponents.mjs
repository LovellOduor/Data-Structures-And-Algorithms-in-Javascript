import Stack from "../Stack/Stack.mjs";

const matrix = [[1,1,0,0],
                [1,0,0,0],
                [0,0,1,0],
                [0,0,0,1]];

const visited = [];
for(let i in matrix){
    visited.push([]);
    for(let j in matrix[i]){
        visited[i].push(false);
    }
}

// recursive dfs connected components

function recursiveConnected(x,y,visited,matrix){
    if( (y < 0) || (x < 0) || (y >= visited.length) || (x >= visited[0].length)){
        return;
    } 

    if(!visited[x][y] && matrix[x][y] == 1){
        visited[x][y] = true;
        recursiveConnected(parseInt(x-1),y,visited,matrix);
        recursiveConnected(parseInt(x+1),y,visited,matrix);
        recursiveConnected(x,parseInt(y+1),visited,matrix);
        recursiveConnected(x,parseInt(y-1),visited,matrix);
    }
}

function recursiveConnectedComponents(){
    let islands = 0;
    for(let row in matrix){
        for(let col in matrix[row]){
            if(!visited[row][col] && matrix[row][col]==1){
                islands+=1;
                recursiveConnected(row,col,visited,matrix);
            }
        }
    }
    return islands;
}

// console.log("No of islands are "+recursiveConnectedComponents());

function iterativeConnectedComponents(){
    let islands = 0;
    const stack = new Stack();
    for(let r in matrix){
        for(let c in matrix){
            if(matrix[r][c] == 1 && !visited[r][c]){
                islands+=1;
                visited[r][c] = true;
                stack.push({r:r,c:c});
                while(!stack.empty()){
                    let point = stack.pop();
                    let r = parseInt(point.r-1);
                    let c = point.c;
                    if(r>0 && matrix[r][c] == 1 && !visited[r][c]){
                        stack.push({r:r,c:c});
                        visited[r][c] = true;
                    }
                    r = parseInt(point.r+1);
                    c = point.c; 
                    if(r<matrix[0].length && matrix[r][c] == 1 && !visited[r][c]){
                        stack.push({r:r,c:c});
                        visited[r][c] = true;
                    }
                    r = point.r;
                    c = parseInt(point.c-1)
                    if(c>0 && matrix[r][c] == 1 && !visited[r][c]){
                        stack.push({r:r,c:c});
                        visited[r][c] = true;
                    }
                    r = point.r;
                    c = parseInt(point.c+1)
                    if(point.c+1<matrix.length && matrix[r][c] == 1 && !visited[r][c]){
                        stack.push({r:r,c:c});
                        visited[r][c] = true;
                    }
                }
            }
        }
    }
    return islands;
}

console.log("No of connected components "+iterativeConnectedComponents());