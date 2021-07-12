process.stdin.resume();
process.stdin.setEncoding('ascii');

var inputString="";
process.stdin.on('data',function(data){
   inputString+=data;
   inputString=inputString.split('\n').filter(el=>el!=='\n'&&el!=="");
  main(inputString);
});
function main(str)
{
	var length=Number(str[0]);
	var array=str[1].split(' ').map(el=>Number(el));
     var newArr=[];
	 /*this is for reverse array*/
	  var res;
	  for(let i=1;i<=array.length/2;i++)
	 {
	     j=array.length-i;
	     if(array[i-1]<array[j])
	       {
	           newArr.push(array[j],array[i-1])
	       }
	 }
	 console.log(newArr.join(' '));
	 

}
/* i/p
 6
1 2 3 4 5 6
  
  
  o/p
   6 1 5 2 4 3 
  */
  