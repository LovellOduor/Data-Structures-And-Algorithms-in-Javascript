class SelectionSort{
    sort(arr){
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                let current = arr[i];
                if(arr[j]<current){
                    this.#swap(i,j,arr);
                }
            }
        }
    }
    #swap(i,j,arr){
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}


const selectionSort = new SelectionSort();
const arr = [5,3,4,1,2];
selectionSort.sort(arr);
console.log(arr);