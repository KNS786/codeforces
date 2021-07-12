process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('\n');
	main(inputString);
});

function main(str)
{
	var len=str[0].split('');
	var sum=str[1].split(' ').map(el=>Number(el)).reduce((a,b)=>a+b);
	if((sum%5==0)&&(sum%3==0)&&(sum%2==0))
		console.log(1);
	else console.log(0);
}
