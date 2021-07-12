function finds(arr){
	var sum=0;
	var newarr=[]
	   let div=Math.floor(arr.length/2);
	       for(let i=0;i<div;i++){
			   sum+=arr[i];
		   }
		   newarr.push(sum);
		   sum=0;
		   for(let j=div;j<arr.length;j++){
			   sum+=arr[j];
		   }
		   newarr.push(sum);
		   return newarr;
		   
}
var  divides=finds([1,2,3,4,5,6]);
module.exports=divides;
