process.stdin.resume();
process.stdin.setEncoding('ascii');
var inputString="";



process.stdin.on('data',function(data){
    inputString+=data;
    var str=inputString.split('').filter(el=>el!='\n');
    var res=[];var dat=[];
      for(let i=1;i<=str.length;i++)
        {
            let j=str.slice(i,str.length);
             res[i-1]=str[i-1]
             let resss=reverse(j);
                dat.push(resss.length);
        }
        
        var emp;
        var ts=[];
        ts.push(...res);
        ts=ts.reverse()
         emp=(ts===res)?ts.length:0;
        
        dat.push(emp);
        emp=Math.max(...dat);
        console.log(emp);
 
});

function reverse(arr){
    var doublicate=[];
    var s=[];
    s.push(...arr);
    s=s.reverse();
     for(let i=0;i<arr.length;i++)
     {
         if(arr[i]==s[i]){
             doublicate.push(s[i]);
         }
       
     }
    return(doublicate);
    
}

