class Stack{
    arr = [];
    push(x){
       this.arr.push(x);
    }
    pop(){
       return this.arr.pop();
    }

    isEmpty(){
        return this.arr.length == 0;
    }
    peek(){
        return this.arr[this.arr.length-1];
    }
}

class Queue{
   arr = [];
   offer(x){
       this.arr.push(x);
   }
   poll(){ 
       return this.arr.shift();
   }
}

class ListNode{
    data = null;
    constructor(data){
        this.data = data;
        this.next = null;
    } 
}

class LinkedList{
    head = new ListNode();
    length = 0;
    
    size = ()=> this.length;
    
    add(newNode){
        let current = head;
        while(current.next!= null){
            current = current.next;
        }
        current.next = newNode;
    }
}


export {Stack, Queue, LinkedList};

