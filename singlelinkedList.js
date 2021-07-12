class Node{
	constructor(value)
	{
		this.value=value;
		this.next=null;
	}
}
class LinkedList{
	constructor()
	{
		this.head =newNode;
		this.tail=newNode;
		this.length=0;
	}
	push(value)
	{
		var newNode=new Node(value);
	    if(!this.head)
		{
			this.head=newNode;
			this.tail=this.head;
		}
	    else{
		    this.tail.next=newNode;
			this.tail=newNode;
		}
	this.length++;
	return this;
	}
	
	/*pop Linked list elements*/
	pop()
	{
		if(this.head===null)return undefined;
		var current=this.head;
		var newTail=current;
		while(current.next)
		{
			newTail=current;
			current=current.next;
		}
		this.tail=newTail;
		this.tail.next=null;
		this.length--;
		if(this.length===0)
		{
			this.head=null;
			this.tail=null;
		}
		return current;
	}
	
		
}
