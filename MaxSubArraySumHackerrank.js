/*max SubArray Sum Values*/
function MaxSubArraySum(array,m)
{
   let res=[];
   let count=0;
   let sum=0;
   let remainder;
   for(let i=0;i<array.length;i++)
   {
	   sum=array[i];
	   remainder=sum%m;
	   res.push(remainder);
      for(let j=i+1;j<array.length;j++)
	  {
		  count=sum+array[j];
          remainder=count%m;
          res.push(remainder);
	  }
   }


//count the Finalize the vales in 
  return Math.max(...res);
   
}

   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
/*this is For recurrance Function values*/
function MaxSubArraySum(array,num)
{
	var res=[];
	var sum=0;
	var count=0;
	var remainder=0;
	var pointer=0;
	for(var i=0;i<array.length;i++)
	{
		var j=0;
		sum=array.slice(j,array.length-i);
		remainder=sum.reduce((a,b)=>a+b);
		res.push(remainder%num);
		count=(array.length-i)%num;
		res.push(count);
	}
	
	
	//after that values are used
	return Math.max(...res);
}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
