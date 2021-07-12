process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
    inputString+=data;
    inputString=inputString.split('\n');
    var length=parseInt(inputString[0]);
    var arr=inputString[1].split(' ').map(el=>parseInt(el));
     var res=[];
    var good=0;
      for(let i=0;i<length;i++)
      {
          good+=arr[i];
      }
     if(good===0)
     {
        
      for(let i=1;i<length;i++)
       {
         let subs=arr.slice(i-1,i+1);
         res.push(subs);
        }
       for(let j=0;j<arr.length;j++)
        {
           data=Array.of(arr[j]);
           res.push(data);
        
     }
    process.stdout.write(''+res.length);
   }
   else{
       process.stdout.write(''+length);
       
     }
   
});