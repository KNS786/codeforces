process.stdin.resume();
process.stdin.setEncoding('ascii');
var inputString="";
process.stdin.on('data',function(data){
	inputString+=data;
	main(inputString);
});

function main(str)
{
	let num=Number(str).split('');
     while(num.length%8!==0)
	 {
		 num.unshift('0');
		  num=parseInt(Number(num.reverse().join('')),2);
	 }
	 return String(num);
}
