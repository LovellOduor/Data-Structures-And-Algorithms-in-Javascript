class MaxPriorityQueue{
    heap = [-1];
    length = 0;
    insert(k){
        this.heap.push(k);
        this.length+=1;
        this.#swim(this.length);
    }
    #swap(x,y){
        const temp = this.heap[x];
        this.heap[x] = this.heap[y];
        this.heap[y] = temp;    
    }

    #sink(x){
        let childIndex = x*2;
        while(x<=this.length){
            childIndex = x*2;
            if(childIndex<this.length && this.heap[childIndex]<this.heap[childIndex+1]){
                childIndex++;
            }
            if(this.heap[childIndex]<this.heap[x]){
                break;
            }
            this.#swap(childIndex,x);
            x = childIndex;
       }
    }

    deleteMax(){
        this.#swap(1,this.length);
        let max = this.heap.pop();
        this.length-=1;
        this.#sink(1);
        return max;
    }

    #swim(index){
        let parentIndex = Math.trunc(index/2);
        while(index>1 && this.heap[parentIndex]<this.heap[index]){
            this.#swap(index,parentIndex);
            index = parentIndex;
            parentIndex = Math.trunc(index/2);
        }
    }
    isEmpty(){
        return this.length==0;
    }

    size(){
        return this.length;
    }
}

const maxPQ = new MaxPriorityQueue();
maxPQ.insert(1);
maxPQ.insert(2);
maxPQ.insert(3);

console.log(maxPQ.heap);
maxPQ.deleteMax();
console.log(maxPQ.heap);
