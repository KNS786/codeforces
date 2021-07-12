process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentline=0

process.stdin.on('data',function(data){
   inputString+=data;
   inputString=inputString.split('');
   console.log(inputString);
});
