process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString ="";
process.stdin.on('data',function(data){
	inputString=Array.from(data);
   inputString=inputString.filter(el=>el!=='\n').map(el=>parseInt(el));
 // inputString.sort((a,b)=>a-b);
  
     var t=[],div,check;
     for(let i=0;i<inputString.length;i++)
     {
         check=inputString[i]%2==0?0:1;
        // console.log(check);
          div=check+Math.floor(inputString[i]/2);
         t.push(div);
          
     }
     count=0;var v=[],sum=0
     for(let i=0;i<t.length;i++)
     {
           count=t[i]%2===0?t[i]/2:t[i]/2;
           v.push(Number.isInteger(count)?count:++sum);
     }
    console.log(t)
    console.log(v);
   
    
});
