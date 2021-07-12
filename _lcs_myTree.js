/*creating the Node valies*/
  class Node{
      constructor(value)
      {
         this.value =value;
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
        if(this.root===null)
        {
            this.root=newNode;
            return this;
        }
        var current=this.root;
        if(current.value===value)return undefined;
        while(true)
        {
            if(current.value>value)
            {
                if(current.left===null)
                {
                    current.left=newNode;
                    return this;
                }
                current=current.left;
            }
            else{
                if(current.right===null)
                {
                    current.right=newNode;
                    return this;
                    
                }
                current=current.right;
            }
        
        }
        return current;
        
    }
    search(v1,v2)
    {
        var found=false;
          if(v1===v2)return false;
          var current=this.root;
          var visted=[];
          var root=[];
        
        while(!found && current.value!==null)
        {
            if(!found && v1<current.value){
                visted.push(current.value);
                if(v1===current.value)
                  {
                      root.push(visted.unshift());
                      found=true;
                      
                  }
                  current=current.left;
                  
            }else{
                visted.push(current.value);
                if(v1===current.value)
                {
                    root.push(visted.unshift())
                    found=true;
                }
                current=current.right;
            }
            
               
        }
 
          found=false;
          current=this.root;
        while(!found && current.value!==null){  
          if(!found && v2<current.value)
            {
                visted.push(current.value);
                if(v2===current.value)
                {
                    root.push(visted.unshift());
                    found=true;
                }
                current=current.left;
                
            }else{
                visted.push(current.value)
                if(v2===current.value){
                    root.push(visted.unshift());found=true;
                }
                current=current.right;
            }
        }
        
        
    console.log(root);
    console.log(visted);
        
    }
}


process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('\n');
	let length=inputString[0]
	let arr=inputString[1].split(' ').map(el=>parseInt(el));
	let t=inputString[2].split(' ').map(el=>parseInt(el));
	let [v1,v2]=t;
	var tree=new BinarySearchTree();
   for(let i=0;i<arr.length;i++)
   {
       tree.insert(arr[i]);
   }
      tree.search(v1,v2);
    console.log(tree);
    
   
     
})
