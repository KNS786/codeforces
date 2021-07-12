process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentline=0;
process.stdin.on('data',function(data){
    inputString=data.split('\n');
   main(); 
});
function readline()
{
    return inputString[currentline++];
}
function main()
{
    var t=readline();
    var n=parseInt(readline());
    let newArr=[];
    while(--n){
      let temp=readline();
     newArr.push(temp)
    }
    let j=1;
   for(let i=0;i<newArr.length;i++){
       if(newArr[i][j-1]>=newArr[i][j]){
           [newArr[i][j],newArr[i][j-1]]=[newArr[i][j-1],newArr[i][j]]
       }
       else{
           [newArr[i][j-1],newArr[i][j]]=[newArr[i][j],newArr[i][j-1]];
       }
    }
let fail=[];
    for(let i=0;i<newArr.length;i++){
        let[a,...b]=([...newArr[i]].sort((a,b)=>a>b))
            for(let g=0;g<b.length;g++){
                if(a>=b[g]){b[g]=a;a=b[g]}
                else{a=b[g];b=a}
            }
          fail.push(a.concat(b))
    }
    console.log(fail);
}
