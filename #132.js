process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
    
    inputString+=data;
    var [len,arr]=inputString.split('\n');
    arr=arr.split(' ');
       var obj={}
       for(let i=0;i<arr.length;i++)
         obj[arr[i]]=obj[arr[i]]?obj[arr[i]]+1:1;
    
    let key=Object.keys(obj);
    let val=Object.values(obj);
    let max=Math.max(...val);
    let res;
    for(let i=0;i<val.length;i++){
          if(max==obj[key[i]]){
              res=Object.keys(obj)[i];
          }
    }
    console.log(res);
    
  
    
});
