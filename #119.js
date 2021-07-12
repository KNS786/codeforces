process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";

process.stdin.on('data',function(data){
    inputString=data;
    var [emp,arr]=inputString.split('\n');
      arr=arr.split(' ').filter(el=>el!=='\n'&&el!=='').map(el=>parseInt(el));
      let sum=0,sum1=0
      for(let i=0;i<3;i++)
         sum+=arr[i];
      let j=(arr.length%2==0)?2:3;
        let step=0; let m=arr.length-1;
        while(step<=((j%2==0)?j:j-1)){
             sum1+=arr[m];
             m--;
             step++;
             
        }
   res=(sum==sum1)?1:0;
   console.log(res);
 
    
});
