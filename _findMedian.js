process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('\n');

	var length=inputString[0];
	inputString=inputString[1].split('').filter(el=>el!==' ');
	inputString.sort((a,b)=>a-b);
     
	var mid=Math.floor(inputString.length/2);
	console.log(inputString[mid]);
	

});
