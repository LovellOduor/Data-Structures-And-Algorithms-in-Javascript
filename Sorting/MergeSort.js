class MergeSort{
    
    merge(arr,start,mid,end){

        let arr1 = arr.slice(start,mid+1);
        let arr2 = arr.slice(mid+1,end+1);

        let l1 = 0;
        let l2 = 0;
        let k = start;

        while(l1 < arr1.length && l2 <arr2.length){
            if(arr1[l1]<=arr2[l2]){
                arr[k] = arr1[l1];
                l1++;
            }else{
                arr[k] = arr2[l2];
                l2++;
            }
            k++;
        }

        while(l1 < arr1.length){
            arr[k] = arr1[l1];
            k++;
            l1++;
        }

        while(l2 < arr2.length){
            arr[k] = arr2[l2];
            k++;
            l2++;
        }

        
    }

    sort(arr,start,end){
        if(start<end){
            let mid = start + parseInt((end-start)/2);
            this.sort(arr,start,mid);
            this.sort(arr,mid+1,end);
            this.merge(arr,start,mid,end);
        }
    }
   
}
const arr = [1,5,3,7,8,2,6,4];

const ms = new MergeSort();

ms.sort(arr,0,arr.length-1);
console.log(arr);