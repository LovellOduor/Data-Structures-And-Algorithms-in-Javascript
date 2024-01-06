/**
Given an integer n representing the number of courses (courses are labeled from 0 to n - 1), and an array 
prerequisites where prerequisites[i] = [a,b] means that you first need to take the course b before taking
the course a, determine if its possible to finish all the courses 
*/
/*
        0 -> 1 ->5
        | \      ^
        v  \     |
        2 ->3->  4
*/
// Prerequisite array
 const prerequisites = [[0,1],[1,5],[0,2],[2,3],[3,4],[4,5]];
// const prerequisites = [[1,0]];
const numCourses = 2;
const graph = [];
for (let o of prerequisites) {
    if (!graph[o[1]]) {
        graph[o[1]] = [];
    }
    graph[o[1]].push(o[0]);
}


console.log(graph);
const visited = new Set();
const stack = [];

function dfs(node, graph, visited, stack) {
    if (isNaN(node)) return true;
    if (stack.includes(node)) return false;
    stack.push(node);
    visited.add(node);

    let retval = true;
    if (graph[node]) {
        for (let o of (graph[node])) {
            retval = dfs(o, graph, visited, stack);
            if (!retval) return false;
        }
    }
    stack.pop();
    return true;
}

let retval = true;
for (let i = 0; i < numCourses; i++) {
    if (!visited.has(i)) {
        retval = dfs(i, graph, visited, stack);
        if (!retval) break;
    }
}


console.log(retval);