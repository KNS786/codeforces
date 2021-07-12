process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var  currentLine=0;

process.stdin.on('data',function(data){
	inputString+=data;
});
process.stdin.on('end',function(){
	inputString=inputString.split('\n');
   main();
});
function readline(){
	return inputString[currentLine++];
}
function main(){
	var t=readline();
	var [start,end]=readline().split(' ');
	  while(start<=end){
		  if(start==1)console.log(start+1);
		  else ++start;
		    let flag=1;
			
			let found=false;
  			 for(let j=start;!found;j++)
				  if(start%j==0){found=true;flag=0;}

			 
		   if(flag==1)console.log("YES");
		   else console.log("NO");
	  }
}

