
/*Monlk Welcome HackerErth*/

function main(input)
{
	var inputs=input.split(/\n/g);
    var a =inputs[1].split(' ');
	var b=inputs[2].split(' ');
	
	  var sum=[];
	 var i=0;
	 var n=a.length;
	 while(i<l){
		 sum.push(Number(a[i])+Number(b[i]));
		 i++;
	 }
	 console.log(sum.join(''));
}

process.stdin.resume();
process.stdin.setEncoding('utf-8');
var inputString="";
process.stdin.on("data",function(data){
	inputString+=data;
});

process.stdin.on('end',function(){
	main(inputString);
});


