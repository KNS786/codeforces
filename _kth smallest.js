process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString =data;
	main(inputString);
});

function main(str)
{
	var arr=inputString.split('\n').filter(el=>el!=='');
	arr=arr.slice(1);
    var idx=parseInt(arr[1]);
    arr=arr[0].split(' ').map(el=>parseInt(el));
   arr=arr.sort((a,b)=>a-b);
	console.log(arr[idx-1]);
}
