process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
	inputString=data;let sum=0;
	inputString=inputString.split('').filter(el=>el!=='\n'&&el!=='');
	var t=inputString.length;
	for(let i=0;i<t;i++){
	  sum+=Math.pow(inputString[i],t);
	}
	console.log(''+sum);

});
