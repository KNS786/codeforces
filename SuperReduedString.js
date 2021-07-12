/*hacker Rank in Super Reduced String*/
console.SuperSubString=function(str){
  var i=0;
  while(i<str.length)
  {
	  /*this is For CharAt values*/
	  if(str[i]===str[i+1])
	  {
		  /*there are delet teh Sreing values of teh String values*/
		  str.splice(i,2);
	  }
	  else if(str[i]===str[i-1])
	  {
		  str.splice(i-1,2);
	      i--;
	  }
	  else{
		  i++;
	  }
  }
}

console.SuperSubString(exports str);
