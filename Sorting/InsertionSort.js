class InsertionSort{
    sort(arr){
        for(let i = 1;i<arr.length;i++){
            let currentIndex = i;
            let prevIndex = i-1;
            while(arr[currentIndex]<arr[prevIndex] && prevIndex>=0){
                this.#swap(currentIndex,prevIndex,arr);
                currentIndex=prevIndex;
                prevIndex=prevIndex-1;
            }
        }
    }

    #swap(currentIndex,prevIndex,arr){
        const temp = arr[currentIndex];
        arr[currentIndex] = arr[prevIndex];
        arr[prevIndex] = temp;
    }

}


const insertionSort = new InsertionSort();
let arr = [5,4,3,2,1];
insertionSort.sort(arr);
console.log(arr);