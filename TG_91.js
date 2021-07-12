process.stdin.resume();
process.stdin.setEncoding('ascii');


var inputString="";
process.stdin.on('data',function(data)
{
	inputString+=data;
    inputString=inputString.split('\n');
    var length=parseInt(inputString[0]);
    var arr=inputString[1].split(' ').map(el=>parseInt(el));
    arr.sort((a,b)=>a-b);
   console.log(arr);
   
    if(arr.length%2==0)
    {
       console.log(arr[Math.floor(arr.length/2)]);
    }else {
        console.log(arr[Math.floor(arr.length/2)]);
    }
    
    

});
