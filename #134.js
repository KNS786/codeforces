process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentline=0;

process.stdin.on('data',function(data){
    inputString+=data;
    inputString=inputString.split('\n').filter(el=>el!=='');
     var[length,...arr]=inputString;
     var newArr=[]
       arr.forEach(function(el,index,arr){
          el=el.split(' ').map(el=>parseInt(el));
          newArr.push(el);
       });
       let sum=0
       for(let i=0;i<newArr.length;i++){
           for(let j=0;j<newArr[i].length;j++){
               if(i==j){
              sum+=newArr[i][j];
           }
       }
       console.log(sum);
       
     
});
