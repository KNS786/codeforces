/*find smallest*/
process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
    inputString+=data;
     inputString=inputString.split('\n').filter(el=>el!=='').map(el=>parseInt(el));
     var check=inputString[0];
     var  digit=inputString[1];
    
        var collector=[];
        var find=0;
         for(let i=0;i<=check;i++)
         {
            collector.push(i);
         }
  
         var pom=[];
         for(let i=0;i<collector.length;i++)
         {
            
           var subArr=collector.slice(i);
           
           for(let j=1;j<subArr.length;j++)
           {
               let res=subArr[j]+""+subArr[0];
          
               pom.push(res);
               
            }

         }
         var ty=[];
         
         for(let i=0;i<pom.length;i++)
         {
             var [a,b]=pom[i];
             
             
               if(check==Number(a)+Number(b))
               {
                  ty.push(pom[i]);
                  
                  
              }
         }
         ty.sort((a,b)=>a-b);
         

 var sum=ty.length;
 var count=0;
   for(let i=0;i<=ty.length;i++)
   {  
       if(ty[i]%10==0)
       {
           count++;
       }else{
          ++sum;
       }
   }
  process.stdout.write(""+(sum-count)*digit);
   
 
});
	 