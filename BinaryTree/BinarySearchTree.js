class TreeNode{
    left = null;
    right = null;
    data = null;
    constructor(data){
        this.data = data;
    }
}

class BinarySearchTree{
    root = null;

    insertVal(value,node){
        if(node == null){
            node = new TreeNode(value);
            return node;
        }
        if(node.data > value){
            node.left = this.insertVal(value,node.left);
        }else{
            node.right = this.insertVal(value,node.right);
        }
        return node;
    }

    /* 
                  6 
              4      7
            3   5      8 
    */

    
    delete(value){
        this.root = this.deleteValue(this.root,value);
    }

    deleteValue(node, value){

        if(node == null){
            return null;
        }

        if(value > node.data){
            node.right = this.deleteValue(node.right,value);
        }else if(value < node.data){
            node.left = this.deleteValue(node.left,value);
        }else{
            if(node.left == null){
                return node.right;
            }

            if(node.right == null){
                return node.left;
            }

            let curr = node.right;
            while(curr.left){
                curr = curr.left;
            }
            node.data = curr.data;
            node.right = this.deleteValue(node.right,curr.data);
        }      

        return node;
    }

    insert(value,node=this.root){
        if(this.root == null){
            this.root = new TreeNode(value);
            return node;
        }
        if(this.root.data > value){
            this.root.left = this.insertVal(value,this.root.left);
        }else{
            this.root.right = this.insertVal(value,this.root.right);
        }
    }
 
    print(){
     const queue = [];
     queue.push(this.root);
     while(queue.length > 0){
         let current = queue.shift();
         console.log(current.data+" ");
         if(current.left){
             queue.push(current.left);
         }
         if(current.right){
             queue.push(current.right);
         }
     }
    }
 
 }

const bst = new BinarySearchTree();

bst.insert(5);
bst.insert(3);
bst.insert(6);
bst.insert(2);
bst.insert(4);
bst.insert(7);
bst.print();
console.log();
bst.delete(3);
bst.print();