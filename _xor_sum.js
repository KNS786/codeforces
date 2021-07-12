/*for creatig the array subset array values Each ones 
   after creating the array values*/
   function _xorSum(array)
   {
	    /*ex[1,2,3]*/
		var a=[];
		a[0]=array[0];
		for(let i=1;i<array.length;i++)
			a[i-1]=array[i]|array[i-1];
	 console.log(a);
   }
   _xorSum([1,2,3]);
   
		