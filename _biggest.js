process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString=data;
	inputString=inputString.split('\n');
	var length=parseInt(inputString[0]);
	var arr=inputString[1].split(' ').map(el=>parseInt(el));
	arr.sort((a,b)=>b-a);
  
   process.stdout.write(''+arr[2]);
});
