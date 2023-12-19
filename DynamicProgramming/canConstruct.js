function canConstruct(target,wordbank){
    if(target.length === 0) return true;
    let result = false;
    for (let o of wordbank){
        if(target.indexOf(o)!=-1){
            target = target.slice(o.length);
            result = canConstruct(target,wordbank);
            if(result)return true;
        }
    }
    return false;
}

let wordbank = [ 'bad' , 'Goodb', 'oy', 'smart', 'boy', 'girl'];
let target = "Goodboy";
console.log(canConstruct(target,wordbank));