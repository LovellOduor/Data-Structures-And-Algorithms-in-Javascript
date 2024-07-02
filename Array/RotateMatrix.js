function rotate(matrix) {

    if (matrix.length == 0 || matrix.length != matrix[0].length) return false;

    let n = matrix.length;

    for (let layer = 0; layer < n / 2; layer++) {

        let last = n - 1 - layer;

        for (let i = layer; i < last; i++) {

            let offset = i - layer;

            let top = matrix[layer][i]; // save top 

            // bottom-left to top-left 
            matrix[layer][i] = matrix[last - offset][layer];

            // bottom-right -> bottom-left 
            matrix[last - offset][layer] = matrix[last][last - offset];

            // top-right ~> bottom-right
            matrix[last][last - offset] = matrix[i][last];

            // top-right -> top-left
            matrix[i][last] = top;
        }
    }
/*
    1  2  3        
    4  5  6      
    7  8  9       

    7  4  1    
    8  5  2      
    9  6  3
*/
    console.log(matrix[0]);
    console.log(matrix[1]);
    console.log(matrix[2]);

}


const m = [[1,2,3],[4,5,6],[7,8,9]];
rotate(m);


/*

   1  2  3    1 4 7   7 4 1
   4  5  6    2 5 8   8 5 2 
   7  8  9    3 6 9   9 6 3 

        0,0     0,0
        0,1     1,0
        0,2     2,0
        1,0     0,1
        1,1     1,1
        1,2     2,1
        2,0     0,2
        2,1     1,2
        2,2     2,2
        
*/