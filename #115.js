process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString=data;
	var [x,y]=inputString.split('\n');
     x=x.split(' ')[1];
     x=parseInt(x);
   var arr=y.split(' ');
   var obj={};
     for(let i=0;i<arr.length;i++)
     {
         if(parseInt(arr[i])<x){
             obj[arr[i]]=obj[arr[i]]?obj[arr[i]]+1:1;
         }
         
     }
     let res=Object.values(obj);
     console.log(res.length?res:-1);
  
});
