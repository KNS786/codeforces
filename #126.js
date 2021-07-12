process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentline=0;

process.stdin.on('data',function(data){
	inputString=data;
	inputString=inputString.split('').filter(el=>el!=='\n');
	var data=inputString.splice(0,2);
    var newArr=[],res=[];
      for(let i=0;i<inputString.length;i++)
          newArr[i]=inputString.splice(0,data[1]);
    
      for(let m=0;m<newArr.length;m++)
        (res.push(newArr[m].sort((a,b)=>a-b)))
       let count=0;
     for(let r=0;r<newArr.length;r++)
        count+=newArr[r].reduce((a,b)=>a>b?0:1);
    console.log(count?`no`:`yes`)
    

});
