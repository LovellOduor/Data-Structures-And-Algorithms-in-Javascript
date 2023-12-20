class PriorityQueue{
    heap = [-1];
    length = 0;

    getKthMax(k){
        return this.heap[k];
    }

    insert(value){
       this.heap.push(value);
       this.length +=1;
       this.swim(this.length);
    }

    deleteMax(){
        this.swap(1,this.length);
        const max = this.heap.pop();
        this.sink(1);
        this.length -=1;
        return max;
    }

    swap(i,j){
        const temp = this.heap[j];
        this.heap[j] = this.heap[i];
        this.heap[i] = temp;
    }

    swim(index){
        let parentIndex =  Math.trunc(index/2); 
        while(index>1&& this.heap[parentIndex] < this.heap[index]){
            this.swap(index,parentIndex);
            index = parentIndex;
            parentIndex = Math.trunc(index/2);
        }
    }

    sink(index){
        while(index<=this.length){
            let childIndex = index*2;
            if(this.heap[childIndex] < this.heap[childIndex+1]){
                childIndex++;
            }
            if(this.heap[index] < this.heap[childIndex]){
                this.swap(index,childIndex);
                index = childIndex;
            }else{
                break;
            }
        }
    }
}

const pq = new PriorityQueue();
pq.insert(1);
pq.insert(2);
pq.insert(3);
pq.insert(4);
pq.insert(5);
pq.insert(6);
pq.insert(7);

let max = pq.getKthMax(2);
console.log(pq.heap);