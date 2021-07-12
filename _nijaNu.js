process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split(' ').filter(el=>el!=='\n').map(el=>Number(el));
	main(inputString);
});

function main(str){
    var arr=str;
    let res=0
    for(let i=0;i<arr.length-1;i++)
      res=Math.abs(arr[i]-arr[i+1]);
    console.log(res);
}
