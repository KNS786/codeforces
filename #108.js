process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
    inputString=data;
    inputString=inputString.split('\n').filter(el=>el!=='')
    main(inputString);
});

function readline()
{
    return inputString[currentLine++];
}
function main(str){
    let newArr=[];
  let length=readline();
 
     for(let i=1;i<=inputString.length-1;i++){
      var arr=readline().split(' ');
        newArr.push(arr);
  }
  var x,y,count=0;
     for(let j=0;j<newArr.length-1;j++){
         x=newArr[j].sort((a,b)=>a-b);
         y=newArr[j+1].sort((a,b)=>a-b);
          for(let i=0;i<x.length;i++){
              if(x[i]==y[i]){
               ++count;
              }
           }
         
     }
    
     let res0=count===(x.length)?'yes':'no';
     let res1=count==(y.length)?'yes':'no';
     console.log(res0==res1?'yes':'no');
 }
 
 #method2 success :-
 **********************
 
process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
    inputString=data;
    inputString=inputString.split('\n').filter(el=>el!=='')
    main(inputString);
});

function readline()
{
    return inputString[currentLine++];
}
function main(str){
    let newArr=[];
  let length=readline();
 
     for(let i=1;i<=inputString.length-1;i++){
      var arr=readline().split(' ');
        newArr.push(arr);
  }
  var x,y,count=0;
    for(let i=0;i<newArr.length;i++)
    {
        if(i%2==0){
            newArr[i]=newArr[i].reverse();
        }      
    }
var res=[];
    res.push(...newArr[0]);
     for(let j=1;j<newArr.length;j++){
         for(k=0;k<res.length;k++){
             if(res[k]==newArr[j][k]){
                 ++count;
             }else{
                --count;
             }
         }
     }
     if(res.length==count){
         console.log('yes');
     }
     else{
         console.log('no');
     }
      
 }