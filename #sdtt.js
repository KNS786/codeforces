process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
    inputString+=data;
});
process.stdin.on('end',function(){
    inputString=inputString.split('\n');
    main()
});
function readline(){
    return inputString[currentLine++];
    
}
function main(){
  while(true){
     var num=parseInt(readline(),10);
     if(num==42)process.exit(1);
     console.log(num);
    // if(num==undefined||num==null||num=='\n'||isNaN(num)==NaN)process.exit();
     
  }
    
}
