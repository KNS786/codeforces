/*Streing  matchjing the dubliocated*/
function stringMatch(str)
{
     str=str.split('');
	   str.sort((a,b)=>a-b);
	   
let count=0;
for(let i=1;i<str.length;i++)
{
	 if(str[i]==str[i-1])
		   count++;
}
if(count>0)
{
	 return "NO";
}
else if(count==0)
{
   return "YES";
}
}
