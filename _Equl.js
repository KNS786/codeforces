process.stdin.resume();
process.stdin.setEncoding('ascii')

var inputString="";
process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('\n');
	var arr=inputString[2].split(' ').map(el=>parseInt(el));
	
    var obj={};
    for(let i=0;i<arr.length;i++)
    {
         obj[arr[i]]=obj[arr[i]]?obj[arr[i]]+1:1;
         
    }
     var newArr=[];
     var diff=0;
     
     for(let i=0;i<arr.length-1;i++)
     {
         
          if(arr[i]!==arr[i+1])
          {
              diff=Math.abs(arr[i]-arr[i+1]);
              newArr.push(diff);
          }
        newArr[i]=-1;
     }
     console.log(newArr);
 
});
