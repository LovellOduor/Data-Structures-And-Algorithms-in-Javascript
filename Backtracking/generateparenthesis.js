 function validParenthesis(result){
    const stack = [];
    for(let o of result){
        if(o=='('){
            stack.push(o)
        }else{
            const peek = stack[stack.length-1];
            if(peek=='('){
                stack.pop();
            }else{
                return false;
            }
        }
    }
    return stack.length == 0;
 }
 
 function generate(result,oc,cc,answer){
    if(oc == 0 && cc==0 && validParenthesis(result)){
        answer.push(result);
    }
    
    if(oc>0){
        let res1 = result;
        res1 +="(";
        generate(res1,oc-1,cc,answer);
    }

    if(cc>0 && cc > oc){
        let res2 = result;
        res2+= ")";
        generate(res2,oc,cc-1,answer);
    }
 }


function generateParenthesis(n){
    const answer = [];
    generate("(",n-1,n,answer);
    return answer;
}

console.log(answer);