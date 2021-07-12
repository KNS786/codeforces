class Node{
    constructor(value)
    {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor()
    {
        this.root=null;
    }
    insert(value)
    {
        var newNode=new Node(value);
        if(!this.root)
        {
            this.root=newNode;
            return this;
            
        }
        var current=this.root;
        while(true)
        {
            if(current.value>value)
            {
                if(!current.left)
                {
                    current.left=newNode;
                    return this;
                }
                current=current.left;
            }
            else{
               if(!current.right)
               {
                   current.right=newNode;
                   return this;
               }
               current=current.right;
            }
        }
        return current;
    }
  
}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
    inputString+=data
    inputString=inputString.split('').filter(el=>el!=='\n'&&el!==' ');
    console.log(inputString);
    var tree=new BinarySearchTree();
    for(let i=0;i<inputString.length;i++)
      {
        tree.insert(inputString[i]);
        
      }
     console.log(tree);
     
});
