class OneDimensionalArray{
    // print values of an array
    print(arr){
        console.log(arr.toString());
    }
    swap(arr,indexA,indexB){
        let temp = arr[indexA];
        arr[indexA] = arr[indexB];
        arr[indexB] = temp;
    }
    // remove even integers
    removeEven(arr){
        const evenArray = [];
        for(let a of arr){
            if(a%2!=0){
                evenArray.push(a);
            }
        }
        return evenArray;
    }
    // reverse array
    reverseArray(arr){
        let start = 0;
        let end = arr.length-1;
        while(start<end){
            this.swap(arr,start,end);
            start++;
            end--;
        }
        return arr;
    }
    // minimum value in the array
    findMin(arr){
        let minVal = arr[0];
        for(let i = 0; i < arr.length; i++){
            if(arr[i]<minVal){
                minVal = arr[i];
            }
        }
        return minVal;
    }
    // find the second maximum value in the array
    findSecondMax(arr){
        let [maxVal, secondMaxVal] = [Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER];
        for(let i of arr){
            if(i>maxVal){
                secondMaxVal = maxVal;
                maxVal = i;
            }else if(i > secondMaxVal && i != maxVal){
                secondMaxVal = i;
            }
        }
        return secondMaxVal;
    }
    
    // move zeros to the start of an array
    moveZeroesToStart(arr){
        let [startPointer,endPointer] = [0,arr.length-1];
        while(startPointer < endPointer){
            if(arr[endPointer]== 0){
                this.swap(arr,startPointer,endPointer);
                startPointer++;
            }else{
                endPointer--;
            }
        }
        return arr;
    }
    // move zeros to the end of an array
    moveZeroesToEnd(arr){
        let [startPointer,endPointer] = [0,arr.length-1];
        while(startPointer < endPointer){
            if(arr[startPointer]== 0){
                this.swap(arr,startPointer,endPointer);
                endPointer--;
            }else{
                startPointer++;
            }
        }
        return arr;
    }

    findMissingNumber(arr){
        let n = arr.length+1;
        let sum = n*(n+1)/2;
        for(let s of arr) sum-=s;
        return sum;
    }

    isPalindorme(arr){
        let start = 0;
        let end = arr.length-1;
        while(start<end){
            if(arr[start]!=arr[end]){
                return false;
            }
            start++;
            end--;
        }
        return true;
    }



}

const arr = [1,2,4,5,6,7,8];
const oneD = new OneDimensionalArray();
console.log(oneD.isPalindorme("momy"));