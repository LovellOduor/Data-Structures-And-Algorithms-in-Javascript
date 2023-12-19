class Fibonacci{
    // In efficient fibonacci function 
    
    badFib(n){
        if(n<2)return n;
        let x = this.badFib(n-1);
        let y = this.badFib(n-2);
        return x + y;
    }
    // top down fibonacci

    // Bottom up approach (tabulation method of dynamic programming) Fibonacci function

    bottomUpFib(n){
        const arr = [];
        for(let i=0;i<n;i++){
            if(i<2){
                arr[i] = i;
            }else{
                arr[i] = arr[i-1]+arr[i-2];
            }
        }
        console.log(arr[n-1]);
    }

    // Top down approach (memorization method of dynamic programming) Fibonacci function

    topDownFib(n,memo){
        if(!memo[n]){    
            if(n<2){
                memo[n] = n;
            }else{
                const left = this.topDownFib(n-1,memo);
                const right = this.topDownFib(n-2,memo);
                memo[n]= left+right;
            }
        }   
        return memo[n];
    }

}
// 0 1 1 2 3 5 8 13  
// unoptmized fibonacci
const fib = new Fibonacci();
//fib.badFib(5);

// Bottom Up / tabulation method of dynamic programming fibonacci

//fib.bottomUpFib(5,arr);

console.log(fib.topDownFib(5,[]));

