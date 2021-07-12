process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
    inputString+=data;
    inputString=inputString.split('\n');
    let arr=inputString[1].split(' ');
    for(let i=0;i<arr.length/2;i++)
        [arr[i],arr[arr.length-i-1]]=[arr[arr.length-i-1],arr[i]];
    

    console.log(arr.join(' '));
    
    
});
