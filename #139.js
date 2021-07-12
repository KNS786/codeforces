process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentline=0;

process.stdin.on('data',function(data){
    var str=data.split('\n');
    var arr=str[0].split(' ');
    
    
    var s=new Set();
    var tree=new Tree();
     for(let i=0;i<arr.length;i++)
       if(Number(arr[i])>=0)
           s.add(arr[i]);
    
    s.forEach(function(el,indx,ar){
       tree.insert(el);
       
        
    });

   console.log(tree.Traversal().join(' '))
 
});

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
            if(current.value>value){
                if(current.left===null){
                    current.left=newNode;
                    return this;
                }
                current=current.left;
            }else{
                if(current.right===null){
                    current.right=newNode;
                    return this;
                }
                current=current.right;
            }
        }
        return current;
        
    }
    Traversal(){
        if(this.root===null)return undefined;
        var current=this.root;
        var newarr=[];
        
        while(current!==null){
            newarr.push(current.value);
             let left=current.left;
             let right=current.right;
               while(left!==null){
                   newarr.push(left.value);
                     if(left.left)left=left.left;
                     
                    if(left.right)left=left.right;
                     
                     if(!left.left && !left.right) left=null;
                     
               }
                 while(right!==null){
                   newarr.push(right.value);
                     if(right.left)right=right.left;
                     
                     if(right.right)right=right.right;
                     
                     if(!right.left && !right.right)right=null;
                     
               }
               if(!right&&!left)current=null;
        }
      return newarr;
        
    }
}