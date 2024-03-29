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

    printLevelByLevel(root,level,result){
        if(level > result.length){
            result.push([]);
        }
        if(root){
            result[level-1].push(root.data);
        }else{
            result[level-1].push(null);
            return result;
        }
        this.printLevelByLevel(root.left,level+1,result);
        this.printLevelByLevel(root.right,level+1,result);
        return result;
    }

    isValid(root,min,max){
        if(!root)return true;

        if(root.data < min || root.data > max) return false;
        
        if(!root.left){
        }else if(root.data < root.left.data){
            return false;
        }

        if(!root.right){
        }else if(root.data > root.right.data){
            return false;
        } 
        
        const leftValid = this.isValid(root.left,min,root.data);
        const rightValid = this.isValid(root.right,root.data,max);

        return (leftValid && rightValid);
    }


}

const bt = new BinaryTree();
bt.root = new TreeNode(10);
bt.root.left = new TreeNode(5);
bt.root.left.left = new TreeNode(4);
bt.root.left.right = new TreeNode(6);
bt.root.right = new TreeNode(12);
bt.root.right.left = new TreeNode(11);
bt.root.right.right = new TreeNode(13);

const result = bt.isValid(bt.root,Number.MIN_SAFE_INTEGER,Number.MAX_SAFE_INTEGER);

console.log(result);