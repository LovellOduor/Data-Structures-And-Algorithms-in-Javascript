class BubbleSort{
    
    sort(arr){
        let n = arr.length-1;
        let swapped = false;
        for(let x=0;x<n;x++){
            for(let i=0;i<n-x;i++){
                if(arr[i]>arr[i+1]){
                    this.#swap(i,i+1,arr);
                    swapped = true;
                }
            }
            if(swapped==false){
                return;
            }else{
                swapped=false;
            }
        }
        
    }

    #swap(x,y,arr){
        let temp = arr[x];
        arr[x] = arr[y];
        arr[y] = temp;
    }

}

const bubbleSort = new BubbleSort();
const arr = [2,1,5,4,3];
bubbleSort.sort(arr);
console.log(arr);