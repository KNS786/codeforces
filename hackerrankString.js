process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";

process.stdin.on('data',function(data){
	inputString+=data;
	inputString=inputString.split('\n').filter(el=>isNaN(el));
	inputString=inputString.sort((a,b)=>a-b);
	
	
	for(let i=0;i<inputString.length;i++)
	{
	    main(inputString[i]);
	}
	
});
function main(s)
{
    s=s.split('\n').join('');
  
    
     var str="hackerrank";
     if(s.length<str.length){
         console.log("NO");
     }
     var j=0;
     for(let i=0;i<s.length;i++)
     {
         if(j<str.length&&s.charAt(i)==str.charAt(i)){
             
             j++;
             
         }
           
     }
    j==str.length?console.log('YES'):console.log('NO');
}
