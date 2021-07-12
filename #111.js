process.stdin.resume();
process.stdin.resume();
process.stdin.setEncoding('ascii')
 var inputString="";
 var currentLine=0;
 
 process.stdin.on('data',function(data){
	 inputString+=data;
	 inputString=inputString.split('\n');
	 var k=inputString[0].split(' ')[1];
    var arr=inputString[1].split(' ');
    
     let b=[];
      let a=[];
      
       for(let i=0;i<k;i++)
       {
           a.push(arr[i]);
       }
     
	for(let j=k;j<arr.length;j++)
	  {
	      b.push(arr[j])
	  }

	let sum=0;
	let res=[];
	  while(b.length<a.length){
	        sum=a.length+b.length;
	          if(sum>=k){
	              res.push(sum)
	          }
	       let  re=a.pop();
	       b.push(re);
	  }
	  
	  var s=[];
	  if(b.length>=a.length){
	       for(let i=0;i<arr.length-1;i++)
	       {
	          let subArr=arr.slice(i,i+2);
	            s.push(subArr);
	       }
	  }
         res.push(s.length);
         var val=0;
         for(let i=0;i<res.length;i++)
             val+=res[i];
             
        console.log(val);
    
 });
 
