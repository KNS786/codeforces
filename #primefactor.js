process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
	inputString+=data;
});
process.stdin.on('end',function(){
	inputString=inputString.split(' ');
	main();
});
function readline(){
	return inputString[currentLine++];
}
function main(){
	var t=readline();let arr=[],m=[];
  while(t--){
	var [start,end]=readline().split(' ');
	
	 for(let i=2;i<=end;i++){
		   if(!m[i]){
		   arr.push(i);
	       for(let j=i<<1;j<=end;j+=i){
			m[j]=true;
		   }
		   }
	 }
  }
  for(let s of arr)console.log(s);
  
}

    
		    