process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
	inputString+=data;
});

process.stdin.on('end',_=>{
	inputString=inputString.replace(/\s*$/,"")
	              .split('\n').map(el=>el.replace(/\s*$/,''));
	main();
});
function readLine()
{
	return inputString[currentLine++];
}

function main()
{
	var g=parseInt(readline(),10);
	for(let i=0;i<g;i++)
	{
		var n=parseInt(readLine(),10);
		var b=readLine();
		console.log(b);
		
    }
}

