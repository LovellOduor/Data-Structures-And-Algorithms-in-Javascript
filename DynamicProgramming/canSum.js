const canSumRecursive = (target,numbers,memo={})=>{

    if(target in memo)return memo[target];
    if(target === 0) return true;
    if(target < 0) return false;

    for(let o of numbers){
        let result = canSumRecursive(target-o,numbers,memo); 
        memo[target] = result;
        if(result)return true;
    }
    
    memo[target] = false;
    
    return false;

}

const canSumTabulated = (target,numbers)=>{
    const table = new Array(target+1).fill(0);
    let i = 0;
    table[0] = 1;
    while(i<=target){
        if(table[i] == 1){
            for(let o of numbers){
                let next = i + o;
                    table[next] = 1;
            }
            if(table[target]==1)return true;
        }
        i++;
    }
    return false;
}

console.log(canSumTabulated(300,[]));
