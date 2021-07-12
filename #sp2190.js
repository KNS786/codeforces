process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var  currentLine=0;

process.stdin.on('data',function(data){
    inputString+=data;
});
process.stdin.on('end',function(){
    inputString=inputString.split('\n');
    main()
});function readLine(){
    return inputString[currentLine++];
    
}
function main(){
    var t=parseInt(readLine(),10),res=0;
    while(t--){
        let num=parseInt(readLine(),10);
        console.log(solve(num));
        
    }
    
    
}
function solve(num){
    let res=0;
        for(let i=2;i<=Math.sqrt(num);i++){
           if(num%i==0){
               if(i==(num/i))
                 res+=i;
                else
                  res+=(i+num/i);
                  
           }
        }
        return res+1;
}