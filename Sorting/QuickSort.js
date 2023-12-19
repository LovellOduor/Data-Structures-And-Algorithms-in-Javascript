class QuickSort{
    
    #swap(i,j,arr){
        const temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    #partition(low,high,arr){
        let pivot = arr[high];
        let i = low;
        let j = low;
        while(i<=high){
            if(pivot>=arr[i]){
                this.#swap(i,j,arr);
                j++;
            }
            i++;
        }
        return j-1;
    }
    
    sort(low,high,arr){
        if(low<high){
            const pivot = this.#partition(low,high,arr);
            this.sort(low,pivot-1,arr);
            this.sort(pivot+1,high,arr);
        }
    }

}

const qSort = new QuickSort();
const arr = [6,5,3,2,4,1];
qSort.sort(0,arr.length-1,arr);
console.log(arr);