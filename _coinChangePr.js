process.stdin.resume();
process.stdin.setEncoding('ascii')

var inputString="";

process.stdin.on('data',function(data)
{
  inputString+=data;
  inputString=inputString.split('\n');
  var check=inputString[0].split('\n').map(el=>parseInt(el))[0];

	  var arr=inputString[1].split(' ').map(el=>parseInt(el));

	 let res=Array(check+1).fill(0);
	    res[0]=1;
		arr.forEach(function(element,index,array){
			for(let i=element;i<=check;i++)
				res[i]+=res[i-element];
				
		});
	console.log(res[check]);
});

  
	  