process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
	inputString+=data;
	 inputString=inputString.split('\n');
	let length=inputString.splice(0,1);
	inputString=inputString.filter(el=>el!=='').map(el=>parseInt(el));
	
	
	
    var obj={};
    for(let i=0;i<length;i++)
    {
      obj[inputString[i]]=obj[inputString[i]]?obj[inputString[i]]+1:1;
      
      
    }
    var newSet=[]
     for(let [key,value] of Object.entries(obj))
     {
         if(value>=2)
         {
             newSet.push(key);
         }
         
     }
    
     
    
   
     t=[]
   for(let i=0;i<newSet.length;i++)
   {
      t.push(inputString.indexOf(Number(newSet[i])));
   }

   
   let res=Math.min(...t);
  process.stdout.write(String(inputString[res]))
    
     
   
});
