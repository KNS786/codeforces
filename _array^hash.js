process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('\n');
	
	console.log(inputString);
});
