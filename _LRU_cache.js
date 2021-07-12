class Node{
	 constructor(keym,value,next=null,prev=null){
		 this.key=key;
		 this.value=value;
		 this.next =next;
		 this.prev=prev;
	 }
}
class Lru{
	constructor(limit=10){
	   this.size=0;
	   this.limit=limit;
	   this.head=null;
	   this.tail=null;
	   this.cache={};
	}
write(key,value){
	this.ensureLimit();
	if(!this.head){
		this.head=this.tail=new Node(key,value);
	}
	else{
		const node=new Node(key,value,this.head);
		