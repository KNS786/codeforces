class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }return current;
    }
    find(value)
    {
      if(this.root===null)return null;
      var current=this.root,
         found=false;
         while(current && !found)
         {
           if(value<current.value){
             current=current.left;
           }else if(value>current.value){
             current=current.right;
           }
           else {found=true}
         }
          if(!found)return undefined;
          return current.value;

    }

}

var c=new BinarySearchTree();
c.insert(10);
c.insert(20);
c.insert(30);
c.insert(40);
c.find(30);

