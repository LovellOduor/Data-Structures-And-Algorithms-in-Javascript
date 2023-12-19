function allConstruct(word,wordbank){
    
    if (word.length == 0){
        return [[]];
    }

    let result = [];

    for(let w of wordbank){
        let start = word.indexOf(w);
        if(start === 0){
            let rem = word.slice(w.length);
            let ways = howConstruct(rem,wordbank);
            result.push(...ways.map((arr=> [...arr,w] )));
        }
    }

    return result;
}

let wordbank = [ 'Good', 'Goodb', 'oy', 'smart', 'boy', 'girl'];
let word = "Goodboy"; 
let res = allConstruct(word,wordbank,[],[]);
console.log(res);