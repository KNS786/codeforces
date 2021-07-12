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
    push(value){
        var newNode=new Node(value);
          if(this.root===null){
              this.root=newNode
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
          this.root=current;
	return current;
         
    }
    PrefixNode(){
	     var currentRoot=this.root;
	     
	    var stack=[];
	     var  res=currentRoot.value;
	     
	   while(currentRoot.right!==null){
	       stack.push(currentRoot.right.value);
	       currentRoot=currentRoot.right;
	       
	   }
	  if(stack.length>1)
	   {
	        if(stack[0]>res)
	           console.log(res);
	         else
	            console.log(stack[0]);
	   }
	  else  console.log(res);
	    
	 
	}

}

process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
    inputString+=data;
})
process.stdin.on('end',function(){
    inputString=inputString.split('\n');
    main();      
});

function readline(){
    return inputString[currentLine++];
}
function main(){
    var t=parseInt(readline());
      while(t--){
          var n=readline();
          var arr=readline().split(' ');
            var tr=new Tree();
            for(let i=0;i<arr.length-1;i++)
              tr.push(parseInt(arr[i]));
      tr.PrefixNode();
        
     
      }
      
    
}
