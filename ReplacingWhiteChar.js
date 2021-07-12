
process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString="";
var input_stdin_array="";
var currentLine=0;

process.stdin.on('data',function(data){
	inputString+=data;
});

process.stdin.on('end',function(){
	input_stdin_array=inputSting.split('\n');
     input_stdin_array=input_stdin_array.join('').spilt('').filter(n=>n!=='');
	 console.log(input_stdin_array);
	 
	
});
