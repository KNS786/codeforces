process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data){
	inputString=Array.from(data);
   inputString=inputString.filter(el=>el!=='\n'&&el!==' ');
	 var obj={};
	 for(let i=0;i<inputString.length;i++)
	 {
		 obj[inputString[i]]=obj[inputString[i]]?obj[inputString[i]]+1:1;
	 }
	var newArr=[];
    let val=Object.keys(obj);


    for(let i=0;i<val.length;i++)
    {
        if(obj[val[i]]%2==1)
        {
            newArr.push(val[i]);
        }
        
    }
    
   newArr=newArr.join('')
    console.log(newArr.length?newArr:`Empty String`);
 
});