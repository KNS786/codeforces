process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentline=0;

process.stdin.on('data',function(data){
	inputString=data;
	inputString=inputString.split('\n');
	var [len,arr]=inputString;
	arr=arr.split(' ').map(el=>parseInt(el));
	
	
	var m,n=[];
	 let i=0,j=1;
	 while(j<=(arr.length-1)){
          	if((arr[j]--)==(arr[i])){
          	     m=arr.slice(j).length;
          	      n.push(m);
          ++i;
          ++j;
          
	 }
	   
	
	let res=Math.max(...n);
	console.log(res);
	

});
