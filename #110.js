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
		if(this.root===null){
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
			  }
			  else{
					  if(current.right===null){
						  current.right=newNode;
						  return this;
					  }
			        current=current.right;
			  }
		}
		
	}
   traversal(B,C){
      if(B>=C&&!B&&!C&&!this.root)return null;
         var arr=[];
          if((this.root.value<=B)&&(this.root.value>=C)){
              arr.push(this.root.value);
          }
         var current=this.root;
         	while(current.value<B&&current.value>=c){
			  if(current.value<=B){
				  if(current.left.value){
					  arr.push(current.left.value);
				  }
			    current=current.left;
			  }
			  else{
					  if(current.right.value){
						   arr.push(current.right.value);
					  }
			        current=current.right;
			  }
         }
         return arr.length;
   }
}
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  var inputString="";
  process.stdin.on('data',function(data){
    inputString+=data;
	inputString=inputString.split(' ').filter(el=>el!==''&&el!=='\n');
	var tree=new Tree();
      for(let i=0;i<inputString.length;i++){
          tree.insert(inputString[i]);
	  }
console.log(tree);
console.log(tree.traversal(x=readline(),y=readline()));	  
		
		
});
	