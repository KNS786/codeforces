process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString=data;
	 inputString=inputString.split('\n').filter(el=>el!=='').join('').split('');
	 var newStr="";
	 var i=1;
	 while(i<inputString.length){
	     if(inputString[i]!==inputString[i-1]){
	         newStr+=inputString[i-1];
	         ++i;
	     }
	     else{
	         i=i+2;
	     }
	 }
	 console.log(newStr);

});

	 