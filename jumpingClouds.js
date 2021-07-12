process.stdin.resume();
process.stdin.setEncoding('ascii');
var inputString="";
var currentLine=0;
process.stdin.on('data',function(data){
    inputString+=data;
});
process.stdin.on('end',function(){
    inputString=inputString.split('\n');
    main();
});
function readline(){
    return inputString[currentLine++];
}
function main(){
    var t=parseInt(readline());
    var arr=readline().split(' ').map(el=>parseInt(el));
    let count=-1;
        for(let i=0;i<t;i++,count++){
            if(arr[i+2]==0 && i<t-1)i++;

        }
        console.log(count);

}
