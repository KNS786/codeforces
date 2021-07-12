process.stdin.resume();
process.stdin.setEncoding('ascii')

var inputString="";
var currentline=0;

process.stdin.on('data',function(data){
   inputString+=data;
   inputString=inputString.split('').filter(el=>el!==' '&&el!=='\n').map(el=>parseInt(el));
   console.log(inputString);
     let j=0,res;
     while(j<inputString.length){
         let total=1;
         let i=parseInt(inputString[j]);
          for(;i>0;i--){
              total*=i;
          }
          inputString[j]=total;
  
          ++j;
          
     }
   res=Math.abs(inputString[0]/inputString[1]);
    console.log(res)
    
 
});
