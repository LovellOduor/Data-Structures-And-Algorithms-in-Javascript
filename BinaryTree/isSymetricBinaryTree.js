class TreeNode{
    right = null;
    left = null;
    value = null;
    constructor(value){
        this.value = value;
    }
}

class BinaryTree{
   root = null; 
   constructor(value){
    this.root = new TreeNode(value);
   }

   print(){
    const queue = [];
    queue.push(this.root);
    while(queue.length > 0){
        let current = queue.shift();
        console.log(current.value+" ");
        if(current.left){
            queue.push(current.left);
        }
        if(current.right){
            queue.push(current.right);
        }
    }
   }

   isSymetric(){
    const queue = [];
    queue.push(this.root.left);
    queue.push(this.root.right);
    while(queue.length > 0){
        const left = queue.shift();
        const right = queue.shift();

        if(left == null && right == null) continue;
        if(left == null || right == null || right.value != left.value) return false;
        
        queue.push(left.left);
        queue.push(right.right);
        queue.push(left.right);
        queue.push(right.left);
    }
    return true;
   }
}


const tree = new BinaryTree(1);
tree.root.left = new TreeNode(2);
tree.root.right = new TreeNode(2);
tree.root.left.left = new TreeNode(3);
tree.root.right.right = new TreeNode(3);
tree.root.right.left = new TreeNode(4);
tree.root.left.right = new TreeNode(4);

console.log(tree.isSymetric());










