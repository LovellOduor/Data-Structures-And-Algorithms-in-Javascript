function reverse(arr,start,end){
    while(start<end){
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

function rotateArray(arr,count){
    reverse(arr,0,arr.length-1);
    reverse(arr,0,count-1);
    reverse(arr,count,arr.length-1);
    console.log(arr);
}

rotateArray([1,2,3,4,5,6,7,8],3);