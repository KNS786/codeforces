process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
    inputString=data;
    inputString=inputString;
    inputString=inputString.split('\n').join('');
  
    
      var arr=[];
      for(let i=0;i<inputString.length;i++)
      {
         if(!isNaN(Number(inputString[i])))
         {
            arr.push(inputString[i]);
            
         }
      }
      
      arr.sort((a,b)=>a-b);
      console.log(arr);
        var length=arr.length;
          if(arr.length%2==0)
          {
              console.log(Math.floor(arr.length/2));
          }
          else{
              console.log(Math.ceil(arr.length/2));
          }
        
})