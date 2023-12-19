

// Recursive Grid traveler
function gridTravelerRecursive(grid,memo = {}){
    let tag = `${grid[0]},${grid[1]}`;
    if(tag in memo) return memo[tag];
    if(grid[0]==0 || grid[1]== 0) return 0;
    if(grid[0]==1 && grid[0]== 1) return 1;
    memo[tag] = gridTravelerRecursive([grid[0]-1,grid[1]],memo) + gridTravelerRecursive([grid[0],grid[1]-1],memo);
    return memo[tag];
}

// Iterative Grid Traveler Tabulation

function gridTravelerTabulation(m, n) {
    // Create a 2D array to store tabulated results
    const memo = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
    // Base case: There is one way to travel to the starting point itself
    memo[1][1] = 1;
    // Iterate over the grid
    for (let i = 0; i <= m; i++) {
      for (let j = 0; j <= n; j++) {
        // Move right
        if (j + 1 <= n) {
          memo[i][j + 1] += memo[i][j];
        }
        // Move down
        if (i + 1 <= m) {
          memo[i + 1][j] += memo[i][j];
        }
      }
    }
  
    // The result is stored in the bottom-right cell of the memo table
    console.log(memo);
    return memo[m][n];
  }
  

console.log(gridTravelerIterative([18,18]));
  