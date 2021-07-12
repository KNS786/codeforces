process.stdin.resume();
process.stdin.setEncoding("ascii");

var inputString="";
var currentline=0;

process.stdin.on('data',function(data){
	inputString=data;
   var [arr,n]=inputString.split('\n')
    var arr=arr.split(' ').sort((a,b)=>a-b);
    console.log(arr);
    
       var start=0,end=arr.length;
       
       var newarr=[];
         var first=0;
         var last=arr.length-1;
          var res;
          while(first<=last){
              newarr.push(arr[last],arr[first]);
             ++first;
             --last;
             }
            res=(arr.length%2==0)?newarr:(newarr.splice(arr.length-1,1))?newarr:0;
            console.log(res.join(' '));
            
       
});
