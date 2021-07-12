"use strict"
module.exports=function(arr){
	arr.sort();
	let newArr=[];
	for(let i=0;i<arr.length-1;i++)
	{
		newArr[i]=Math.abs(arr[i]-arr[i+1]);
	}
  return Math.min(...newArr);
};
