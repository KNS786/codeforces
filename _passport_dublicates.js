process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
var  currentLine=0;

process.stdin.on('data',function(data){
	inputString+=data; 
	inputString=inputString.split('\n');
  main(inputString);
});

function main(str){
    var length=str[0].split('');
	var arr=str[1].split(' ').filter(el=>el!=='');

    var obj={};
    var res=[]
    for(let i=0;i<length;i++)
    {
       obj[arr[i]]=0;
    }
    for(let c in obj)
    {
        res.push(c);
    }
    console.log(res.join(' '));
    
   
   
}

