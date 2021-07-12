"use strict"
/*creating the Binary Search Tree*/
class Node {
	   constructor(value)
	   {
		   this.value=value;
		   this.left=null;
		   this.right=null;
	   }
}
class BinaySearchTree{
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
			if(current.value<value)
			{
				/*right side of the Node */
				if(this.right===null)
				{
					this.right=newNode;
				    return this;
				}
				current=current.right;
			}
			else{
				/*left side of the Node*/
				if(this.left===null)
				{
					this.left=newNode;
					return this;
				}
				current=current.left;
			}
		}
		return current;
	}
	/*Height Of the Tree Node*/
	TreeHeight()
	{
	 /*    1
	      /  \
		 2	  3
		/ \
	   -1  4    hight=2
       */
   	   this.insert()