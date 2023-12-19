import {Stack, LinkedList, Queue } from "../utils.mjs";

class TreeNode{
    left = null;
    right = null;
    data = null;
    constructor(data){
        this.data = data;
    }
}

class BinaryTree{
    root = new TreeNode();
    // Iterative pre-order
    iterativePreOrder(){
        const stk  = new Stack();
        stk.push(this.root);
        while(!stk.isEmpty()){
            let temp = stk.pop();
            console.log(temp.data);
            if(temp.right!=null) stk.push(temp.right);
            if(temp.left!=null) stk.push(temp.left); 
        }
    }

    iterativeInOrder(){
        const stk = new Stack();
        let current = this.root;
        while(!stk.isEmpty() || current != null){
            if(current!=null){
                stk.push(current);
                current = current.left;
            }else{
                current = stk.pop();
                console.log(current.data);
                current = current.right;
            }       
        }
    }

    iterativePostOrder(){
        const stk = new Stack();
        let current = this.root;
        while(current!=null || !stk.isEmpty()){
            if(current!=null){
                stk.push(current);
                current = current.left;
            }else{
                let temp = stk.peek().right;
                if(temp == null){
                    temp = stk.pop();
                    console.log(temp.data);
                    while(!stk.isEmpty() && temp == stk.peek().right){
                       temp = stk.pop();
                       console.log(temp.data); 
                    }
                }else{
                    current = temp;
                }
            }
        }
    }
}

const bt = new BinaryTree();
bt.root = new TreeNode(1);
bt.root.left = new TreeNode(2);
bt.root.left.left = new TreeNode(4);
bt.root.left.right = new TreeNode(5);
bt.root.right = new TreeNode(3);

bt.iterativePostOrder();