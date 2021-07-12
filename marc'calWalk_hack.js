"use strict";
 /*hackerrank sol Marcs's Cakwalk*/
module.exports=function(calorie)
{
	calorie.sort((a,b)=>b-a);
	let sum=0;
	for(let i=0;i<calorie.length;i++)
		  sum+=calorie[i]*(2**i);
  console.log(sum);
};
