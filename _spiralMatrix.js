function matrix()
{
	 var array=new Array(6);
	 for(let i =0;i<array.length;i++)
	 {
		   array[i]=new Array(i);
	 }
	
	for(let i=0;i<array.length;i++)
	{
		for(let j=0;j<array.length;j++)
		{
			array[i][j]=i+j;
		}
	}
	console.log(array);
	/*write a Logic for Spiral array*/
	let newArr=[],i;
	let k=0,l=0;
    while(k<array.length && l<array.length)
	{
      	for(i=k;i<array.length;i++)
		{
			newArr[i]=array[k][i];
		}
		k++;
		for(i=k;i<array.length;i++)
		{
			newArr[i]=array[i][array.length-1];
		}
	    array.length--;
	  if(k<array.length)
	  {
		  for(i=array.length-1;i>=0;i--)
		  {
			  newArr[i]=array[array.length-1][i];
		  }
		  array.length--;
	  }
	  if(l<array.length)
	  {
		  for(i=array.length-1;i>=k;i--)
		  {
			  newArr[i]=array[i][l];
		  }
		  l++;
	  }
	}
console.log(newArr);
	
	
}
matrix();
