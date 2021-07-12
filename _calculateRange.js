process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString ="";
process.stdin.on('data',function(data){
	inputString+=data;
     inputString=inputString.split('\n');
	 var length=inputString[0];
	 var arr=inputString[1].split(' ').map(el=>parseInt(el));
	 
	 
	 var res=[];
	 for(let i=0;i<=length-1;i++)
	 {
		 let cal=Math.abs(arr[i]-arr[i+1]);
		 console.log(cal);
	 }
});
