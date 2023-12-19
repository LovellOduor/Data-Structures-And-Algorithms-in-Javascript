class ListNode{    
    data = null;
    next = null;
    constructor(data){
        this.data = data;
    }   
}

class LinkedList{
    root = null;
    add(data){
        if(this.root == null){
            this.root = new ListNode(data);
            return;
        }
        let current = this.root;
        while(current.next != null){
            current = current.next;    
        }
        current.next = new ListNode(data);
    }
    print(){
        let current = this.root;
        while(current!=null){
            process.stdout.write(current.data+"-->");  
            current = current.next; 
        }
        process.stdout.write("null");
    }   
}

export default LinkedList;