process.stdin.resume();
process.stdin.setEncoding('ascii')
 
 var inputstring="";
 var currentline=0;
 
 process.stdin.on('data',function(data){
	 inputstring+=data;
	 inputstring=inputstring.split('\n').filter(el=>el!=='');
     var [k,arr]=inputstring;
       k=k.split(' ')[1];
       arr=arr.split(' ').sort((a,b)=>a-b);
	   if(arr.length===0)return false;
	   let count=0;
	   let res=[];
	   let mid=Math.floor(arr.length/2);
	      for(let i=0;i<mid;i++){
			  ++count;
			  res[i]=arr[i];
		  }
		   res.push(arr[mid+1]);
          res.reverse();
          
          
          [res[1],res[0]]=[res[0],res[1]]
 console.log(res.join(' '));
 })
 
				 