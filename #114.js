process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
    inputString+=data;
    inputString=inputString.split(' ').filter(el=>el!=='');
       var obj={};
       for(let i=0;i<inputString.length;i++)
       {
        obj[inputString[i]]=obj[inputString[i]]?inputString[i].length:inputString[i].length;
       }
       console.log(obj);
       var t=Object.values(obj);
       let max=Math.max(...t);
       let min=Math.min(...t);
       var s=Object.keys(obj);
       
       console.log(t)
       console.log(s);
       
        s.sort((a,b)=>a.length-b.length);
        console.log(s)
        var ss=s[0];
        var bb=s[s.length-1];
        console.log(ss,bb);
        
       
     
});