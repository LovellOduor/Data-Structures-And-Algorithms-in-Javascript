function validAnagram(str1,str2){
    let obj1 = new Set();
    for(let o of str1){
     obj1.add(o);
    }
    for(let o of str2){
        if(obj1.has(o)){
          obj1.delete(o);
        }
    }
    return obj1.size == 0;
}

console.log(validAnagram("moon","noob"));