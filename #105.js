process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
     inputString=data;
     inputString=inputString.split('\n').filter(el=>el!=='\n'&&el!=='');
     main(inputString);
 
});

function readline()
{
    return inputString[currentLine++];
    
}
function main(inputString)
{
    let subArr_val=[];
    let arr=[];
    for(let i=1;i<=inputString.length;i++)
    {
        if(i%2==0)
        {
             x=readline().split(' ').filter(el=>el!=='\n'&&el!=='').map(el=>parseInt(el))[1];
            subArr_val.push(x);
             
        }
        else{
            y=readline().split(' ').filter(el=>el!=='\n'&&el!=='').map(el=>parseInt(el));
             arr.push(y);
             
        }

    }
var res=[];
    for(let i=1;i<arr.length;i++)
      {
        let j=arr[i];
        for(let r=0;r<j.length-1;r++){
        let sum =parseInt(j[r])+parseInt(j[r+1]);
        if(subArr_val[i-1]==sum){
         console.log(j.indexOf(j[r]),j.indexOf(j[r+1]))
        }
     }
    
      }
  return -1;
           
}


        #method 2:
   **********************

process.stdin.resume();
process.stdin.setEncoding('ascii');
var inputString="";
var currentline=0;
process.stdin.on('data',function(data){
    inputString+=data;
    inputString=inputString.split('\n');
    main(inputString);
});
function readline()
{
    return inputString[currentline++];
}
function main(str)
{ 
    let sum=0;
    var t=readline();
       while(t--)
       {
             var data=readline().split(' ')[1];
             var arr=readline().split(' ');
            let res=calculate(arr,data);
                    
        }

}
function calculate(arr,compare)
{
    var sum=0;
    for(let i=0;i<arr.length;i++)
    {
         sum=parseInt(arr[i]);
          for(let j=i+1;j<arr.length-1;j++){
              sum+=parseInt(arr[j]);
              if(sum==compare ){
                  console.log(arr.indexOf(arr[i]),arr.indexOf(arr[j]));
                  sum=0;
              }
          }
    }
    console.log(sum);
}