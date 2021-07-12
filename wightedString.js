/*weighted Uniform String Hackerrank*/
function wightedString(s,queries)
{
	/*the is albaphets string values*/
	let alpha={
		a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,
		i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,
		q:17,r:18,s:19,t:20,u:21,v:22,w:23,
		x:24,y:25,z:26
	};
	
	/*this is Read the string values*/
      let count=0;
	for(let i=1;i<s.length;i++){
		if(Object.keys(alpha)[i-1]==Object.values(s)[i-1])
		{
		   count+=Object.values(alpha)[i-1];
		}
		/*check the Count and queries are comapred*/
		if(count==queries[i-1]){
			return "YES";
		}
		else{
			return "NO";
		}
	}
	
	
