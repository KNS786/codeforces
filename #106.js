process.stdin.resume();
process.stdin.setEncoding('ascii');
var inputString="";
var currentLine=0;
process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('\n');
	main(inputString);
});

function readline()
{
	return inputString[currentLine++];
}
function main(str)
{
	var t=readline();
	var count=0;
	var sum=0;
	while(t--)
	{
		var length=readline();
		var arr=readline().split(' ').sort((a,b)=>a-b);
		   let i=0,j=1,k;
		      for(let i=0;i<arr.length-1;i++){
		          for(let j=i+2;j>i;j--){
		              sum=parseInt(arr[i])+parseInt(arr[j-1]);
		              if(sum==arr[j])
		              {++count;}
		              else{count=-1;} 
		          }
		      }
	}
	console.log(count)
}
