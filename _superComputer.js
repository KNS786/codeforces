/*process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLin =0;
process.stdin.on('data',function(data){
    var inputs=Array.from(data).filter(el=>isNaN(el));
    console.log(inputs);
    var cols=inputs.length/6;
    var rows=inputs.length/5;
    
 
    
   var computerGraph_=[];
   
   for(let i=0;i<rows-1;i++)
   {
       computerGraph_[i]=new Array(rows);
   }
   for(let i=0;i<cols;i++)
   {
       for(let  j=0;j<rows;j++)
       {
         computerGraph_[i][j]=0 ; 
       }
   }
   
   
   
   for(let i=0;i<cols;i++)
   {
       for(let j=0;j<rows;j++)
       {
           if(inputs[i][j]==='G')
           {
               computerGraph_[i][j]=inputs[i][j];
           }
       }
   }

     console.log(computerGraph_)

});*/















process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLin =0;
process.stdin.on('data',function(data){
    var inputs=Array.from(data).filter(el=>isNaN(el));
    console.log(inputs);
    var cols=inputs.length/6;
    var rows=inputs.length/5;
    
 class Movements{
     constructor(x,y,len)
     {
         this.x=a;
         this.y=y;
         this.length=len;
         
     }
     /*to get the Matrix in x and y valus in odd*/
     
     plus(vx,hx)
	 {
		this.vx=vx;
		this.hx=hx;
		this.total=this.vx+this.hx;
		return this.total;
		
	 }
	 
 }

    
    
});



