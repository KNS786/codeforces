class Node{
    constructor(value){
        this.value=value;
        this.left=null;
        this.right=null;
        
    }
}
class Tree{
    constructor(){
        this.root=null;
    }
    insert(value){
        var newNode=new Node(value);
        if(!this.root){
            this.root=newNode;
            return this;
        }
        var current=this.root;
        while(true){
            if(current.value<value){
                if(!current.right){
                    current.right=newNode;
                    return this;
                }
                current=current.right;
                
            }
            else{
                if(!current.left){
                    current.left=newNode;
                     return this;
                }
                current=current.left;
                
            }
        }
        return current;
    }
    postOrder(){
        var roots=this.root;
           (function checked(root){
               if(root){
                   checked(root.left);
                   checked(root.right);
                   console.log(root.value);
                   
               }
           })(this.root);
    }
    preOrder(){
        var roots=this.root;
         (function checked(root){
             if(root){
                 console.log(root.value);
                 checked(root.left);
                 checked(root.right);
                 
             }
             
         })(this.root);
         
    }
    inOrder(){
        (function checked(root){
              if(root.left!==null){
                  checked(root.left);
              }
              console.log(root.value);
              if(root.right!==null){
                  checked(root.right);
                  
              }
              
              
            
        })(this.root);
        
    }
    
}
var t=new Tree();
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(3);
t.insert(6);
t.insert(4);
t.inOrder();
console.log("\n");
t.preOrder();
console.log("\n");
t.postOrder();