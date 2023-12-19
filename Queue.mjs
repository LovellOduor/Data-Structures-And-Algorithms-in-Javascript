class Queue extends Array{
    enque(x){
        this.push(x);
    }
    poll(){
        return this.shift();
    }
    empty(){
        return this.length == 0;
    }
}

export default Queue;