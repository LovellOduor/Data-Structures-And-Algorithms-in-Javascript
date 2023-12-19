function MoveZerosStart(){
}
MoveZerosStart.prototype.sort = function(arr){
        let zeroPointer = 0;
        for(let i = 0; i<arr.length;i++){
            if(arr[i]==0){
                this.swap(i,zeroPointer,arr);
                zeroPointer++;
            }
        }
}

MoveZerosStart.prototype.swap = function (x,y,arr){
    const temp = arr[x];
    arr[x] = arr[y];
    arr[y] = temp;
}


const arr = [1,1,0,1,0,1,0,1,0,1,1,1,0];
const mvStart = new MoveZerosStart(arr);
mvStart.sort(arr);
console.log(arr);