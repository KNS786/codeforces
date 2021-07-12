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
	 var[m,n,a]=(readline().split(' '));
	  var ans=Math.ceil(m/a)*Math.ceil(n/a);
	  console.log(ans);
}

	 