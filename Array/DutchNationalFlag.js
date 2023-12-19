function swap(arr,indexA,indexB){
    let temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

const arr = [1,2,2,1,0,1,2,0,0,1,0,2,0];
let zeroPointer = 0;
let twoPointer = arr.length-1;
let i = 0;

while(i <= twoPointer){
    if(arr[i]==0){
        swap(arr,i,zeroPointer);
        zeroPointer++;
        i++;
    }else if(arr[i]==1){
        i++;
    }else if(arr[i]==2){
        swap(arr,i,twoPointer);
        twoPointer--;
    }
}

console.log(arr);