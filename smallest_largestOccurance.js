process.stdin.resume();
process.stdin.setEncoding('ascii')

var inputString="";
process.stdin.on('data',function(data){
	inputString=Array.from(data).filter(el=>el!=='\n'&&el!==' ').map(el=>Number(el));
	let input=inputString.shift();
	 inputString.sort((a,b)=>a-b);
	 let diff=Math.abs(inputString[0]-inputString[input-1]);
	 console.log(diff);
	 
});
