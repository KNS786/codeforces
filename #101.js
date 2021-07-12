class Node{
    constructor(value)
    {
        this.value=value;
        this.next=null
      
    }
}
class LinkedList{
    constructor()
    {
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(value)
    {
        var newNode=new Node(value);
        if(!this.head)
        {
            this.head=newNode;
            this.tail=newNode;
            
            
        }
       else{
          this.tail.next=newNode;
          this.tail=newNode;
           
       }
      this.length++;
      return this;
    }
    reverse()
    {
      var node=this.head;
      this.head=this.tail;
      this.tail=node;
      var next;
       for(let i=0;i<this.length;i++)
       {
           next=node.next;
           node=next;
       }
       return this;
    }
}



process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString='';
var currentline=0;
process.stdin.on('data',function(data)
{
    inputString=data;
    inputString=inputString.split(' ').map(el=>parseInt(el));
    var LList=new LinkedList();
     for(let i=0;i<inputString.length;i++)
     {
         LList.push(inputString[i]);
     }
    console.log(LList.reverse());
  
});


