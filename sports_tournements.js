process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";

process.stdin.on('data',function(data)
{
	inputString+=data;
	inputString=inputString.split('\n').filter(el=>el!=='');
	var inputs=inputString.splice(0,1);
	 var arr=inputString.map(el=>Number(el));
	 var pom=[];
	 let sum=0,sum1=0;
	    for(let i=0;i<arr.length;i++)
	    {
	        if(arr[i]%2===0)
	        {
	            let res=Math.floor(arr[i]/2);
	            for(let i=res;i>=1;i--)
	            {
	                sum+=i;
	            }
	           pom.push(sum);
	        }
	      sum=0;
	         if(arr[i]%2!==0){
	            let res=Math.floor(arr[i]/2);
	            for(let i=res;i>=1;i--)
	            {
	             sum+=i;   
	            }
	            pom.push(sum);
	        }
	    }
	   
	   
	    for(let i=0;i<pom.length;i++)
	    {
	        console.log(pom[i]);
	    }
	    
});
