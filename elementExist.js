process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
	inputString+=data;
	inputString=Array.from(inputString).filter(el=>el!=='\n'&&el!==' ').map(el=>Number(el));
	main(inputString);
});

function main(str)
{
     var k=str.splice(0,2)[1];
     var array=str;
     var res=array.some(el=>el===k);
    console.log(!!res?"yes":'no')
    
}
