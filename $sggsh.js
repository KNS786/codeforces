process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
	inputString+=data;
});
process.stdin.on('end',function(){
	inputString=inputString.split('\n');
});
function readline(){
	return inputString[currentLine++];
}
function main(){
	var n=parseInt(readline(),10);
	