process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('').filter(el=>el!=='\n');
     var sum=0;
     for(let i=0;i<inputString.length;i++)
    {
          sum+=Number(inputString[i]);
    }
	
     sum=String(sum);
	 
     let res=0,i=0;
     while(sum>=2 && i<sum.length)
     {
        
       res+=Number(sum[i]);
        i++;
       sum.length--;
     }
     let j=0;
     sum=0;
     res=String(res);
     while(res>=2 && j<res.length)
     {
        
       sum+=Number(res[j]);
       j++;
       res.length--;
     }
     console.log( sum);
  
});
