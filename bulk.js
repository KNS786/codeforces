process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
	inputString+=data;
});
process.stdin.on('end',function(){
	inputString=inputString.split('\n');
	main();
});
function readline(){
	return inputString[currentLine++];
}
function main(){
	 var t=readline();
	 