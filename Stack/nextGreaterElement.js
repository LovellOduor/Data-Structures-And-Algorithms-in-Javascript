function nextGreaterElement(arr){
    const result = [];
    const stack = [];
    for(let i = arr.length-1; i >=0; i--){
        
        while(arr[i]>stack[stack.length-1] && stack.length>0){
            stack.pop();
        }
        
        if(stack.length==0){
            result[i] = -1;
        }else{
            result[i] = stack[stack.length-1];
        }

        stack.push(arr[i]);
    }
    console.log(result);
}

nextGreaterElement([1,7,5,3,2,6,8,1,4,2]);