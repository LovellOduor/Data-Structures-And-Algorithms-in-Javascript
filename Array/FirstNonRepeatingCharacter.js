const fnrc = (word)=>{
    const charMap = new Map();
    for(c of word ){
        (charMap.get(c)==undefined)?
            charMap.set(c,1):
            charMap.set(c,charMap.get(c)+1);
    }
    for(i in word){
        if(charMap.get(word[i])==1) return i;
    }
    return -1;
}

let word = "closetooclose";
let nrc = fnrc(word);
console.log(word[nrc]);