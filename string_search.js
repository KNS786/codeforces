process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data)
{
   inputString+=data;
   inputString=inputString.split('\n').filter(el=>el!=='').join('').split('');
   inputString[inputString.length-1]=inputString[inputString.length-1].toUpperCase()
   console.log(inputString.reverse().join(''));
   

});
