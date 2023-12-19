let peek = function(){
    return this[this.length-1];
}

class Stack extends Array{
    peek(){
        return this[this.length-1];
    }
    isEmpty(){
        return this.length == 0;
    }
} 

function ValidParenthesis(str){
    const stack = new Stack();
    const prth =  {"}":"{","]":"[",")":"(","}":"{"};

    for(s of str){
        if(prth[s]){
            if(!stack.isEmpty() && prth[s]==stack.peek()){
                stack.pop();
            }else{
                return false;
            }
        }else{
            stack.push(s);
        }
    }
    return stack.isEmpty();
}
const validStr = "{{([])}}";
const inValidStr = "{{)}}";
console.log(ValidParenthesis(validStr));