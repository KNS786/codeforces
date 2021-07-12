/*Hackerrank how many trees*/
var fs=require('fs');
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString="";
let currentline=0;
process.stdin.on('data',(data)=>{
	inputString+=data;
});

process.stdin.on('end',()=>{
	inputString=inputString.replace(/\s*$/,'')
	.split('\n').map(str=>str.replace(/\s*$/,'')
	main();
});
 function readline()
 {
	 return inputString[currentline++];
 }
 
 
 function main()
 {
	 const ws=fs.createWriteStream(process.env.OUTPUT_PATH);
	 const arrCount=parseInt(readline());
	 const arr=readline().split('').map(arrTemp=>parseInt(arrTemp,10));
	 let result=solve(arr);
	 ws.write(result+"\n");
	 ws.end();
 }
 
 
 
 
 
 
 
 
 
 
 
 function solve(arr)
 {
	 var res=0;
	 /*this is Pair using the Two for loops*/
	 for(let i=0;i<arr.length;i++)
	 {
		 for(let j=arr.length-1;j>0;j--)
		 {
			 let max=Math.max(arr[i]