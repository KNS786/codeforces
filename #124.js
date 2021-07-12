process.stdin.resume();
process.stdin.setEncoding('ascii')

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
    inputString+=data;
    inputString=inputString.split('\n').filter(el=>el!=='\n'&&el!=='');
    var [len,arr]=inputString;
     arr=arr.split(' ');
      for(let i=0;i<arr.length-1;i++){
          if(arr[i]>arr[i+1])
			 continue;
       else
          arr[i+1]=arr[i];
         
      }
      console.log(arr.join(' '))
      
});
