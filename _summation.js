process.stdin.resume();
process.stdin.setEncoding("ascii");

var inputString="";
process.stdin.on('data',(data )=>{
    inputString+=data;
    inputString=Array.from(inputString).
              filter(el=>el!=='\n');
    
    let array=inputString.map(el=>Number(el));

   let first=array[0];
   let sum=0;
      
   for(let i=1;i<=array.length-i;i++)
   {
       sum+=array[i-1]+array[array.length-i];
       array[i-1]=0;
       array[array.length-i]=0;
   }
   console.log(array);
   console.log(sum);

});
