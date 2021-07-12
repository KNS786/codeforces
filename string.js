process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var cuentLine=0;

process.stdin.on('data',function(data){
	inputString+=data;
	main(inputString);
});
function main(str)
{
	
	