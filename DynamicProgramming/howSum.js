const howSumRecursive = (target, numbers,memo={})=>{
    if(target in memo)return memo[target];
    if(target===0)return [];
    if(target<0) return null;
    for(let o of numbers){
        let result = howSumRecursive(target - o,numbers);
        memo[target] = result;
        if(Array.isArray(result)){
            result.push(o);
            return result;
        }
    }
    return null;
};

console.log(howSumRecursive(300,[8,15]));