
process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('\n');
	main(inputString);
});

function main(str)
{
	var  length=str[0].split(' ');
	var arr=str[1].split(' ').map(el=>Number(el));
	

   var newArr=[];
   for(let i=arr.length;i>0;i--)
   {
    newArr[arr.length-i]=arr[i-1];
   }
   let res=newArr.length-1;
 while(res<newArr.length)
 {
     newArr[res]=newArr[res+1];
     res++;
 }
 newArr.length--;
 console.log(newArr.join(' '));

}