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
})
function readline(){
    return inputString[currentLine++];
}
function main(){
    var t=parseInt(readline());
    var arr=readline().split(' ');//console.log(arr);
    let res=stockMarchant(t,arr);
    console.log(res);

}
function stockMarchant(n,arr){
    let sorted=arr.sort((a,b)=>a-b);
    let count=0;
     for(let i=0;i<n-1;i++){
         if(sorted[i]===sorted[i+1]){
             count++
            i+=1;
         }
     }
     return count;
}
