/*TECHGIG PROBLEM SQUERE MATRIX*/
function SqaureMatrix(inputArray)
{
	var length_array=inputArray.length;
	var res=[];
	var count=0;

	/*agani to tehe Loop will be varied*/
	 /*this is Find Mid Matrix*/
	 var mid=Math.ceil(length_array/2)-1;
	 var k=0;
	 var l=0;
	/*Two dimsonal Array*/
	/*this is for 00,11,22,33,44....*/
	
	
     for(var i=0;i<length_array;i++)
	 {
		 if(inputArray[i][i]!==null)
		 {
			 count=count+1
			 if(count===3)
			 {
				 res.push(1);
				 count=0;
			 }
		 }
		
}

for(var j=inputArray.length-1;j>=0;j--)
{
  var  i=0;
  if(inputArray[j][i]!==null)
		 {
			count=count+1;
      i++;
			 if(count===3)
			 {
				 res.push(1);
				count=0;
			 }
      
		 }
     else{
       continue;
     }
	 
}
   
	for(k=mid,l=1;k<=length_array;k++,l++)
	{
		if(inputArray[mid][l-1]!==null)
		{
			count=count+1;
			if(count===3)
			{
				res.push(1);
				count=0;
			}
		}
    
		
	

	 
	   if(inputArray[l-1][mid]!==null)
	   {
		   count =count+1;
		   if(count===3)
		   {
			   res.push(1);
			   count=0;
		   }
	   }
	}
	
	console.log(res);
	
   var right_values =0;
     for(var i=0;i<res.length;i++)
	 right_values+=res[i];
  return right_values;
  
}

