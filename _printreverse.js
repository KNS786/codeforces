"use strict";
process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
	inputString+=data;
	main(inputString);
});

function main(str)
{
	var arr=Array(str).filter(el=>el!='\n');
	console.log(arr);
}
