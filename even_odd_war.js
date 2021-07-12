process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString=data;
	inputString=inputString.split('\n');
	var arr=inputString[1].split(' ').map(el=>parseInt(el));
	
	var even=0,odd=0;
	for(let i=0;i<arr.length;i++)
	{
	    if(arr[i]%2==0)
	    {
	        even+=arr[i];
	    }
	    else{
	        odd+=arr[i];
	    }
	    
	}
	
	var res;
     if(even>odd)
     {
         res="Even";
     }
     else if(even<odd)
     {
         res="Odd";
     }
     else if(even==odd)
     {
         res='Tied';
     }
    process.stdout.write(""+res);
    
  
});
