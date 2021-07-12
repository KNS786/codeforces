process.stdin.resume();
process.stdin.setEncoding();

var inputString="";
var currentLine=0;

process.stdin.on('data',function(data)
{
	inputString+=data;
	inputString=inputString.replace(/\s*$/,"").split('\n').map(el=>el.replace(/\s*$/,""));
	console.log(inputString);
	main(inputString);
});

function readline()
{
   return inputString[currentLine++];
}

function main(str)
{
    var length=parseInt(readline());
    var c=parseInt(readline());
    console.log(length);
    console.log(c);
    var newArr=[];
   while(length--)
   {  
      for(let i=0;i<length;i++)
      {
          newArr.push(readline());
      }
       for(let i=0;i<length+readline();i++)
       {
           newArr.push(readline());
       }
   }
   console.log(newArr);
}
