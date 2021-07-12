process.stdin.resume();
process.stdin.setEncoding('ascii');
var inputString="";
var currentLine=0;
process.stdin.on('data',function(data){
	inputString+=data;
});
process.stdin.on('end',function(){
	inputString=inputString.split('\n');
    let arr=inputString[0].split(' ').map(el=>parseInt(el));
    
    var newArr=new Array(3);
   for(let i=0;i<3;i++)
       newArr[i]=new Array(3);
   
     let s=0,i,j;
       for(i=0;i<3;i++){
           for(j=0;j<3;j++){
               newArr[i][j]=arr[s];
               s++;
           }
           
       }
 
      
      
      let sum=0,sum1=0;
        for(let i=0;i<3;i++){
             sum+=newArr[i][i]+newArr[i][newArr.length-1-i];
             sum1+=newArr[i][1]+newArr[1][i]
    }
     console.log(sum-newArr[1][1]);
    console.log(sum1-2*(newArr[1][1]));

    
});
module.exports=process.stdin;

