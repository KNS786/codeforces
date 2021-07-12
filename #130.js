"use strict";
process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
    inputString+=data;
    inputString=inputString.split('').filter(el=>el!=='\n');
  var str=inputString,
      res,
      substr;
      
     for(let i=1;i<=str.length-1;i++)
     {
        substr=str.slice(0,i+1).join('');
          res=[...substr].reverse().join('');
         if(res===substr)
           break
     }
 console.log(substr)
    
});

