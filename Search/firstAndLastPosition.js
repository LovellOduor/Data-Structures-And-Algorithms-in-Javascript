function binarySearchEnd(arr,target){
    let index = -1;
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        mid = start + parseInt((end - start) / 2);
        if(arr[mid] == target && arr[mid]!= arr[mid+1]){
            return mid;
        }else if(arr[mid]>target){
            end = mid-1;
        }else{
            start = mid + 1;
        }
    }
    return index;
}

function binarySearchStart(arr,target){
    let index = -1;
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        mid = start + parseInt((end - start) / 2);
        if(arr[mid] == target && arr[mid]!= arr[mid-1]){
            return mid;
        }else if(arr[mid]>target || arr[mid] == arr[mid-1] ){
            end = mid-1;
        }else{
            start = mid + 1;
        }
    }
    return index;
}

function firstAndLast(arr,target){
    let first = binarySearchStart(arr,target);
    let last = binarySearchEnd(arr,target);
    console.log([first,last]);
}

firstAndLast([1,2,2,2,2,2,2,3,4,5,6,7,7,8,9,10],2);