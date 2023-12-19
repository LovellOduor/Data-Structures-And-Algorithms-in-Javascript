function permutation(numbers){
    if(numbers.length == 0) return [[]];
    let permutations = [];
    for(let num of numbers){
        let newNumbers = numbers.filter((val)=>val!=num);
        let result = permutation(newNumbers);
        permutations.push(...result.map((values =>[...values,num])));
    }
    return permutations;
}
console.log(permutation([1,2,3]));