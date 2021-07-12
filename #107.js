process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentline=0;

process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('\n');
main(inputString);
})
function readline()
{
	return  inputString[currentline++];
}
function main(str)
{
	var max=[];
	let sum=0;
	var t=readline();
   while(t--){
	   var length=readline();
	   var arr=readline().split(' ');
	     for(let i=0;i<arr.length-1;i++){
			 let subArr=arr.slice(i);
			    for(let i=0;i<subArr.length;i++){
			        sum+=parseInt(subArr[i]);
			    }
			    max.push(Math.abs(sum));
			    sum=0;
   }
   
  max.sort((a,b)=>b-a)
   console.log(max[0]);
   
}
}