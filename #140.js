process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentline=0;

process.stdin.on('data',function(data){
	inputString=data;
	var arr=inputString.split('').filter(el=>el!=='\n');
	var len=parseInt(arr.pop());
    
	   while(len){
	       let res=arr.pop();
	       arr.unshift(res);
	       len--;
	   }
	  console.log(arr.join(''));
	  
	   
});
