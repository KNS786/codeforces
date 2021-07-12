process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
inputString+=data;
inputString=inputString.split('\n');
   var length=(inputString[0]).split(' ').map(el=>parseInt(el))[1];
   var arr=inputString[1].split(' ').map(el=>parseInt(el));
   
   var arrSum=[];
   for(let i=0;i<arr.length-1;i++)
   {
       arrSum[i]=arr[i]+arr[i+1];
   }

   
  
    let count=0;
    for(let i=0;i<arrSum.length;i++)
    {
        if(arrSum[i]===length)++count;
        else --count;
    }
  process.stdout.write(count*-1);
  
   
});
