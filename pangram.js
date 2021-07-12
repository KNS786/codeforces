/*hackerrank Problem For Pangram.js*/
'use strict';
module.exports=function(str)
{
   s=s.toLowerCase();
  if([...new set(str)].length===27){
    return "pangram";
   }
  else{
       return "not pangram";
   }
};
	