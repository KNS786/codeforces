process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
    inputString+=data;
    [str,empty]=inputString.split('\n')
    str=str.split(' ').reverse().join(' ');
    console.log(str);
    
});
